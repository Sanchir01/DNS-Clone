import React, { useState } from "react";
import { NextPage } from "next";
import { RouterOutputs } from "~/utils/api";
import Link from "next/link";

const CategoryItem = ({
  category,
}: {
  category: RouterOutputs["category"]["getAll"][number];
}) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className="relative h-64 w-64 rounded bg-white p-4 shadow"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {onHover && (
        <div
          className={`transition-all duration-300 ${
            !onHover ? "opacity-0" : ""
          }`}
        >
          {category.title}
          <ul>
            {category.subCategories.map((subCategory) => (
              <li className="hover:text-orange-400" key={subCategory.id}>
                <Link href={`catalog/lvl2/${subCategory.slug}`}>
                  {subCategory.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!onHover && (
        <div
          className={`${
            onHover ? "absolute top-4  text-center hover:opacity-0" : ""
          }flex flex-col items-center justify-center transition-all duration-300`}
        >
          {category.Image && (
            <img
              className="h-48 w-48"
              src={category.Image}
              alt={category.title}
            />
          )}
          {category.title}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
