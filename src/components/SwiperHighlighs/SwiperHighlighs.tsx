"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./styles.css";
import { HighlightsProductsData } from "../../../data/data";
import { CardProduct } from "../Cards/CardProduct";
import Link from "next/link";

export default function SwiperHighlighs() {
  const [slidesPerView, setSlidesPerView] = useState(2.1);

  useEffect(() => {
    if (window) {
      window.innerWidth >= 640 ? setSlidesPerView(5) : setSlidesPerView(2.1);
    }
  }, []);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={slidesPerView === 5 ? 40 : 20}
        style={{ padding: "10px" }}
        className="mySwiper"
      >
        {HighlightsProductsData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/detailsProduct/${item.id}`}>
              <CardProduct
                id={item.id}
                content={item.content}
                image={item.image}
                name={item.name}
                supplier={item.supplier}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
