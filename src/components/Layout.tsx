import React, { type FC, type PropsWithChildren } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="m-auto max-w-6xl"> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
