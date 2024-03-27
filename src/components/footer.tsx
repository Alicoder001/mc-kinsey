import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";
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
    <footer className="pt-16">
      <div className="max-w-[1440px] w-full mx-auto px-[108px] flex flex-col">
        <Image src={logo} alt="logo" className="mb-9" />
        <div className="flex justify-between mb-8">
          <div className="">
            <h5 className="text-[20px] mb-4 leading-[1.6]">Subscribe</h5>
            <p className="text-[#333333] text-base leading-normal mb-4">
              Select topics and stay current with our latest insights
            </p>
            <div className="flex gap-4">
              <input
                className="px-4 py-[15px] border-[1px] border-solid border-[#000] "
                placeholder="Email address"
                type="text"
              />
              <button className="px-[32.5px] py-[13.5px] bg-[#2251FF] text-[14px] text-white">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <ul className="flex gap-[30px] mb-6">
              <Link href={""}>Contact us</Link>
              <Link href={""}>FAQ</Link>
              <Link href={""}>Privacy policy</Link>
              <Link href={""}>Cookie preferences</Link>
              <Link href={""}>Terms of use</Link>
            </ul>
            <div className="flex gap-10 mb-4">
              <p>Local language information</p>
              <p>Accessibility statement</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-black w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={linkedin} alt="linkedin" />
              </div>
              <div className="bg-black w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={x} alt="x" />
              </div>
              <div className="bg-black w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[18px]" src={facebook} alt="facebook" />
              </div>
              <div className="bg-black w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={youtube} alt="youtube" />
              </div>
              <div className="bg-black w-8 h-8 flex items-center justify-center rounded-[50%]">
                <Image className="w-[13px]" src={icon} alt="social" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#B3B3B3] mb-16"></div>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <p className="max-w-[350px] w-full text-[14px]">
              McKinsey Insights - Get our latest thinking on your iPhone, iPad,
              or Android device.
            </p>
            <div className="flex gap-4">
              <Image src={appStore} alt="app-store" />
              <Image src={googlePlay} alt="google-play" />
            </div>
          </div>
          <div className="">© 1996-2024 McKinsey & Company</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
