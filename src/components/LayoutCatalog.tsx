import React, { type FC, type PropsWithChildren } from "react";

import { BreadCrumbs } from "~/components/breadCrumbs";

const LayoutCatalog: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <BreadCrumbs />
      {children}
    </div>
  );
};

export default LayoutCatalog;
