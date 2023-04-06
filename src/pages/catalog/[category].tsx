import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  return <div>1231</div>;
};

export default Page;
