import Image from "next/image";
import React from "react";
import ImageBannerAbout from "../../public/Rectangle.png";
import ImageBannerAboutMobile from "../../public/ImageAboutMobile.png";

export const BannerAbout = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pt-22">
      <Image
        alt=""
        className="hidden lg:block w-full h-auto"
        src={ImageBannerAbout}
      />
      <Image alt="" src={ImageBannerAboutMobile} className="lg:hidden w-full" />
      <div className="absolute text-white flex flex-col items-center w-full gap-8 px-4">
        <h2 className="max-w-[387px] text-center text-2xl font-bold lg:max-w-4xl lg:m-auto xl:text-5xl">
          Missão de Saúde: Fornecendo Excelência em Medicamentos e Materiais
          Médicos
        </h2>
        <p className="text-sm lg:text-base lg:max-w-4xl lg:m-auto text-center font-light">
          Bem-vindo à MEDICALL FARMA, sua parceira dedicada na entrega de
          soluções de saúde excepcionais. Com uma visão centrada no bem-estar,
          estamos comprometidos em fornecer medicamentos e materiais médicos de
          qualidade superior, promovendo a excelência no cuidado médico.
          Descubra mais sobre nossa história, valores e o compromisso que temos
          em impulsionar a saúde e o progresso na comunidade médica.
        </p>
      </div>
    </div>
  );
};
