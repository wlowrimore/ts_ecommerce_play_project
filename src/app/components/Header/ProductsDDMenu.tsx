import Link from "next/link";
import React from "react";

const ProductsDDMenu: React.FC = () => {
  return (
    <nav className="absolute bg-white shadow-lg shadow-zinc-500 rounded">
      <ul className="flex flex-col w-[12rem] py-4">
        <Link
          href="/clothes"
          className="hover:bg-zinc-300 hover:text-xl py-2 px-4 transition-all duration-300"
        >
          <li>Clothes</li>
        </Link>
        <Link
          href="/electronics"
          className="hover:bg-zinc-300 hover:text-xl py-2 px-4 transition-all duration-300"
        >
          <li>Electronics</li>
        </Link>
        <Link
          href="/furniture"
          className="hover:bg-zinc-300 hover:text-xl py-2 px-4 transition-all duration-300"
        >
          <li>Furniture</li>
        </Link>
        <Link
          href="/shoes"
          className="hover:bg-zinc-300 hover:text-xl py-2 px-4 transition-all duration-200"
        >
          <li>Shoes</li>
        </Link>
        <Link
          href="/miscellaneous"
          className="hover:bg-zinc-300 hover:text-xl py-2 px-4 transition-all duration-300"
        >
          <li>Miscellaneous</li>
        </Link>
      </ul>
    </nav>
  );
};

export default ProductsDDMenu;
