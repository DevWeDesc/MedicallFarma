"use client";
import React, { useEffect, useState } from "react";
import { IProductsData } from "../../types/types";
import Image from "next/image";

export const CardProduct = ({
  image,
  name,
  content,
  supplier,
  categories,
  size,
}: IProductsData) => {
  // const [size, setConfigCard] = useState("");
  const [contentProduct, setContentProduct] = useState("");

  useEffect(() => {
    size === "large"
      ? setContentProduct(content)
      : setContentProduct(content?.substring(0, 83));
  }, [contentProduct]);

  return (
    <div
      className={`flex flex-col text-left ${
        size === "large" ? "gap-4 items-center" : "gap-2"
      } gap-2`}
    >
      <Image alt="" src={image} />
      <div className={`${size === "large" && "flex flex-col gap-2"}`}>
        <p
          className={`font-medium min-h-[32px] ${
            size === "large" ? "text-2xl" : "text-xs "
          }`}
        >
          {name}
        </p>
        <p
          className={`font-light pr-3 ${
            size === "large" ? "text-sm opacity-70" : "text-xs"
          }`}
        >
          {contentProduct}
        </p>
        <p
          className={`font-medium  ${
            size === "large" ? "text-base" : "text-xs"
          }`}
        >
          {supplier}
        </p>
        {size === "large" && (
          <div className="mt-4 flex flex-col gap-2">
            <button className="w-full rounded-full py-2 bg-grayLight hover:bg-grayDefault transition-all text-white ">
              Solicitar um Orçamento
            </button>
            <p className="font-medium">
              Categorias:{" "}
              {categories?.map((item, index) => {
                let TextCategories =
                  index === categories.length - 1
                    ? item.concat(".")
                    : item.concat(", ");

                return <span key={index}>{TextCategories}</span>;
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
