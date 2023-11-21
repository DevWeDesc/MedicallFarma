import Image from "next/image";
import React from "react";
import ImageSuplliers from "../../public/ImageSupplier.png";

export const Suppliers = () => {
  return (
    <div className="py-12 flex flex-col gap-2">
      {" "}
      <h2 className="text-2xl font-bold text-center">Nossos Fornecedores</h2>
      <Image alt="" src={ImageSuplliers}></Image>
    </div>
  );
};
