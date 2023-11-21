"use client";
import React, { useEffect, useState } from "react";
import { ProductsRecomendedData } from "../../../../data/data";
import { ProductsRecommended } from "@/components/ProductsRecommended";
import { IProductsData } from "../../../../types/types";
import { CardProduct } from "@/components/CardProduct";
import Link from "next/link";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [productSelected, setProductSelected] = useState({} as IProductsData);

  useEffect(() => {
    const ProductFiltered: IProductsData | any = ProductsRecomendedData.find(
      (item) => item.id == id
    );
    setProductSelected(ProductFiltered);
  }, []);
  console.log(productSelected);

  return (
    <div className="px-5">
      <div className="my-6 text-sm">
        <Link href="/">Voltar para Home</Link>
      </div>
      <CardProduct
        content={productSelected.content}
        id={productSelected.id}
        image={productSelected.image}
        name={productSelected.name}
        supplier={productSelected.supplier}
      />
    </div>
  );
}
