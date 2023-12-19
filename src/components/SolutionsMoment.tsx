import React from "react";
import { CardSoluctionData } from "../../data/data";
import { CardSolutions } from "./Cards/CardSolutions";
import { AnimationScroll } from "@/animations/AnimationScroll";

export const SolutionsMoment = () => {
  return (
    <AnimationScroll>
      <div className="flex flex-col py-14 items-center justify-center bg-grayDark gap-7 text-white lg:py-28 lg:px-28 lg:gap-12 2xl:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold lg:text-5xl">
          Soluções do Momento!
        </h2>
        <div className="w-full grid grid-cols-3 gap-1 sm:px-10 sm:gap-3 2xl:px-0 2xl:max-w-7xl 2xl:m-auto">
          {CardSoluctionData.map((item) => (
            <CardSolutions
              href={item.href}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </AnimationScroll>
  );
};
