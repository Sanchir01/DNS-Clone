import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Link from "next/link";
import { BreadCrumbs } from "~/components/breadCrumbs";

const Page: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  if (typeof category !== "string") {
    return null;
  }
  const { data } = api.category.getSubCategories.useQuery(category as string);
  return (
    <div>
      <h1 className="font-semobold text-3xl">{data?.title}</h1>
      <div className="flex flex-wrap gap-4 ">
        {data?.subCategories.map(({ id, Image, title, slug }) => (
          <Link
            href={`/catalog/${slug}`}
            className="flex h-64 w-64 flex-col rounded-md bg-white p-4 text-center shadow"
            key={id}
          >
            {Image && <img className="h-48 w-48" src={Image} alt={title} />}
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
