import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Boxs = () => {
  return (
    <div className="  flex mx-auto box-border rounded-3xl h-auto   bg-[#ef3a50] mx-[100px] my-auto pt-10 items-start  shadow-xl  gap-3">
      <div className="flex justify-center items-start flex-col mx-[40px] ">
        <img
          className="w-[80px] pl-auto mb-5 "
          src="https://www.digikala.com/statics/img/svg/amazing-typo.svg"
        />
        <img
          className="w-[110px] pl-auto mb-5"
          src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
        />
        <a className="text-[#ffffff] font-bold">مشاهده همه {">"} </a>
      </div>
      <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white rounded-r-2xl  mx-5 mb-5 py-4 "></div>
        </div>
        <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white  mx-5 mb-5 py-4 "></div>
        </div>
        <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white  mx-5 mb-5 py-4 "></div>
        </div>
        <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white  mx-5 mb-5 py-4 "></div>
        </div>
        <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white rounded-l-2xl mx-5 mb-5 py-4 "></div>
        </div>
        <div className="flex">
          <div className=" box-content border-4 border-[#ffffff] h-[230px] w-[180px] bg-white rounded-l-2xl mx-5 mb-5 py-4 "></div>
        </div>
        
        
    </div>
  );
};
export default Boxs;
