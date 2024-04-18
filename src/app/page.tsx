import HeroProduct from "./components/Home/HeroProduct";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center mx-auto">
      <h1 className="text-3xl font-bold text-red-800 tracking-wider">
        The Fake Ecommerce Site
      </h1>
      <HeroProduct />
      {/* <Products /> */}
    </main>
  );
}
