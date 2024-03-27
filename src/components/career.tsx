import Image from "next/image";
import React from "react";
import arrow from "../assets/arrow.svg";
import Link from "next/link";

const Career = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-full w-full items-center">
        <div className="w-[50%] p-16">
          <h1 className="mb-4">
            Are you seeking an exciting role that will challenge and inspire
            you?
          </h1>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="flex gap-2">
            <p className="font-normal leading-6">Read more about the book</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="office w-[50%] h-full overflow-hidden"></div>
      </div>
      <div className="help flex flex-col justify-center items-center p-16">
        <h2 className="text-[43px] font-georgia text-white">
          How can we help you?
        </h2>
        <p className="text-white">
          <Link className="underline" href={""}>
            Get in touch
          </Link>
          <span> with us or</span>
          <Link className="underline" href={""}>
            find an office
          </Link>
          <span> closest to you.</span>
        </p>
      </div>
    </div>
  );
};

export default Career;
