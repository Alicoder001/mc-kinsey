import React from "react";
import arrowWhite from "../assets/arrow-white.svg";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="md:h-full mb-16">
      <div className="pt-16 pb-8 flex items-center justify-center">
        <h3 className="leading-normal font-normal">New at McKinsey Blog</h3>
      </div>
      <ul className="blog-list grid w-full">
        <li className="blog-item conference overflow-hidden">
          <div className="wrap h-full w-full"></div>
          <div className="info">
            <p className="text-[14px] leading-[1.42] mb-1 text-[#000] font-calibri">
              March 26, 2024
            </p>
            <h1 className="text-4xl laeding-[1.22]">
              McKinsey convenes leaders to prepare for AI's effect on New York
              region and beyond
            </h1>
          </div>
        </li>
        <li className="blog-item vawe flex w-full relative h-full">
          <div className="overflow-hidden shrink-0 md:w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
          <div className="info   absolute md:static bottom-0 left-0">
            <p className="text-[14px] text-white md:text-black ">
              March 15, 2024
            </p>
            <p className="text-[24px] text-white md:text-black">
              McKinsey and Celonis bring the power of process mining to business
              transformations
            </p>
          </div>
        </li>
        <li className="blog-item mobile relative w-full">
          <div className="info w-full md:h-full absolute md:static bottom-0 left-0">
            <p className="text-[14px]   text-white ">March 15, 2024</p>
            <p className="text-[24px] font-medium  text-white ">
              Mobile World Congress 2024: Rewiring telcos for the future
            </p>
          </div>
        </li>
        <li className="blog-item island flex items-end w-full h-full relative">
          <div className="info w-full">
            <div className="info-wrap z-20 absolute md:static bottom-0 left-0">
              <p className="text-[14px] text-white md:text-black">
                March 15, 2024
              </p>
              <p className="text-[24px] text-white md:text-black ">
                McKinsey and Celonis bring the power of process mining to
                business transformations
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full shrink-0 md:w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
        </li>
        <li className="blog-item model flex items-end w-full h-full relative">
          <div className=" z-20 info w-full">
            <div className="info-wrap absolute md:static pb-10 md:pb-[72px] bottom-0 md:bottom-0 left-0">
              <p className="text-[14px] text-white md:text-black">
                March 15, 2024
              </p>
              <p className="text-[24px] text-white md:text-black font-medium">
                McKinsey and Celonis bring the power of process mining to
                business transformations
              </p>
            </div>
            <div className=" arrow-wrap items-center gap-2 read w-[50%] h-[72px] hidden md:flex bg-[#2251FF] absolute right-0 bottom-0  px-9 py-6 ">
              <a className="cursor-pointer text-white font-normal leading-6">
                Reap the benefits
              </a>
              <Image className="arrow" src={arrowWhite} alt="arrow" />
            </div>
          </div>
          <div className="overflow-hidden  shrink-0 w-full  md:w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
