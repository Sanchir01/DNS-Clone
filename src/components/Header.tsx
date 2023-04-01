import React from "react";
import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      title: "favorites",
      link: "/favorites",
    },
    {
      title: "comparison",
      link: "/comparison",
    },
    {
      title: "cart",
      link: "/cart",
    },
    {
      title: "login",
      link: "/login",
    },
  ];

  return (
    <div className=" shadow">
      <div className='m-auto flex max-w-6xl gap-4  p-2'>
        <Link className=' block rounded-lg bg-orange-400 text-white px-4 py-2 font-bold text-3xl' href={"/"}>DNS</Link>
        <input type="text" className=' flex-1 rounded-lg bg-grey-100' placeholder='поиск по сайту '/>
        <nav className="items-center flex gap-2">
          {navItems.map((item) => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
