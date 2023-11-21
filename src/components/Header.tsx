import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import { Nav } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-grayDark px-2 py-5">
      <Link href="/">
        <Image alt="" src={Logo} height={28} />
      </Link>
      <div className="w-6 flex flex-col gap-[6px]">
        <div className="h-[1.5px] bg-white" />
        <div className="h-[1.5px] bg-white" />
        <div className="h-[1.5px] bg-white" />
      </div>
      <Nav />
    </div>
  );
};
