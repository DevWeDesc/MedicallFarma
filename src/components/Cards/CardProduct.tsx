"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProductsData } from "../../../types/types";

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
      className={`flex hover:scale-105 transition-all flex-col text-left ${
        size === "large"
          ? "gap-4 items-center lg:grid lg:grid-cols-2 lg:justify-items-center"
          : "gap-2"
      } gap-2`}
    >
      <Image
        alt=""
        className={`${size === "large" ? "lg:w-4/5" : ""}`}
        src={image}
      />
      <div className={`${size === "large" && "flex flex-col gap-2"}`}>
        <p
          className={`font-medium min-h-[32px] lg:min-h-[48px] ${
            size === "large" ? "text-2xl lg:text-5xl" : "text-xs lg:text-base"
          }`}
        >
          {name}
        </p>
        <p
          className={`font-light pr-3 ${
            size === "large"
              ? "text-sm opacity-70 lg:text-xl"
              : "text-xs lg:text-sm"
          }`}
        >
          {contentProduct}
        </p>
        <p
          className={`font-medium  ${
            size === "large" ? "text-base lg:text-xl" : "text-xs lg:text-base"
          }`}
        >
          {supplier}
        </p>
        {size === "large" && (
          <div className="mt-4 lg:mt-10 flex flex-col gap-2">
            <button className="w-full rounded-full py-2 lg:text-xl bg-grayLight hover:bg-grayDefault transition-all lg:max-w-[315px] text-white ">
              Solicitar um Orçamento
            </button>
            <p className="font-medium lg:text-xl">
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
