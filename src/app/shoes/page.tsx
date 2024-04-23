import React from "react";
import ShoesData from "../components/Shoes/ShoesData";

const Shoes: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 pb-24 mx-auto">
      <ShoesData />
    </main>
  );
};

export default Shoes;
