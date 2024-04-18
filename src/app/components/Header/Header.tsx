import { Urbanist } from "next/font/google";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Header: React.FC = () => {
  return (
    <nav className="w-screen h-28 flex items-center justify-around text-zinc-700 mt-2">
      <div className={`${urbanist.className} flex flex-col items-center`}>
        <h1 className="text-5xl font-thin pb-[0.15rem] tracking-wide">
          Cambridge
        </h1>
        <div className="bg-zinc-400 w-full h-[0.05rem]"></div>
        <p className="text-4xl font-thin  tracking-wide w-full text-center">
          clothing
        </p>
      </div>
      <ul className="flex text-lg gap-12">
        <Link href="#">
          <li>Home</li>
        </Link>
        <Link href="#">
          <li>About</li>
        </Link>
        <Link href="#">
          <li>Products</li>
        </Link>
        <Link href="#">
          <li>Contact</li>
        </Link>
        <Link href="#">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
