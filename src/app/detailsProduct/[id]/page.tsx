"use client";
import React, { useEffect, useState } from "react";
import { ProductsRecomendedData } from "../../../../data/data";
import { IProductsData } from "../../../../types/types";
import { CardProduct } from "@/components/Cards/CardProduct";
import Link from "next/link";
import SwiperHighlighs from "@/components/SwiperHighlighs/SwiperHighlighs";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [productSelected, setProductSelected] = useState({} as IProductsData);

  useEffect(() => {
    let ProductFiltered: IProductsData | {} =
      ProductsRecomendedData.find((item) => item.id == id) || {};
    setProductSelected(ProductFiltered as IProductsData);
  }, []);
  console.log(productSelected);

  return (
    <div className="px-5 flex flex-col gap-10 mb-14">
      <div>
        <div className="my-6 text-sm">
          <Link href="/">Voltar para Home</Link>
        </div>
        <CardProduct
          size="large"
          content={productSelected.content}
          id={productSelected.id}
          image={productSelected.image}
          name={productSelected.name}
          supplier={productSelected.supplier}
          categories={productSelected.categories}
        />
      </div>
      {productSelected.description && (
        <div>
          <h3 className="text-xl font-medium mb-2">Descrição</h3>
          <div className="flex flex-col gap-3 text-sm">
            {productSelected?.description?.map((item, index) => (
              <div key={index}>
                <h4 className="font-medium">{item.title}</h4>
                <p className="font-light opacity-80">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col mt-10 gap-2">
        <h2 className="text-xl font-medium">Produtos Recomendados</h2>
        <SwiperHighlighs />
      </div>
    </div>
  );
}
