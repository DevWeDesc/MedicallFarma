"use client";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import ImageDietaEnteral from "../../../public/ImageDietasEnterais.png";
import ImageAcessories from "../../../public/ImageAcessoriesMedic.png";
import ImageMedicaments from "../../../public/ImageMedicaments.png";
import { ProductsCategoryComponent } from "@/components/ProductsCategoryComponent";
import { ListProductsData } from "../../../data/data";
import { Motion } from "@/animations/Motion";

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryAUX = category.toString().replace(/%20/g, " ");
  const listProductsCategory = ListProductsData.filter((item) =>
    item.category.includes(categoryAUX)
  );
  let titlePage = categoryAUX.replaceAll("-", " ");
  titlePage = titlePage
    .substring(0, 1)
    .toUpperCase()
    .concat(titlePage.substring(1));

  const [ImagePage, setImagePage] = useState<StaticImageData | string>("");

  useEffect(() => {
    category === "Medicamentos"
      ? setImagePage(ImageMedicaments)
      : category === "Dietas Enterais"
      ? setImagePage(ImageDietaEnteral)
      : setImagePage(ImageAcessories);
  }, [category, ImagePage]);

  console.log(listProductsCategory);

  return (
    <>
      <ProductsCategoryComponent
        ImagePage={ImagePage}
        categoryAUX={categoryAUX}
        listProductsCategory={listProductsCategory}
        titlePage={titlePage}
      />
      <Motion />
    </>
  );
}
