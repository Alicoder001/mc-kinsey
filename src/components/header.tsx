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
    <header className="header flex justify-between items-start pr-[16px] fixed w-full top-0 left-0 mb-16 text-white z-20 ">
      <div className="flex items-center gap-[7px]">
        <div className="">
          <Image src={hamburger} alt="hamburger" />
        </div>
        <Image src={logo} alt="logo" />
      </div>
      <nav className="nav mt-[41.5px]">
        <ul className="flex items-center gap-[13px]">
          <li className="flex items-center gap-1">
            <p>Industries</p>
            <Image src={accordion} alt="accordion" />
          </li>
          <li className="flex items-center gap-1">
            <p>Industries</p>
            <Image src={accordion} alt="accordion" />
          </li>
          <li className="flex items-center gap-1">
            <p>Industries</p>
            <Image src={accordion} alt="accordion" />
          </li>
          <li className="flex items-center gap-1">
            <p>Industries</p>
            <Image src={accordion} alt="accordion" />
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-end gap-2 mt-2">
        <div className="flex gap-[6px] items-center">
          <Link
            className="px-[6px] text-[16px] font-light font-calibri text-white"
            href={""}
          >
            Sign In
          </Link>
          <div className="w-0.5 h-4 bg-white"></div>
          <Link
            className="px-[6px] text-[16px] font-light font-calibri text-white"
            href={""}
          >
            Subscribe
          </Link>
        </div>
        <Image src={search} alt="search" />
      </div>
    </header>
  );
};

export default Header;
