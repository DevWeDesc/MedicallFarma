"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CardProduct } from "@/components/Cards/CardProduct";
import Link from "next/link";
import {
  CardSoluctionData,
  ListProductsData,
  ProductsRecomendedData,
} from "../../../../data/data";
import { IListProductsData, IProductsData } from "../../../../types/types";
import Image, { StaticImageData } from "next/image";
import ImageDietaEnteral from "../../../../public/ImageDietasEnterais.png";
import ImageAcessories from "../../../../public/ImageAcessoriesMedic.png";
import ImageMedicaments from "../../../../public/ImageMedicaments.png";

export default function Page() {
  const { category, subcategory } = useParams();
  const categoryString = subcategory.toString();
  let titlePage = categoryString.replace(/-/g, " ");
  titlePage = titlePage
    .substring(0, 1)
    .toUpperCase()
    .concat(titlePage.substring(1));
  const ProductsCategory: IListProductsData[] = ListProductsData.filter(
    (item) => item.href.includes(categoryString)
  );
  const [ImagePage, setImagePage] = useState<StaticImageData | string>("");

  useEffect(() => {
    // let productsFilteredCategory: IListProductsData[] =
    // setProductsCategory(productsFilteredCategory);

    // if (filterSubCategorie.length > 0) {
    //   productsFilteredCategory = productsFilteredCategory.filter((item) => {
    //     filterSubCategorie.map((filterSub) => {
    //       return item.categories?.includes(filterSub);
    //     });
    //   });
    //   console.log(productsFilteredCategory);
    //   setProductsCategory(productsFilteredCategory);
    // }

    category === "Medicamentos"
      ? setImagePage(ImageMedicaments)
      : category === "Dietas Enterais"
      ? setImagePage(ImageDietaEnteral)
      : setImagePage(ImageAcessories);
  }, [category, ImagePage]);

  console.log(ProductsCategory);
  return (
    <div>
      <div className="pt-14 lg:pt-20 relative bg-grayDark text-white">
        <Image alt="" className="-z-10 w-full" src={ImagePage} />
        <Link
          href="/"
          className="absolute top-[20%] px-4 text-xs -translate-y-3/4 lg:px-28 lg:text-sm 2xl:px-80"
        >
          Voltar para Home
        </Link>
        <div className="absolute top-1/2 transform -translate-y-1/2 px-5 grid gap-4 grid-cols-3 lg:px-28 lg:gap-20 2xl:px-80">
          <div className="h-full flex flex-col justify-center font-medium">
            <h2 className="text-lg lg:text-5xl">{titlePage}</h2>
            <p className="text-xs lg:text-3xl">
              Avanços e Desafios na Indústria
            </p>
          </div>
          <p className="col-span-2 text-[10px] lg:text-xl">
            A indústria de medicamentos desempenha um papel vital na promoção da
            saúde global, buscando constantemente desenvolver terapias
            inovadoras para tratar e prevenir diversas condições médicas.
          </p>
        </div>
      </div>
      <div className="py-16 px-5 flex flex-col gap-3 lg:px-28 lg:gap-12 2xl:px-80">
        {category === "Medicamentos" && (
          <>
            {CardSoluctionData.map((item, index) => (
              <>
                {item.subCategories?.map((item) => (
                  <button
                    className="py-10 hidden"
                    onClick={() => {
                      // handleFilterSubCategorie(item);
                    }}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </>
            ))}
          </>
        )}
        <div className="2xl:max-w-7xl 2xl:m-auto flex flex-col gap-10">
          <h2 className="font-bold text-2xl lg:text-5xl">{titlePage}</h2>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-8  ">
            {ProductsCategory.map((item) => (
              <Link href={`/detailsProduct/${item.id}`} key={item.id}>
                <CardProduct
                  category={item.category}
                  image={item.image}
                  product={item.product}
                  subCatgegory={item.subCatgegory}
                  href={item.href}
                  id={item.id}
                  supplier={item.supplier}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
