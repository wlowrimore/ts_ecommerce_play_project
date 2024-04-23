import React from "react";
import FurnitureData from "../components/Furniture/FurnitureData";

const Furniture: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 pb-24 mx-auto">
      <FurnitureData />
    </main>
  );
};

export default Furniture;
