import CategoryLinks from "./components/Home/CategoryLinks";
import CouponAd from "./components/Home/CouponAd";
import HeroProduct from "./components/Home/HeroProduct";

export default function Home() {
  return (
    <main className=" w-screen min-h-screen flex flex-col items-center px-6 py-28 mx-auto">
      <HeroProduct />
      {/* <CouponAd /> */}
      <CategoryLinks />
    </main>
  );
}
