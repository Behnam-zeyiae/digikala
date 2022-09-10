import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "./Icons.css"
const Icons = () => {
  return (
    <div className="divstyle">
      <a className="w-14   text-gray-700 h-14 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png" />
        دیجی کالا جت
      </a>
      <a className="w-14  text-gray-700 h-14 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1655015296.png"></img>
        قرعه کشی ایفون 13
      </a>
      <a className="w-14  text-gray-700 h-14 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1648897095.png"></img>
        خرید اقساطی
      </a>
      <a className="w-14  text-gray-700 h-14 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/280c887d3f64aba7baf543406ea26ff6f949faae_1662206390.png"></img>
        مهربانی در مهر
      </a>
      
      <a className="w-14 h-14  text-gray-700 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/d25c551f15afbe37332585853b5aa51dca4f5e93_1661170707.png"></img>
        بازگشت به مدرسه
      </a>
      <a className="w-14 h-14 text-gray-700 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/44beb32c273367694c3e60837aa1cf5f4782215b_1654608460.png"></img>
        روز شیايومی
      </a>
      <a className="w-14 h-14  text-gray-700 text-center text-[10px] font-bold">
        <img src="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png"></img>
        دیجی پلاس
      </a>
      <a className="w-14 h-14 text-gray-700 text-center text-[10px] font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        بیشتر
      </a>
    </div>
  );
};
export default Icons;
