"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CategoriesData } from "../../data/data";
import { ICategories } from "../../types/types";
import { CiPlay1 } from "react-icons/ci";

export const Combobox = () => {
  const [comboOpen, setComboOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState<ICategories>();

  const handleComboOpen = (item: ICategories) => {
    if (comboOpen) {
      setComboOpen(false);
      setCategorySelected(item);
    } else {
      setCategorySelected(item);
      setComboOpen(true);
    }
  };

  return (
    <div className="hidden xl:flex flex-col pt-20 ">
      <div className="bg-grayDark text-white flex gap-10 justify-center">
        {CategoriesData.map((item, index) => (
          <button
            key={index}
            onMouseLeave={() => handleComboOpen(item)}
            onMouseOver={() => handleComboOpen(item)}
            className={`p-8 bg-grayDark hover:font-bold transition-all ${
              categorySelected?.name === item.name && "font-bold"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        className="relative flex w-full justify-center"
        onMouseLeave={() => {
          setComboOpen(false);
          setCategorySelected(categorySelected);
        }}
        onMouseOver={() => {
          setComboOpen(true);
          setCategorySelected(categorySelected);
        }}
      >
        <div
          className={`${
            comboOpen && categorySelected
              ? "absolute bg-grayLight py-10 px-6 rounded-md grid grid-cols-2 text-white transition-all"
              : "absolute h-0 transition-all overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-6 ">
            {categorySelected?.subCategories.map((item, index) => (
              <Link
                href={`${categorySelected.name}/${item.title}`}
                key={index}
                className="flex items-center gap-3 opacity-90 hover:opacity-100 hover:font-semibold transition-all"
              >
                <CiPlay1 />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
          {categorySelected && (
            <Image
              alt=""
              className="max-w-sm"
              src={categorySelected?.image}
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
};
