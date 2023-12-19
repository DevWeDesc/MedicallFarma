"use client";
import React, { useEffect } from "react";
import { ICardAbout } from "../../@types/types";
import { TbTargetArrow } from "react-icons/tb";
import { LiaEyeSolid } from "react-icons/lia";
import { TbCategory2 } from "react-icons/tb";

// "Nossa Missão",
// "Nossa Visão"
// "Nossas Categorias"

export const CardAbout = ({ title, content }: ICardAbout) => {
  const IconCard = () => {
    const styleIcon = "text-7xl";
    if (title === "Nossa Missão") {
      return <TbTargetArrow className={styleIcon} />;
    } else if (title === "Nossa Visão") {
      return <LiaEyeSolid className={styleIcon} />;
    } else {
      return <TbCategory2 className={styleIcon} />;
    }
  };

  return (
    <div className="p-16 hover:scale-105 transition-all bg-grayLight flex flex-col gap-4 items-center text-white rounded-lg xl:max-w-sm">
      <IconCard />
      <h2 className="text-2xl font-bold">{title}</h2>
      {typeof content === "object" ? (
        content.map((item, index) => (
          <p key={index} className="opacity-70 font-light text-start w-full">
            {item}
          </p>
        ))
      ) : (
        <p className="opacity-70 font-light">{content}</p>
      )}
    </div>
  );
};
