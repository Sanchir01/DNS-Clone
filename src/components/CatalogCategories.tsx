import React from "react";
import { api } from "~/utils/api";
import Link from "next/link";

const CatalogCategories = () => {
  const { data } = api.category.getAll.useQuery();

  const [subCatalog, setSubCatalog] = React.useState<number | null>();

  return (
    <div onClick={() => setSubCatalog(null)}>
      <div className="relative z-20 m-2 flex gap-4 rounded-lg bg-white">
        <div className="">
          {data?.map((category) => (
            <div
              onMouseEnter={() => setSubCatalog(category.id)}
              key={category.id}
              className={subCatalog === category.id ? "text-orange-400" : ""}
            >
              {category.title}
            </div>
          ))}
        </div>
        {subCatalog && (
          <div className="flex-1">
            {data
              ?.find((category) => category.id === subCatalog)
              ?.subCategories.map((subCategory) => (
                <div key={subCategory.id}>
                  <Link
                    href={`catalog/${subCategory.slug}`}
                    className="block font-bold hover:text-orange-400"
                  >
                    {subCategory.title}
                  </Link>
                  {subCategory.subCategories.map((lvl3Category) => (
                    <Link
                      href={`catalog/${lvl3Category.slug}`}
                      key={lvl3Category.id}
                      className="block hover:text-orange-400"
                    >
                      {lvl3Category.title}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        )}
      </div>
      {subCatalog && (
        <div className="absolute right-0 top-0 h-screen w-full bg-neutral-600 opacity-25"></div>
      )}
    </div>
  );
};

export default CatalogCategories;
