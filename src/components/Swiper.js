import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

const Sswiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/78c5a8a7c0cc3adce89df4d34846c5ba4bea64aa_1661973514.gif"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}; 
export default Sswiper;

