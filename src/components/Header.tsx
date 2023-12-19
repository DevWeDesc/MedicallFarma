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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchOpen(false);
  };

  const handleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <div
      className={`xl:justify-items-center xl:grid xl:grid-cols-12 2xl:px-64 fixed z-30 w-full flex items-center justify-between gap-4 bg-grayDark px-2  ${
        searchOpen ? "py-3" : "py-4"
      }`}
    >
      <Link href="/" className="col-span-2">
        <Image
          alt=""
          id="logo-medicall"
          src={Logo}
          className="h-5 sm:h-10 w-auto xl:h-14"
        />
      </Link>

      <div
        // className={`w-[60%] ${searchOpen ? "col-span-3" : "hidden xl:block"}`}
        className={`w-[60%] xl:w-[100%] ${
          searchOpen ? "col-span-3" : "hidden xl:block xl:col-span-8"
        }`}
      >
        <SearchBar handleSearchOpen={handleSearchOpen} />
      </div>

      <div className="flex items-center gap-5 xl:col-span-2 xl:col-start-12">
        {!searchOpen && (
          <IoIosSearch
            onClick={() => setSearchOpen(true)}
            className="text-2xl text-white xl:hidden"
          />
        )}
        <div
          onClick={handleMenuOpen}
          className="w-6 flex flex-col gap-[6px] cursor-pointer"
        >
          <div
            className={`h-[1.5px] bg-white transition-all ${
              menuOpen ? "rotate-45 top-1 relative" : ""
            }`}
          />
          <div className={`h-[1.5px] bg-white ${menuOpen ? "hidden" : ""}`} />
          <div
            className={`h-[1.5px] bg-white transition-all ${
              menuOpen ? "-rotate-45 relative bottom-1" : ""
            }`}
          />
        </div>
      </div>
      <Nav menuOpen={menuOpen} handleMenuOpen={() => setMenuOpen(false)} />
    </div>
  );
};
