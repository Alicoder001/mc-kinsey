import React from "react";
import book from "../assets/book.png";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import someone from "../assets/someone.png";
const Hero = () => {
  return (
    <section className="hero min-h-screen h-full w-full bg-slate-600 flex flex-col relative ">
      <Image
        className="absolute bottom-[100px] left-[10px] w-[40%]"
        src={someone}
        alt="someone"
      />
      <div className="w-[85%] h-full mx-auto flex items-center justify-end">
        <div className=" w-[45%]   mt-[204px] mb-24 ">
          <h1 className=" text-white">Investing in</h1>
          <h1 className="mb-4 text-white">productivity growth</h1>
          <p className="mb-6 text-white">
            It’s time to raise investment and catch the next productivity wave.
          </p>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6 text-white">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="flex gap-2">
            <p className="font-normal leading-6 text-white">
              Read more about the book
            </p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className=" bg-white z-10">
        <div className="flex gap-8  w-[85%] mx-auto py-4">
          <h3>TRENDING INSIGHTS</h3>
          <ul className=" w-full flex  ">
            <li className=" flex h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">1</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The human side of generative AI:</p>
            </li>
            <li className=" flex h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">1</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The human side of generative AI:</p>
            </li>
            <li className=" flex h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">1</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The human side of generative AI:</p>
            </li>
            <li className=" flex h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">1</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The human side of generative AI:</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
