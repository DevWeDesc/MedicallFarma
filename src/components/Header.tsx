import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-grayDark px-2 py-5">
      <Image alt="" src={Logo} height={28} />
      <Nav />
    </div>
  );
};
