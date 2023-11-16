"use client";
import React, { useEffect, useState } from "react";
import { ICardSoluctions } from "../../types/types";
import Image from "next/image";
import image from "next/image";

export const CardSolutions = ({ image, title }: ICardSoluctions) => {
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
    <div
      className={`relative px-2 pt-3 pb-12 rounded-lg ${bgColorCard} hover:bg-opacity-90 transition-all`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <button className="text-[10px] bg-transparent border-b pb-[2px] border-white">
        Conheça agora
      </button>
      <Image alt="" className="absolute right-2 bottom-2" src={image} />
    </div>
  );
};
