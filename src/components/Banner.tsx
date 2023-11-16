import React from "react";
import ImageBanner from "../../public/ImageBanner.png";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-grayDark px-5 flex flex-col-reverse gap-8 py-16">
      <div className="text-white flex flex-col gap-8">
        <h2 className="max-w-[387px] text-3xl font-bold">
          Encontre os melhores Medicamentos com os Melhores Preços!
        </h2>
        <button className="rounded-full py-3 px-10 font-bold text-xl hover:bg-greenDark transition-all bg-greenDefault">
          Procurar Medicamentos
        </button>
      </div>
      <Image alt="" src={ImageBanner} />
    </div>
  );
};
