import Image from "next/image";
import React from "react";
import arrow from "../assets/arrow.svg";
import Link from "next/link";

const Career = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col-reverse md:flex-row h-full w-full items-center">
        <div className="w-full px-[35px] md:px-16  md:w-[50%] p-16">
          <h1 className="mb-4">
            Are you seeking an exciting role that will challenge and inspire
            you?
          </h1>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Careers
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Search jobs
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="office w-full md:w-[50%] h-[256px] md:h-full overflow-hidden"></div>
      </div>
      <div className="help flex  flex-col justify-center items-center p-8 md:p-16">
        <h2 className="text-[36px] text-center lg:text-[43px] font-georgia text-white">
          How can we help you?
        </h2>
        <p className="text-white text-center">
          <Link
            className="underline underline-offset-4 hover:bg-[#00A9F4] decoration-[#00A9F4]"
            href={""}
          >
            Get in touch
          </Link>
          <span className=""> with us or</span>
          <Link
            className="underline underline-offset-4 hover:bg-[#00A9F4] decoration-[#00A9F4]"
            href={""}
          >
            find an office
          </Link>
          <span className=""> closest to you.</span>
        </p>
      </div>
    </div>
  );
};

export default Career;
