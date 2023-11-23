"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICardSoluctions } from "../../../types/types";

export const CardSolutions = ({ image, title, href }: ICardSoluctions) => {
  const [bgColorCard, setBgColorCard] = useState("");
  useEffect(() => {
    if (title === "Medicamentos") {
      setBgColorCard("bg-blueDark");
    } else if (title === "Dietas Enterais") {
      setBgColorCard("bg-yellowDefault");
    } else {
      setBgColorCard("bg-greenDark");
    }
  }, []);

  return (
    <Link href={href}>
      <div
        className={`relative px-2 pt-3 pb-12 rounded-lg ${bgColorCard} hover:bg-opacity-90 transition-all lg:px-9 lg:py-9`}
      >
        <p className="text-sm font-semibold lg:text-4xl">{title}</p>
        <div className="flex items-start justify-between lg:mt-5">
          <button className="text-[10px] bg-transparent border-b pb-[2px] border-white lg:text-lg">
            Conheça agora
          </button>
          <Image alt="" className="lg:h-28 lg:w-auto" src={image} />
        </div>
      </div>
    </Link>
  );
};
