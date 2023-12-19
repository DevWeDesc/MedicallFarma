"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ListProductsData } from "../../../../data/data";
import { IListProductsData } from "../../../@types/types";
import { StaticImageData } from "next/image";
import ImageDietaEnteral from "../../../../public/ImageDietasEnterais.png";
import ImageAcessories from "../../../../public/ImageAcessoriesMedic.png";
import ImageMedicaments from "../../../../public/ImageMedicaments.png";
import { ProductsCategoryComponent } from "@/components/ProductsCategoryComponent";
import { Motion } from "@/animations/Motion";

export default function Page() {
  const { category, subcategory } = useParams();
  const categoryString = subcategory.toString();
  let titlePage = categoryString.replaceAll("-", " ");
  titlePage = titlePage
    .substring(0, 1)
    .toUpperCase()
    .concat(titlePage.substring(1));
  const ProductsCategory: IListProductsData[] = ListProductsData.filter(
    (item) => item.href.includes(categoryString)
  );
  const [ImagePage, setImagePage] = useState<StaticImageData | string>("");

  useEffect(() => {
    category === "Medicamentos"
      ? setImagePage(ImageMedicaments)
      : category === "Dietas Enterais"
      ? setImagePage(ImageDietaEnteral)
      : setImagePage(ImageAcessories);
  }, [category, ImagePage]);

  console.log(ProductsCategory);
  return (
    <>
      <ProductsCategoryComponent
        ImagePage={ImagePage}
        categoryAUX={titlePage}
        listProductsCategory={ProductsCategory}
        titlePage={titlePage}
      />
      <Motion />
    </>
  );
}
