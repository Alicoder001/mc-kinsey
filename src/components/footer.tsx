import Image from "next/image";
import React from "react";
import logo from "../assets/logo-black.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import youtube from "../assets/youtube.svg";
import icon from "../assets/Icon.svg";
import appStore from "../assets/apple-store.svg";
import googlePlay from "../assets/playstore.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="pt-16 footer pb-10">
      <div className="max-w-[1440px] w-full mx-auto px-[35px] md:px-12   lg-[108px] flex flex-col">
        <Image src={logo} alt="logo" className="mb-9" />
        <div className="flex flex-col md:flex-row  md:justify-between mb-8">
          <div className="w-full">
            <h5 className="text-[20px] mb-4 leading-[1.6]">Subscribe</h5>
            <p className="text-[#333333] text-base leading-normal mb-4">
              Select topics and stay current with our latest insights
            </p>
            <div className="flex gap-4 w-full shrink-0 mb-8 md:mb-0">
              <input
                className="outline-none focus:border-[#2251FF] hover:border-[#2251FF] px-4 py-[8px] w-full text-[16px] border-[1px] border-solid border-[#000]  "
                placeholder="Email address"
                type="text"
              />
              <button className="w-[180px] md:w-auto px-[32.5px] py-[13.5px] bg-[#2251FF] text-[14px] text-white border-[#2251FF] hover:bg-white hover:text-[#2251FF] hover:border-[#2251FF] border-2">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <ul className="flex gap-y-6 gap-x-[30px] mb-6 flex-wrap justify-start md:justify-end">
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                FAQ
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Contact us
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Privacy policy
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Cookie preferences
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Terms of use
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Local language information
              </Link>
              <Link
                className="hover:text-[#2251FF] hover:underline underline-offset-2"
                href={""}
              >
                Accessibility statement
              </Link>
            </ul>

            <div className="flex gap-2 ">
              <div className="bg-black hover:bg-[#2251FF] cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={linkedin} alt="linkedin" />
              </div>
              <div className="bg-black hover:bg-[#2251FF] cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={x} alt="x" />
              </div>
              <div className="bg-black hover:bg-[#2251FF] cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[18px]" src={facebook} alt="facebook" />
              </div>
              <div className="bg-black hover:bg-[#2251FF] cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={youtube} alt="youtube" />
              </div>
              <div className="bg-black hover:bg-[#2251FF] cursor-pointer w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={icon} alt="social" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#B3B3B3] mb-9 md:mb-16"></div>
        <div className="flex justify-between w-full flex-col md:flex-row">
          <div className="flex gap-4 flex-col">
            <p className="md:max-w-[350px] font-light w-full text-[14px]">
              McKinsey Insights - Get our latest thinking on your iPhone, iPad,
              or Android device.
            </p>
            <div className="flex gap-4 mb-8 md:mb-0">
              <Image
                className="cursor-pointer"
                src={appStore}
                alt="app-store"
              />
              <Image
                className="cursor-pointer"
                src={googlePlay}
                alt="google-play"
              />
            </div>
          </div>
          <p className="">© 1996-2024 McKinsey & Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
