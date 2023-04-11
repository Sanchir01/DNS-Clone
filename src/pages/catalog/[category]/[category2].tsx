import React, { ReactElement } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import LayoutCatalog from "~/components/LayoutCatalog";
import { NextPageWithLayout } from "~/pages/_app";

const Page: NextPageWithLayout = () => {
  return <div>1231 </div>;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LayoutCatalog>{page}</LayoutCatalog>
    </Layout>
  );
};
export default Page;
