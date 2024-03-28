import React from "react";
import book from "../assets/book.png";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import someone from "../assets/someone.png";
const Hero = () => {
  return (
    <section className="hero min-h-[100vh] sm:min-h-[85vh] md:min-h-[90vw]  xl:min-h-screen  h-full w-full bg-slate-600 flex flex-col relative">
      <Image
        className="hidden md:block absolute bottom-[100px] left-[10px] w-[40%]"
        src={someone}
        alt="someone"
      />
      <div className="px-4 md:px-0 md:w-[85%] h-full mx-auto flex items-end justify-end md:items-center  md:justify-end">
        <div className="md:w-[45%] mt-[204px] mb-8 md:mb-24 ">
          <h1 className="mb-4 text-white">Investing in productivity growth</h1>
          <p className="mb-6 text-white font-light">
            It’s time to raise investment and catch the next productivity wave.
          </p>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6 text-white">
              Dare to lead
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6 text-white">
              Read more about the book
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className=" bg-white z-10 w-full">
        <div className="flex gap-8 px-4 overflow-x-scroll max-w-full lg:overflow-x-hidden  w-full xl:w-[85%] xl:mx-auto py-4">
          <h3>TRENDING INSIGHTS</h3>
          <ul className=" w-full shrink-0  flex">
            <li className=" flex w-[274px] xl:w-full shrink-0 md:shrink h-full gap-4">
              <h1 className="text-7 leading-none text-[#2251FF]">1</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The economic potential of generative...</p>
            </li>
            <li className=" flex w-[274px] xl:w-full shrink-0 md:shrink  h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">2</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">The human side of generative AI:...</p>
            </li>
            <li className=" flex w-[274px] xl:w-full shrink-0 md:shrink h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">3</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">
                How the world’s best hotels deliver exceptional customer ...
              </p>
            </li>
            <li className=" flex w-[274px] xl:w-full shrink-0 md:shrink h-full gap-4 ">
              <h1 className="text-7 leading-none text-[#2251FF]">4</h1>
              <div className="h-full w-1 bg-[#2251FF]"></div>
              <p className="text-4">
                The CEO’s secret to successful leadership: CEO...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
