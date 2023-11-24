import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import { NavData, NavigationSocialMedia } from "../../data/data";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavigationSocialMediaType } from "../../types/types";

export const Footer = () => {
  const SocialMediaIcon = ({ title, href }: NavigationSocialMediaType) => {
    const styleIcon = "text-4xl";
    if (title === "Instagram") {
      return (
        <Link target="_blank" href={href}>
          <FaInstagram className={styleIcon} />
        </Link>
      );
    } else {
      return (
        <Link target="_blank" href={href}>
          <FaLinkedin className={styleIcon} />
        </Link>
      );
    }
  };

  return (
    <div
      id="Contact"
      className="bg-grayDark py-16 flex flex-col items-center gap-16 text-white lg:py-28 lg:px-28 lg:gap-20"
    >
      <div className="flex flex-col items-center gap-16 lg:flex-row w-full lg:justify-between lg:items-start">
        <Image alt="" className="lg:h-[60px] w-auto" src={Logo} />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold lg:text-center">Mapa do Site</h3>
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:justify-items-center lg:gap-4">
            {NavData.map((item, index) => (
              <Link href={item.href} key={index} className="text-sm font-light">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-center">
            Nossas Redes Sociais
          </h3>
          <div className="flex gap-4 justify-center lg:gap-8">
            {NavigationSocialMedia.map((item, index) => (
              <SocialMediaIcon
                key={index}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm">
        © Copyright 2023 | Desenvolvido por WeDesc | Todos os Direitos
        Reservados
      </p>
    </div>
  );
};
