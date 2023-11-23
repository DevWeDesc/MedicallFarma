import Link from "next/link";
import React from "react";
import { NavData } from "../../data/data";
import { NavType } from "../../types/types";

export const Nav = ({ menuOpen, handleMenuOpen }: NavType) => {
  return (
    <div
      className={`text-white h-screen top-12 mt-1 right-0 fixed flex flex-col gap-6 ${
        menuOpen
          ? " bg-grayDark z-20 w-auto transition-all h-screen px-10 py-4 "
          : "w-0 transition-all opacity-0"
      }`}
    >
      {NavData.map((item, index) => (
        <Link key={index} onClick={handleMenuOpen} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
