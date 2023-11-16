"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./styles.css";
import { HighlightsProductsData } from "../../../data/data";
import Image from "next/image";

export default function SwiperHighlighs() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={2.1}
        className="mySwiper"
      >
        {HighlightsProductsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-2">
              <Image alt="" src={item.image} />
              <div>
                <p className="text-xs font-medium min-h-[32px]">{item.name}</p>
                <p className="text-xs font-light pr-3">{item.content}</p>
                <p className="text-xs font-medium">{item.supplier}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
