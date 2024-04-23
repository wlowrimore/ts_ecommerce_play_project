"use client";

import { useState, useEffect } from "react";
import { Options } from "@/app/api/auth/options";
// import { signout } from "next-auth/react";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-screen h-28 flex items-center justify-around text-zinc-700 fixed z-10 ${
        isScrolled
          ? "bg-white shadow-md shadow-zinc-700 transition duration-300"
          : "bg-transparent"
      }`}
    >
      <div className={`${urbanist.className} flex flex-col items-center`}>
        <div className="flex gap-2">
          <p className="text-xl font-light">the</p>
          <h1 className="text-5xl font-thin pb-[0.15rem] tracking-wide">
            Cambridge
          </h1>
        </div>
        <div className="bg-zinc-400 w-full h-[0.05rem] mt-1"></div>
        <p className="text-4xl font-thin  tracking-wider w-full text-start ml-20">
          collection
        </p>
      </div>

      <ul className="flex text-lg gap-12">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="#">
          <li>Products</li>
        </Link>
        <Link href="#">
          <li>Contact</li>
        </Link>
        {session ? (
          <Link href="/api/auth/signout" className="flex gap-4 items-center">
            <li>SignOut</li>
            <Image
              src={`${session.user?.image}`}
              width={32}
              height={32}
              alt={`${session.user?.name}`}
              className="rounded-full"
            />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <li>SignIn</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Header;
