import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import { NavData } from "../../data/data";

export const Footer = () => {
  return (
    <div className="bg-grayDark py-16 flex flex-col items-center gap-16 text-white">
      <Image alt="" src={Logo} />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Mapa do Site</h3>
        <div className="flex flex-col gap-2">
          {NavData.map((item, index) => (
            <p key={index} className="text-sm font-light">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-center">Nossas Redes Sociais</h3>
        <div className="flex gap-2">
          {NavData.map((item, index) => (
            <p key={index} className="text-sm font-light">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <p className="text-center text-sm">
        © Copyright 2023 | Desenvolvido por WeDesc | Todos os Direitos
        Reservados
      </p>
    </div>
  );
};
