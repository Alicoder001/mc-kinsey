import Image from "next/image";
import React from "react";
import arrow from "../assets/arrow.svg";
import meeting from "../assets/meeting.png";
const Mean = () => {
  return (
    <div className="h-full px-[35px] md:px-0 w-full flex md:gap-8 flex-col md:flex-row">
      <div className="h-full  w-full flex md:justify-end">
        <div className="video  md:max-w-[596px] w-full h-[335px] mb-16">
          <iframe
            className="w-full h-full"
            src="//players.brightcove.net/1971571337001/IzQolWCsY_default/index.html?videoId=6312093379112"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="info bg-white max-w-[505px] w-full">
          <h2 className="text-[43px] font-georgia leading-[1.19] mb-6">
            What does it mean to accelerate sustainable and inclusive growth?
          </h2>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              McKinsey partners from around the world weigh in
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Making the case for a new kind of growth
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mean;
