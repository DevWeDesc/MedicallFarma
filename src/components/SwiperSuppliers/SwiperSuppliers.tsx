"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardProduct } from "../Cards/CardProduct";
import { SuppliersImageData } from "../../../data/data";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SwiperSuppliers() {
  const [slidesPerView, setSlidesPerView] = useState(2.1);

  useEffect(() => {
    if (window) {
      window.innerWidth >= 640 ? setSlidesPerView(5) : setSlidesPerView(3.5);
    }
  }, []);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={slidesPerView === 5 ? 40 : 20}
        className="mySwiper cursor-grab active:cursor-grabbing"
      >
        {SuppliersImageData.map((item, index) => (
          <SwiperSlide className="px-5 lg:px-10" key={index}>
            <Image alt="" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
