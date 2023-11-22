import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { ProductsRecomendedData } from "../../data/data";
import { IProductsData } from "../../types/types";
import { CardProduct } from "./Cards/CardProduct";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";

type ISearchBar = {
  handleSearchOpen: () => void;
};

export const SearchBar = ({ handleSearchOpen }: ISearchBar) => {
  const [productSearchFiltered, setProductSearchFiltered] = useState<
    IProductsData[]
  >([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    let ProductData: IProductsData[] = [];
    valueInput
      ? (ProductData = ProductsRecomendedData.filter((item) =>
          item.name.toLocaleLowerCase().includes(valueInput.toLocaleLowerCase())
        ))
      : (ProductData = ProductsRecomendedData);

    setProductSearchFiltered(ProductData);
  }, [valueInput]);

  return (
    <div className="bg-grayLight py-1 px-2 gap-2 flex justify-center rounded-full w-full relative">
      <div
        className="h-full flex items-center p-1 text-white justify-center"
        onClick={handleSearchOpen}
      >
        <IoArrowBackOutline />
      </div>
      <input
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
        onDoubleClick={handleSearchOpen}
        id="serchBar"
        className="w-full text-[10px] bg-transparent outline-none focus:bg-transparent value:bg-transparent text-white placeholder-gray-300"
        type="text"
        placeholder="Procure Produtos!!"
      />
      <label
        htmlFor="serchBar"
        className="p-1 bg-grayDefault text-white rounded-full"
      >
        <IoIosSearch />
      </label>
      <div className="absolute max-h-96 px-4 rounded-lg z-10 flex flex-col gap-10 py-6 overflow-auto bg-grayLight mt-10">
        {productSearchFiltered.map((item) => (
          <Link
            href={`/detailsProduct/${item.id}`}
            key={item.id}
            onClick={handleSearchOpen}
            className="text-white"
          >
            <div className="flex items-center gap-2">
              <Image alt="" height={32} src={item.image} />{" "}
              <div>
                <p className="text-xs">{item.name}</p>
                <span className="text-[10px]">
                  {item.content.substring(0, 23).concat("...")}
                </span>
              </div>
            </div>
          </Link>
        ))}{" "}
        {productSearchFiltered.length <= 0 && (
          <p className="text-white p-4 text-xs text-center">
            Produto Indisponível!
          </p>
        )}
      </div>
    </div>
  );
};
