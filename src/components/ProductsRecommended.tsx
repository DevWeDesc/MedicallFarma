import React from "react";
import { ListProductsData, ProductsRecomendedData } from "../../data/data";
import Link from "next/link";
import { CardProduct } from "./Cards/CardProduct";

export const ProductsRecommended = () => {
  return (
    <div className="py-12 px-5 flex flex-col gap-5 lg:py-28 lg:px-28 lg:gap-14 2xl:px-0 2xl:max-w-7xl 2xl:m-auto">
      <h2 className="text-xl font-bold sm:text-3xl lg:text-5xl">
        Produtos Recomendados para Você!
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:grid-cols-5 lg:gap-20">
        {ListProductsData.map((item) => (
          <Link
            href={`/detailsProduct/${item.id}`}
            className="hover:scale-105 transition-all"
            key={item.id}
          >
            <CardProduct
              key={item.id}
              id={item.id}
              product={item.product}
              image={item.image}
              category={item.category}
              subCatgegory={item.subCatgegory}
              href=""
              supplier={item.supplier}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
