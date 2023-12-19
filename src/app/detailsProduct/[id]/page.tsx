"use client";
import React, { useEffect, useState } from "react";
import {
  ListProductsData,
  ProductsRecomendedData,
} from "../../../../data/data";
import { IListProductsData, IProductsData } from "../../../@types/types";
import { CardProduct } from "@/components/Cards/CardProduct";
import Link from "next/link";
import SwiperHighlighs from "@/components/SwiperHighlighs/SwiperHighlighs";
import { Motion } from "@/animations/Motion";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [productSelected, setProductSelected] = useState(
    {} as IListProductsData
  );

  useEffect(() => {
    let ProductFiltered: IListProductsData | {} =
      ListProductsData.find((item) => item.id == id) || {};
    setProductSelected(ProductFiltered as IListProductsData);
  }, []);
  console.log(productSelected);

  return (
    <>
      <div className="pt-20 px-5 flex flex-col gap-10 mb-14 lg:px-28 2xl:px-80">
        <div>
          <div className="my-6 text-sm">
            <Link href="/" className="lg:text-base">
              Voltar para Home
            </Link>
          </div>
          <div className="lg:pr-28">
            <CardProduct
              size="large"
              product={productSelected.product}
              id={productSelected.id}
              image={productSelected.image}
              category={productSelected.category}
              supplier={productSelected.supplier}
              href={productSelected.href}
              subCatgegory={productSelected.subCatgegory}
            />
          </div>
        </div>
        {/* {productSelected.description && (
        <div>
          <h3 className="text-xl font-medium mb-2 lg:text-4xl">Descrição</h3>
          <div className="flex flex-col gap-3 text-sm lg:text-xl">
          {productSelected?.description?.map((item, index) => (
            <div key={index}>
            <h4 className="font-medium">{item.title}</h4>
            <p className="font-light opacity-80">{item.content}</p>
            </div>
            ))}
          </div>
        </div>
      )} */}
        <div className="flex flex-col mt-10 gap-2">
          <h2 className="text-xl font-medium">Produtos Recomendados</h2>
          <SwiperHighlighs />
        </div>
      </div>
      <Motion />
    </>
  );
}
