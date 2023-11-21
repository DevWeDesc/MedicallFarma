"use client";
import React, { useEffect, useState } from "react";
import { ProductsRecomendedData } from "../../../data/data";
import { IProductsData } from "../../../types/types";
import ImageDietaEnteral from "../../../public/ImageDietasEnterais.png";
import ImageAcessories from "../../../public/ImageAcessoriesMedic.png";
import ImageMedicaments from "../../../public/ImageMedicaments.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardProduct } from "@/components/CardProduct";

export default function Page({ params }: { params: { category: string } }) {
  let { category } = params;
  category = category.includes("%20") ? category.replace("%20", " ") : category;
  const [ProductsCategory, setProductsCategory] = useState<IProductsData[]>([]);
  const [ImagePage, setImagePage] = useState<StaticImageData | string>("");

  useEffect(() => {
    let productsFilteredCategory: IProductsData[] =
      ProductsRecomendedData.filter((item) =>
        item.categories?.includes(category)
      );
    setProductsCategory(productsFilteredCategory);

    category === "Medicamentos"
      ? setImagePage(ImageMedicaments)
      : category === "Dietas Enterais"
      ? setImagePage(ImageDietaEnteral)
      : setImagePage(ImageAcessories);
  }, [category, ImagePage]);

  console.log(ProductsCategory);

  return (
    <div>
      <div className="relative bg-grayDark text-white">
        <Image alt="" className="-z-10" src={ImagePage} />
        <Link
          href="/"
          className="absolute top-[20%] px-4 text-xs -translate-y-3/4"
        >
          Voltar para Home
        </Link>
        <div className="absolute top-2/4 -translate-y-2/4 px-5 grid gap-4 grid-cols-3">
          <div className="h-full flex flex-col justify-center font-medium">
            <h2 className="text-lg">{category}</h2>
            <p className="text-xs">Avanços e Desafios na Indústria</p>
          </div>
          <p className="col-span-2 text-[10px]">
            A indústria de medicamentos desempenha um papel vital na promoção da
            saúde global, buscando constantemente desenvolver terapias
            inovadoras para tratar e prevenir diversas condições médicas.
          </p>
        </div>
      </div>
      <div className="py-16 px-5 flex flex-col gap-3 ">
        <h2 className="font-bold text-2xl">{category}</h2>
        <div className="grid grid-cols-3 gap-4">
          {ProductsCategory.map((item) => (
            <Link href={`/detailsProduct/${item.id}`} key={item.id}>
              <CardProduct
                content={item.content}
                image={item.image}
                name={item.name}
                id={item.id}
                supplier={item.supplier}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
