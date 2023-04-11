import React, { ReactElement } from "react";
import { NextPage } from "next";
import { api } from "~/utils/api";
import Image from "next/image";
import CategoryItem from "~/pages/catalog/components/categoryItem";
import { BreadCrumbs } from "~/components/breadCrumbs";
import { NextPageWithLayout } from "~/pages/_app";
import LayoutCatalog from "~/components/LayoutCatalog";
import Layout from "~/components/Layout";

const Page: NextPageWithLayout = () => {
  const { data } = api.category.getAll.useQuery();
  return (
    <div className="my-4 flex flex-wrap gap-4">
      {data?.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutCatalog>{page}</LayoutCatalog>
    </Layout>
  );
};
export default Page;
