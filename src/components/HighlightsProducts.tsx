import React from "react";
import SwiperHighlighs from "./SwiperHighlighs/SwiperHighlighs";

export const HighlightsProducts = () => {
  return (
    <div className="px-5 pb-14 lg:px-28 lg:py-28">
      <h2 className="font-bold text-2xl lg:text-5xl">Produtos em Destaque</h2>
      <div className="h-2 w-16 bg-dark rounded-full" />
      <SwiperHighlighs />
    </div>
  );
};
