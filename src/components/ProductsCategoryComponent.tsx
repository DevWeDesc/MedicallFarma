import Link from "next/link";
import React from "react";
import { CardProduct } from "./Cards/CardProduct";
import { IProducsCategoryComponent } from "../../types/types";
import Image from "next/image";
import { AnimationScroll } from "@/animations/AnimationScroll";

export const ProductsCategoryComponent = ({
  ImagePage,
  titlePage,
  categoryAUX,
  listProductsCategory,
}: IProducsCategoryComponent) => {
  return (
    <div>
      <div className="pt-14 lg:pt-20 relative bg-grayDark text-white">
        <Image alt="" className="-z-10 w-full" src={ImagePage} />
        <Link
          href="/"
          className="absolute top-[20%] sm:top-[30%] px-4 text-xs -translate-y-3/4 lg:px-28 lg:text-sm 2xl:px-80"
        >
          Voltar para Home
        </Link>
        <div className="absolute top-1/2 transform -translate-y-1/2 px-5 grid gap-4 grid-cols-3 lg:px-28 lg:gap-20 2xl:px-80">
          <div className="h-full flex flex-col justify-center font-medium">
            <h2 className="text-lg sm:text-3xl lg:text-5xl">{titlePage}</h2>
            <p className="text-xs sm:text-base lg:text-3xl">
              Avanços e Desafios na Indústria
            </p>
          </div>
          <p className="col-span-2 text-[10px] sm:text-base lg:text-xl">
            A indústria de medicamentos desempenha um papel vital na promoção da
            saúde global, buscando constantemente desenvolver terapias
            inovadoras para tratar e prevenir diversas condições médicas.
          </p>
        </div>
      </div>
      <AnimationScroll initialAnimation={true}>
        <div className="py-16 px-5 flex flex-col gap-3 lg:px-28 lg:gap-12 2xl:px-80">
          <div className="2xl:max-w-7xl 2xl:m-auto flex flex-col gap-10">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
              {categoryAUX}
            </h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 lg:gap-8  ">
              {listProductsCategory.map((item) => (
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
      </AnimationScroll>
    </div>
  );
};
