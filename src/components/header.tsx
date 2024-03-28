"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import accordion from "../assets/accordion.svg";
import Link from "next/link";
import search from "../assets/search.svg";
import hamburger from "../assets/hamburger.svg";
import someone from "../assets/someone.png";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      {sidebar && (
        <div className="sidebar  z-40 fixed min-h-screen h-full w-[447px] bg-[#051C2C]">
          <div className="flex gap-4 justify-between w-full p-4">
            <AiOutlineClose
              onClick={() => {
                setSidebar(false);
              }}
              className="cursor-pointer"
              size={"56px"}
              color="white"
            />
            <div className="flex justify-between w-full">
              <Image src={logo} alt="logo" />
              <Image src={search} alt="search" />
            </div>
          </div>
          <div className="w-full h-0.5 bg-[#F0F0F0] mb-12"></div>
          <ul className="px-8 flex flex-col gap-[32px] text-white">
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Industries
              </a>
              <Image
                className="rotate-[270deg]"
                src={accordion}
                alt="accordion"
              />
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Capabilities
              </a>
              <Image
                className="rotate-[270deg]"
                src={accordion}
                alt="accordion"
              />
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Featured Insights
              </a>
              <Image
                className="rotate-[270deg]"
                src={accordion}
                alt="accordion"
              />
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Locations
              </a>
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Careers
              </a>
              <Image
                className="rotate-[270deg]"
                src={accordion}
                alt="accordion"
              />
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                About Us
              </a>
              <Image
                className="rotate-[270deg]"
                src={accordion}
                alt="accordion"
              />
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                McKinsey Blog
              </a>
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Email Subscriptions
              </a>
            </li>
            <li className="flex sidebar-item justify-between items-center">
              <a className="sidebar-link text-[18px]" href="">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      )}
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
              onClick={() => {
                setSidebar(true);
              }}
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
            </li>
          </ul>
        </nav>
        <Image className="md:mt-10 cursor-pointer" src={search} alt="search" />
      </header>
    </>
  );
};

export default Header;
