import React from "react";
import { IProductsData } from "../../types/types";
import Image from "next/image";

export const CardProduct = ({
  image,
  name,
  content,
  supplier,
}: IProductsData) => {
  return (
    <div className="flex flex-col gap-2">
      <Image alt="" src={image} />
      <div>
        <p className="text-xs font-medium min-h-[32px]">{name}</p>
        <p className="text-xs font-light pr-3">{content}</p>
        <p className="text-xs font-medium">{supplier}</p>
      </div>
    </div>
  );
};
