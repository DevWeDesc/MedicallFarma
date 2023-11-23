import React from "react";
import { CategoriesData } from "../../data/data";
import Image from "next/image";

export const SearchCategory = () => {
  return (
    <div className="mt-9 px-5 flex flex-col gap-4 pb-12 lg:px-28 lg:py-28 lg:gap-14">
      <h2 className="text-2xl font-bold lg:text-5xl">
        Busque Produtos por Categorias
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {CategoriesData.map((item) => (
          <div
            className=" flex flex-col justify-center items-center text-center py-6"
            key={item.name}
          >
            <Image alt="" className="lg:h-10 lg:w-auto" src={item.image} />
            <p className="text-xs lg:text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
