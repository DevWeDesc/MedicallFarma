import React from "react";
import { ProductsRecomendedData } from "../../data/data";
import Link from "next/link";
import { CardProduct } from "./Cards/CardProduct";

export const ProductsRecommended = () => {
  return (
    <div className="py-12 px-5 flex flex-col gap-5 lg:py-28 lg:px-28 lg:gap-14 2xl:px-80">
      <h2 className="text-xl font-bold lg:text-5xl">
        Produtos Recomendados para Você!
      </h2>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-5 lg:gap-6">
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
