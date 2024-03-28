import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
import accordion from "../assets/accordion.svg";
import Link from "next/link";
import search from "../assets/search.svg";
import hamburger from "../assets/hamburger.svg";
import someone from "../assets/someone.png";
const Header = () => {
  return (
    <>
      <div className="hidden mt-2 z-30  absolute gap-[6px] items-center md:flex right-2 top-1">
        <Link
          className="px-[6px] text-[16px] font-light hover:underline underline-offset-4 font-calibri hover:text-[#2251FF] text-white"
          href={""}
        >
          Sign In
        </Link>
        <div className="w-0.5 h-4 bg-white"></div>
        <Link
          className="px-[6px] text-[16px] font-light font-calibri text-white hover:text-[#2251FF] hover:underline underline-offset-4"
          href={""}
        >
          Subscribe
        </Link>
      </div>
      <header className="header w-full md:h-[140px] flex justify-between items-center md:items-start pr-[16px] absolute  gap-5 top-0 left-0 mb-16 text-white z-20 ">
        <div className="flex items-center shrink-0  gap-[7px]">
          <div className="shrink-0">
            <Image
              className="w-[70px] cursor-pointer lg:w-[90px] "
              src={hamburger}
              alt="hamburger"
            />
          </div>
          <Image src={logo} className="cursor-pointer" alt="logo" />
        </div>
        <nav className="nav justify-center w-full mt-[41.5px] hidden lg:flex ">
          <ul className="flex items-center gap-[13px]">
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                Industries
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                Capabilities
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                Featured Insights
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                Locations
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                Careers
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                About Us
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
            <li className="flex items-center gap-1 nav-item">
              <a
                href=""
                className="hover:underline hover:text-[#2251FF] underline-offset-[25px] cursor-pointer"
              >
                McKinsey Blog
              </a>
              <Image className="accordion" src={accordion} alt="accordion" />
            </li>
          </ul>
        </nav>
        <Image className="md:mt-10 cursor-pointer" src={search} alt="search" />
      </header>
    </>
  );
};

export default Header;
