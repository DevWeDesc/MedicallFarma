import React from "react";
import { CardSoluctionData } from "../../data/data";
import { CardSolutions } from "./Cards/CardSolutions";

export default function SolutionsMoment() {
  return (
    <div className="flex flex-col py-14 items-center justify-center bg-grayDark gap-7 text-white lg:py-28 lg:px-28 lg:gap-12 2xl:px-80">
      <h2 className="text-2xl font-bold lg:text-5xl">Soluções do Momento!</h2>
      <div className="w-full grid grid-cols-3 gap-1 lg:gap-3">
        {CardSoluctionData.map((item) => (
          <CardSolutions
            href={item.href}
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
