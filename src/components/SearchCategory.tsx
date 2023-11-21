import React from "react";
import { CategoriesData } from "../../data/data";
import Image from "next/image";

export const SearchCategory = () => {
  return (
    <div className="mt-9 px-5 flex flex-col gap-4 pb-12">
      <h2 className="text-2xl font-bold">Busque Produtos por Categoria</h2>

      <div className="grid grid-cols-3 gap-3">
        {CategoriesData.map((item) => (
          <div
            className="text-xs flex flex-col justify-center items-center text-center py-6"
            key={item.name}
          >
            <Image alt="" src={item.image} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
