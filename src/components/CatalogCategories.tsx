import React from "react";
import { api } from "~/utils/api";
import { GetStaticProps } from "next";

const CatalogCategories = () => {
  const { data } = api.category.getAll.useQuery();
  return (
    <div>
      {data?.map((category) => (
        <div key={category.id}>{category.title}</div>
      ))}
    </div>
  );
};

export default CatalogCategories;
