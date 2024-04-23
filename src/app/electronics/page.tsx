import React from "react";
import ElectronicsData from "../components/Electronics/ElectronicsData";

const Electronics: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 pb-24 mx-auto">
      <ElectronicsData />
    </main>
  );
};

export default Electronics;
