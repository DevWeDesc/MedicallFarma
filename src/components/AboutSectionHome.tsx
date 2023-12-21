import React from "react";
import imageMedicall from "../../public/imagemedicall.jpeg";
import Image from "next/image";
import Link from "next/link";
import { AnimationScroll } from "@/animations/AnimationScroll";

export const AboutSectionHome = () => {
  return (
    <AnimationScroll>
      <div className="flex flex-col justify-center relative items-center bg-black text-white">
        <Image
          alt=""
          className="w-full object-cover h-80 opacity-60"
          src={imageMedicall}
        />
        <div className="absolute h-full w-full flex flex-col justify-center gap-8 items-center">
          <p className="text-2xl font-bold px-5 text-center">
            Conheça mais sobre a MEDICALL FARMA
          </p>
          <Link
            className="text-center border w-auto px-8 py-2 rounded-lg hover:font-semibold hover:border-[2px] transition-all"
            href="about"
          >
            Saiba Mais!
          </Link>
        </div>
      </div>
    </AnimationScroll>
  );
};
