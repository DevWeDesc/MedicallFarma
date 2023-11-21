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
}: IProductsData) => {
  const [configCard, setConfigCard] = useState("");
  const [contentProduct, setContentProduct] = useState("");

  useEffect(() => {
    if (location) {
      location.pathname != "/" && setConfigCard("large");
    }
    configCard === "large"
      ? setContentProduct(content)
      : setContentProduct(content?.substring(0, 83));
  }, [configCard]);

  return (
    <div
      className={`flex flex-col text-left ${
        configCard === "large" ? "gap-4 items-center" : "gap-2"
      } gap-2`}
    >
      <Image alt="" src={image} />
      <div className={`${configCard === "large" && "flex flex-col gap-2"}`}>
        <p
          className={`font-medium min-h-[32px] ${
            configCard === "large" ? "text-2xl" : "text-xs "
          }`}
        >
          {name}
        </p>
        <p
          className={`font-light pr-3 ${
            configCard === "large" ? "text-sm opacity-70" : "text-xs"
          }`}
        >
          {contentProduct}
        </p>
        <p
          className={`font-medium  ${
            configCard === "large" ? "text-base" : "text-xs"
          }`}
        >
          {supplier}
        </p>
        {configCard === "large" && (
          <div>
            <button>Solicitar um Orçamento</button>
            <p>
              Categorias:{" "}
              {categories?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
