import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { ListProductsData } from "../../data/data";
import { IListProductsData } from "../@types/types";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";

type ISearchBar = {
  handleSearchOpen: () => void;
};

export const SearchBar = ({ handleSearchOpen }: ISearchBar) => {
  const [productSearchFiltered, setProductSearchFiltered] = useState<
    IListProductsData[]
  >([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    let ProductData: IListProductsData[] = [];
    valueInput
      ? (ProductData = ListProductsData.filter((item) =>
          item.product
            .toLocaleLowerCase()
            .includes(valueInput.toLocaleLowerCase())
        ))
      : (ProductData = ListProductsData);

    setProductSearchFiltered(ProductData);
  }, [valueInput]);

  const handleValueInput = () => {
    setValueInput("");
  };

  return (
    <div className="bg-grayLight py-1 px-2 gap-2 flex justify-center rounded-full w-full relative lg:w-2/3 lg:m-auto">
      <div
        className="h-full flex items-center p-1 text-white justify-center xl:hidden"
        onClick={handleSearchOpen}
      >
        <IoArrowBackOutline />
      </div>
      <input
        value={valueInput}
        onChange={(ev) => setValueInput(ev.target.value)}
        onDoubleClick={handleSearchOpen}
        id="serchBar"
        className="w-full text-[10px] bg-transparent outline-none focus:bg-transparent value:bg-transparent text-white placeholder-gray-300 xl:p-3 xl:text-sm"
        type="text"
        placeholder="Procure Produtos!!"
      />
      <label
        htmlFor="serchBar"
        className="p-1 xl:p-2 bg-grayDefault text-white rounded-full xl:text-3xl"
      >
        <IoIosSearch />
      </label>
      {productSearchFiltered.length > 0 && valueInput.length > 0 && (
        <div className="absolute max-h-96 px-4 rounded-lg z-10 flex flex-col gap-10 py-6 overflow-hidden hover:overflow-auto transition-all bg-grayLight mt-10 lg:w-full lg:mt-14 lg:px-8">
          {productSearchFiltered.map((item) => (
            <Link
              href={`/detailsProduct/${item.id}`}
              key={item.id}
              onClick={() => {
                handleSearchOpen();
                handleValueInput();
              }}
              className="text-white"
            >
              <div className="flex items-center gap-2 lg:gap-6">
                <Image alt="" className="h-8 w-auto lg:h-20" src={item.image} />{" "}
                <div>
                  <p className="text-xs lg:text-base font-medium">
                    {item.product}
                  </p>
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
      )}
    </div>
  );
};
