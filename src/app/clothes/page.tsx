import ClothesData from "../components/Clothes/ClothesData";

const Clothes: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 pb-24 mx-auto">
      <ClothesData />
    </main>
  );
};

export default Clothes;
