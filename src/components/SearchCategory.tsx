import React from "react";
import { CategoriesData } from "../../data/data";

export const SearchCategory = () => {
  return (
    <div className="mt-9 px-5 flex flex-col gap-4 pb-12">
      <h2 className="text-2xl font-bold">Busque Produtos por Categoria</h2>

      <div className="grid grid-cols-3 gap-3">
        {CategoriesData.map((item) => (
          <p className="text-xs text-center py-8 bg-gray-100" key={item.name}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};
