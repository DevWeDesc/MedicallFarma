import Image from "next/image";
import React from "react";
import ImageSuplliers from "../../public/ImageSupplier.png";
import ImageSuplliersDesktop from "../../public/imageSupplierDesktop.png";
import SwiperSuppliers from "./SwiperSuppliers/SwiperSuppliers";

export const Suppliers = () => {
  return (
    <div className="py-12 flex flex-col gap-2 lg:gap-6 lg:py-28">
      {" "}
      <h2 className="text-2xl font-bold text-center lg:text-5xl">
        Nossos Fornecedores
      </h2>
      <SwiperSuppliers />
      {/* <Image
        alt=""
        className="hidden lg:block w-full"
        src={ImageSuplliersDesktop}
      ></Image>
      <Image alt="" className="lg:hidden" src={ImageSuplliers}></Image> */}
    </div>
  );
};
