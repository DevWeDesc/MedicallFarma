import React from "react";
import { ProductsRecomendedData } from "../../data/data";
import Link from "next/link";
import { CardProduct } from "./Cards/CardProduct";

export const ProductsRecommended = () => {
  return (
    <div className="py-12 px-5 flex flex-col gap-5">
      <h2 className="text-xl font-bold">Produtos Recomendados para Você!</h2>
      <div className="grid grid-cols-3 gap-3">
        {ProductsRecomendedData.map((item) => (
          <Link href={`/detailsProduct/${item.id}`} key={item.id}>
            <CardProduct
              key={item.id}
              id={item.id}
              content={item.content}
              image={item.image}
              name={item.name}
              supplier={item.supplier}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
