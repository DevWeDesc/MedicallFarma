import React from "react";
import ImageBanner from "../../public/ImageBanner.png";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="bg-grayDark px-5 flex flex-col-reverse gap-8 py-16 xl:grid xl:grid-cols-2 xl:items-center xl:gap-28 xl:pl-28 xl:pt-24">
      <div className="text-white flex flex-col gap-8">
        <h2 className="max-w-[387px] text-3xl font-bold xl:max-w-md xl:text-5xl">
          Encontre os melhores Medicamentos com os Melhores Preços!
        </h2>
        <Link
          href="#productRecomended"
          className="xl:max-w-md text-center rounded-full py-3 px-10 font-bold text-xl hover:bg-greenDark transition-all bg-greenDefault"
        >
          Procurar Medicamentos
        </Link>
      </div>
      <Image alt="" src={ImageBanner} />
    </div>
  );
};
