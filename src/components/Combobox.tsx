"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CategoriesData } from "../../data/data";
import { ICategories } from "../@types/types";

export const Combobox = () => {
  const [comboOpen, setComboOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState<ICategories>();

  return (
    <div className="hidden sm:flex sm:pt-16 xl:flex flex-col pt-20">
      <div className="bg-grayDark text-white flex gap-10 justify-center">
        {CategoriesData.map((item, index) => (
          <button
            key={index}
            onMouseLeave={() => {
              setCategorySelected(item);
              setComboOpen(false);
            }}
            onMouseOver={() => {
              setCategorySelected(item);
              setComboOpen(true);
            }}
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
              ? "absolute bg-grayLight z-10 py-10 px-6 rounded-md gap-10 grid grid-cols-2 items-stretch text-white transition-all"
              : "absolute h-0 transition-all overflow-hidden"
          }`}
        >
          <div
            className={`${
              categorySelected && categorySelected?.subCategories?.length >= 11
                ? "grid grid-cols-2"
                : "flex"
            } flex flex-col gap-6`}
          >
            {categorySelected?.subCategories.map((item, index) => (
              <Link
                href={`${item.href}`}
                key={index}
                className="flex items-center gap-3 opacity-90 hover:opacity-100 hover:font-semibold transition-all"
              >
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
          {categorySelected && (
            <div className="w-full flex justify-stretch h-full items-stretch rounded-lg">
              <Image
                alt=""
                className="object-cover w-full rounded-lg"
                src={categorySelected?.image}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
