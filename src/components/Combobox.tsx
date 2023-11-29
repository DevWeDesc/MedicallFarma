"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type ICombobox = {
  Category: string;
  SubCategories: string[];
  ImageProp: StaticImageData | string;
};

export const Combobox = ({ Category, SubCategories, ImageProp }: ICombobox) => {
  const [comboOpen, setComboOpen] = useState(false);

  const handleComboOpen = () => {
    comboOpen ? setComboOpen(false) : setComboOpen(true);
  };

  return (
    <div className="bg-grayDark text-white">
      <button
        onMouseLeave={handleComboOpen}
        onMouseOver={handleComboOpen}
        className="p-4 bg-grayDark"
      >
        {Category}
      </button>
      <div
        onMouseLeave={handleComboOpen}
        className={`absolute w-full max-w-[860px] m-auto left-1/4 ${
          SubCategories.length > 12
            ? "grid grid-cols-3 justify-items-center gap-y-5 gap-x-10"
            : SubCategories.length > 6
            ? "grid grid-cols-2 gap-y-5 gap-x-10"
            : "grid grid-cols-2 gap-y-5 gap-x-10"
        } ${comboOpen ? " bg-grayLight transition-all" : "-z-10 hidden"}`}
      >
        <div className="p-20">
          {SubCategories.map((item, index) => (
            <p key={index} className="cursor-pointer">
              {item}
            </p>
          ))}
        </div>
        <Image alt="" className="w-full h-full" src={ImageProp} />
      </div>
    </div>
  );
};
