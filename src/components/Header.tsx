"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Logo.png";
import { Nav } from "./Nav";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-between gap-4 bg-grayDark px-2  ${
        searchOpen ? "py-3" : "py-4"
      }`}
    >
      <Link href="/">
        <Image alt="" src={Logo} height={21} />
      </Link>
      {searchOpen && (
        <div className={`w-[60%] ${searchOpen ? "col-span-3" : ""}`}>
          <SearchBar handleSearchOpen={handleSearchOpen} />
        </div>
      )}
      <div className="flex items-center gap-5">
        {!searchOpen && (
          <IoIosSearch
            onClick={() => setSearchOpen(true)}
            className="text-2xl text-white"
          />
        )}
        <div className="w-6 flex flex-col gap-[6px]">
          <div className="h-[1.5px] bg-white" />
          <div className="h-[1.5px] bg-white" />
          <div className="h-[1.5px] bg-white" />
        </div>
      </div>
      <Nav />
    </div>
  );
};
