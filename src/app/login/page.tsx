import LoginBtn from "../components/LoginBtn";
import Image from "next/image";

const Login: React.FC = () => {
  return (
    <main className="w-full h-auto p-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-[30rem] h-[40rem] border-2 border-zinc-500 rounded px-16 py-10 space-y-12">
        <h1 className="text-3xl">the Cambridge Collection</h1>
        <p className="font-light">
          <strong>The Cambridge Collection</strong> offers a variety of stylish
          and trending apparel and accessories for anyone and everyone.
          <br />
          <br />
          Located in the heart of downtown Nashville, Tennessee, nestled amongst
          the arts district and night life, the Cambridge Collection has
          something for everyone. <br />
          <br />
          So the next time you visit our fine city, stop by and say hello.
          However, if you can&apos;t make it by the shop, just sign in below to
          do your shopping. We ship all over the world.
        </p>
        <LoginBtn />
      </div>
    </main>
  );
};

export default Login;
