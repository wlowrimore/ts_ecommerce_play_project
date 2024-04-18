"use client";

import { useState, useEffect } from "react";
import { getCategories, Category } from "@/app/data-fetching/getProductData";
import Image from "next/image";
import Link from "next/link";

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
          <div key={category.id}>
            <Link href="#">
              <div className="w-full h-auto hover:opacity-80">
                <Image
                  src={category.image}
                  width={200}
                  height={200}
                  alt={category.name}
                  className="h-[30rem] object-cover rounded"
                />
              </div>
            </Link>
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryLinks;
