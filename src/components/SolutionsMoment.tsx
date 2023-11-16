import React from "react";
import { CardSoluctionData } from "../../data/data";
import { CardSolutions } from "./CardSolutions";

export default function SolutionsMoment() {
  return (
    <div className="flex flex-col py-14 items-center justify-center bg-grayDark gap-7 text-white">
      <h2 className="text-2xl font-bold">Soluções do Momento!</h2>
      <div className="w-full grid grid-cols-3 gap-1">
        {CardSoluctionData.map((item) => (
          <CardSolutions
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
