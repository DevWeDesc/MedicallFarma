import React from "react";
import SwiperSuppliers from "./SwiperSuppliers/SwiperSuppliers";

type ISuppliers = {
  title: string;
  content?: string;
};

export const Suppliers = ({ title, content }: ISuppliers) => {
  return (
    <div className="px-5 py-12 flex flex-col gap-2 lg:gap-6 lg:py-28">
      {" "}
      <h2 className="text-3xl font-bold text-center lg:text-5xl">{title}</h2>
      <p className="font-light opacity-75 text-sm lg:text-base text-center max-w-3xl m-auto">
        {content}
      </p>
      <SwiperSuppliers />
    </div>
  );
};
