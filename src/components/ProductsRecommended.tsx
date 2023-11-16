import React from "react";
import { ProductsRecomendedData } from "../../data/data";
import { CardProduct } from "./CardProduct";

export const ProductsRecommended = () => {
  return (
    <div className="py-12 px-5 flex flex-col gap-5">
      <h2 className="text-xl font-bold">Produtos Recomendados para Você!</h2>
      <div className="grid grid-cols-3 gap-y-6">
        {ProductsRecomendedData.map((item) => (
          <CardProduct
            key={item.id}
            id={item.id}
            content={item.content}
            image={item.image}
            name={item.name}
            supplier={item.supplier}
          />
        ))}
      </div>
    </div>
  );
};
