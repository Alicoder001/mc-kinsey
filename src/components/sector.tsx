import React from "react";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import atomic from "../assets/atomic.png";
import never from "../assets/never-just-tech.png";
const Sector = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row h-full w-full items-center">
        <div className="book-bg w-full md:w-[50%] h-64 md:h-full overflow-hidden">
          {/* <Image className="h-full object-cover" src={atomic} alt="atomic" /> */}
        </div>
        <div className=" bg-[#F0F0F0] w-full md:w-[50%] p-8 md:p-16">
          <h1 className="mb-4">
            Serving a greater purpose: CEO Excellence revisited
          </h1>
          <p className="mb-6">
            The authors of CEO Excellence, the New York Times and Wall Street
            Journal best-selling book, reflect on the book’s success and share
            its life-changing impact on their personal and professional worlds.
          </p>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Dare to lead
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Read more about the book
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full  md:flex-row-reverse">
        <div className="atomic w-full md:w-[50%] h-64 md:h-full overflow-hidden">
          {/* <Image className="h-full object-cover" src={atomic} alt="atomic" /> */}
        </div>
        <div className="w-full bg-[#F0F0F0] md:w-[50%] p-8 md:p-16">
          <h1 className="mb-4">
            Scaling gen AI in banking: Choosing the best operating model
          </h1>
          <p className="mb-6">
            Generative AI is transforming financial services, offering
            opportunities for efficiency and innovation. As banks race to deploy
            gen AI, the right operating model is key to unlocking its potential.
          </p>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Reap the benefits
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Explore more insights on financial services
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-full w-full items-center">
        <div className="never bg-[#F0F0F0] w-full md:w-[50%] h-64 md:h-full overflow-hidden"></div>
        <div className="w-full md:w-[50%] p-8 md:p-16">
          <h1 className="mb-4">Creating value beyond the hype</h1>
          <p className="mb-6">
            Tech doesn’t create value by itself. We’re helping clients unlock
            its full potential with the right strategies, skills, operating
            models, and data. With McKinsey, it’s never just tech.
          </p>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Reap the benefits
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full  md:flex-row-reverse">
        <div className="colourful  w-full md:w-[50%] h-64 md:h-full overflow-hidden"></div>
        <div className="w-full bg-[#F0F0F0] md:w-[50%] p-8 md:p-16">
          <h1 className="mb-4">
            Shaping tomorrow’s talent agenda for the public sector
          </h1>
          <p className="mb-6">
            The vast demographic changes transforming the world today are having
            a profound impact on how the public sector manages talent. Our
            six-pronged approach can help leaders shape a robust talent
            framework for the future.
          </p>
          <div className="arrow-wrap flex gap-2 mb-4">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Reap the benefits
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
          <div className="arrow-wrap flex gap-2">
            <p className=" cursor-pointer hover:text-[#2251FF] font-normal leading-6">
              Explore more insights on financial services
            </p>
            <Image className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
