"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./styles.css";
import { HighlightsProductsData } from "../../../data/data";
import Image from "next/image";
import { CardProduct } from "../CardProduct";

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
            <CardProduct
              id={item.id}
              content={item.content}
              image={item.image}
              name={item.name}
              supplier={item.supplier}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
