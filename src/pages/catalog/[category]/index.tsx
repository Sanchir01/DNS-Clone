import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Link from "next/link";
import { NextPageWithLayout } from "~/pages/_app";
import Layout from "~/components/Layout";
import LayoutCatalog from "~/components/LayoutCatalog";
const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { category } = router.query;
  if (typeof category !== "string") {
    return null;
  }
  const { data } = api.category.getSubCategories.useQuery(category);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">{data?.title}</h1>
      <div className="flex flex-wrap gap-4">
        {data?.subCategories.map(({ id, Image, title, slug }) => (
          <Link
            passHref
            href={`${data.slug}/${slug}`}
            className="flex h-64 w-64 flex-col items-center rounded-md bg-white p-4 text-center shadow hover:shadow-xl"
            key={id}
          >
            {Image && (
              <img className="h-48 w-48" src={Image as string} alt="" />
            )}

            {title}
          </Link>
        ))}
      </div>
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
