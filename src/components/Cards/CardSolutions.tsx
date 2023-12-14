"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICardSoluctions } from "../../../types/types";
import {
  RiHeartPulseLine,
  RiMedicineBottleLine,
  RiStethoscopeLine,
} from "react-icons/ri";

export const CardSolutions = ({ title, href }: ICardSoluctions) => {
  const [bgColorCard, setBgColorCard] = useState("");

  const IconCardSoluction = () => {
    const styleIcon: string = "text-4xl lg:text-8xl xl:text-9xl";
    if (title === "Saneantes") {
      setBgColorCard("bg-blueDark");
      return <RiMedicineBottleLine className={styleIcon} />;
    } else if (title === "Tratamentos de ferida") {
      setBgColorCard("bg-yellowDefault");
      return <RiHeartPulseLine className={styleIcon} />;
    } else {
      setBgColorCard("bg-greenDark");
      return <RiStethoscopeLine className={styleIcon} />;
    }
  };

  return (
    <Link href={href}>
      <div
        className={`h-full flex flex-col justify-between px-2 py-3 rounded-lg ${bgColorCard} hover:bg-opacity-90 transition-all sm:gap-4 lg:px-9 lg:py-9`}
      >
        <p className="text-sm sm:text-xl font-semibold lg:h-20 xl:h-auto lg:text-4xl">
          {title}
        </p>
        <div className="flex items-start justify-between lg:mt-5">
          <button className="text-[10px] bg-transparent border-b pb-[2px] border-white sm:text-sm lg:text-lg">
            Conheça agora
          </button>
          {/* <Image alt="" className="lg:h-28 lg:w-auto" src={image} /> */}
          <IconCardSoluction />
        </div>
      </div>
    </Link>
  );
};
