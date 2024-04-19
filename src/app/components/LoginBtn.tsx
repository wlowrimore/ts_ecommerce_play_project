"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginBtn: React.FC = () => {
  return (
    <div className="flex bg-black w-fit pl-3 pr-5 py-1 gap-2 rounded-full">
      <Image
        src="/images/logos/google.jpg"
        width={32}
        height={32}
        alt="google logo"
        className=" py-2 px-1 rounded-full"
      />
      <button
        className="bg-black rounded-r-full text-white hover:text-amber-100/80 transition duration-300 font-semibold tracking-widest pl-1 py-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        LOGIN WITH GOOGLE
      </button>
    </div>
  );
};

export default LoginBtn;
