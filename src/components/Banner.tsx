"use client";
import React from "react";
// import ImageBanner from "../../public/ImageBanner.png";
import ImageBanner from "../../public/GroupProductsBanner.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <div
      // className="bg-grayDark px-5 flex flex-col-reverse gap-8 py-16 xl:grid xl:grid-cols-2 xl:items-center xl:gap-28 xl:pl-28 xl:pt-24 2xl:pl-80"
      className="bg-grayDark px-5 flex flex-col gap-8 py-16 sm:pt-24 xl:items-center xl:gap-12 xl:pt-24"
    >
      <div className="text-white flex flex-col gap-8">
        <h2 className="max-w-[387px] m-auto text-2xl sm:text-3xl xl:max-w-4xl font-light text-center xl:text-5xl">
          Encontre os melhores Produtos Hospitalares com os Melhores Preços aqui
          na <span className="font-bold">Medicall Farma!</span>
        </h2>
        {/* <Link
          href="#productRecomended"
          className="xl:max-w-md text-center rounded-full py-3 px-10 font-bold text-xl hover:bg-greenDark transition-all bg-greenDefault"
        >
          Procurar Medicamentos
        </Link> */}
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.5 }}
      >
        <Image alt="" className="m-auto" src={ImageBanner} />
      </motion.div>
      {/* <Image alt="" src={ImageBanner} /> */}
    </div>
  );
};
