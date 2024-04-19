"use client";

import { useState, useEffect } from "react";
import { getCategories, Category } from "@/app/data-fetching/getProductData";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CategoryLinks: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await getCategories();
      const listedCategories = categoryData.slice(0, 5);
      setCategories(listedCategories);
    };
    fetchCategories();
  }, []);

  return (
    <main className="flex flex-col">
      <h2 className="text-2xl text-zinc-800 mb-2">Shop By Category</h2>
      <div className="flex w-full justify-center gap-2">
        {categories?.map((category) => (
          <div key={category.id} className="relative">
            <Link href="#">
              <div className={`${urbanist.className} block relative w-48 h-96`}>
                <Image
                  src={category.image}
                  layout="fill"
                  objectFit="cover"
                  alt={category.name}
                  className="rounded transition-opacity duration-300 border-4 border-zinc-500"
                />
                <div className="absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl bg-black/70 w-full p-3 text-center hover:bg-white hover:text-zinc-700 hover:font-semibold transition duration-300">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryLinks;
