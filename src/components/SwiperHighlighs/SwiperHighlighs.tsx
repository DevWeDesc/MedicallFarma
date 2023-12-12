"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./styles.css";
import { HighlightsProductsData, ListProductsData } from "../../../data/data";
import { CardProduct } from "../Cards/CardProduct";
import Link from "next/link";
import { IListProductsData } from "../../../types/types";

export default function SwiperHighlighs() {
  const [slidesPerView, setSlidesPerView] = useState(2.1);
  const highlightsProducts: IListProductsData[] = ListProductsData.slice(8, 16);

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
        {highlightsProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              className="hover:scale-105 transition-all"
              href={`/detailsProduct/${item.id}`}
            >
              <CardProduct
                id={item.id}
                product={item.product}
                image={item.image}
                category={item.category}
                href={item.href}
                subCatgegory={item.subCatgegory}
                supplier={item.supplier}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
