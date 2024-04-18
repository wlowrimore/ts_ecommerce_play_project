import CategoryLinks from "./components/Home/CategoryLinks";
import HeroProduct from "./components/Home/HeroProduct";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className=" w-screen min-h-screen flex flex-col items-center p-6 mx-auto">
      <HeroProduct />
      {/* <Products /> */}
      <CategoryLinks />
    </main>
  );
}
