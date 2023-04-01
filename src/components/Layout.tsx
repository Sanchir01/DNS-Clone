import React, { type FC, type PropsWithChildren } from "react";
import Header from "~/components/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="m-auto max-w-6xl"> {children}</main>
    </div>
  );
};

export default Layout;
