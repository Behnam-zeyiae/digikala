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
      <div className="py-10">
      <SwiperSlide>
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/78c5a8a7c0cc3adce89df4d34846c5ba4bea64aa_1661973514.gif"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f070d1b824c9c7e59ce254886bb7fa53e2abc7a8_1662188856.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c41a7b6a8f90d7344e2fa517faa38320a3ba69c2_1662131478.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9e07d541b92f1564241b835c36174b35da6b31a5_1661089146.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2e0f27361c9dc223dd81b68f4f25a4ca8cf58c40_1661959560.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bdaec73a3bd01a5122343f838a12442008c7453c_1653982001.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <a>
          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e40e00cd21bcc69dedef40f640dcdd6eaa1ed861_1662205767.jpg?x-oss-process=image/quality,q_95"></img>
        </a>
      </SwiperSlide>
      ...   </div>
    </Swiper>
 
  );
};
export default Sswiper;
