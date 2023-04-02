import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral-700">
      <footer className="m-auto  flex max-w-6xl gap-4 py-2 text-white">
        <FooterColum
          title="Company"
          links={["About", "Company", "News To partners", "Jobs"]}
        />
        <FooterColum
          className="flex-1"
          title="Buyers"
          links={["Loans", "Delivery", "How to place", "Payment methods"]}
        />
        <FooterColum title="Stay Connected">
          {" "}
          <Link href={"/"}>
            8 888 888 88 88 <br />{" "}
            <span className="text-sm">Addresses of stores in Moscow</span>
          </Link>
        </FooterColum>
      </footer>
    </div>
  );
};


export default Footer;

interface IFooterColumn
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  links?: string[];
}

const FooterColum: FC<IFooterColumn> = ({
  title,
  links,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="border-b-2 border-b-neutral-500 pb-2 font-semibold">
        {title}
      </h3>
      {links && (
        <ul className="flex flex-col flex-wrap">
          {links.map((link) => (
            <li key={link}>
              <Link href={"/"}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};
