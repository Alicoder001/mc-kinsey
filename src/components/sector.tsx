import React from "react";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import atomic from "../assets/atomic.png";
import never from "../assets/never-just-tech.png";
const Sector = () => {
  return (
    <div className="h-full flex flex-col mb-16">
      <div className="flex h-full w-full items-center">
        <div className="book-bg w-[50%] h-full overflow-hidden">
          {/* <Image className="h-full object-cover" src={atomic} alt="atomic" /> */}
        </div>
        <div className="w-[50%] p-16">
          <h1 className="mb-4">
            Scaling gen AI in banking: Choosing the best operating model
          </h1>
          <p className="mb-6">
            Ready to excel in today’s competitive business landscape? Rediscover
            the six mindsets that distinguish the world’s most successful CEOs,
            and redefine your approach to leadership.
          </p>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="flex gap-2">
            <p className="font-normal leading-6">Read more about the book</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center flex-row-reverse">
        <div className="atomic w-[50%] h-full overflow-hidden">
          {/* <Image className="h-full object-cover" src={atomic} alt="atomic" /> */}
        </div>
        <div className="w-[50%] p-16">
          <h1 className="mb-4">
            Scaling gen AI in banking: Choosing the best operating model
          </h1>
          <p className="mb-6">
            Ready to excel in today’s competitive business landscape? Rediscover
            the six mindsets that distinguish the world’s most successful CEOs,
            and redefine your approach to leadership.
          </p>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="flex gap-2">
            <p className="font-normal leading-6">Read more about the book</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center ">
        <div className="never w-[50%] h-full overflow-hidden"></div>
        <div className="w-[50%] p-16">
          <h1 className="mb-4">Creating value beyond the hype</h1>
          <p className="mb-6">
            Ready to excel in today’s competitive business landscape? Rediscover
            the six mindsets that distinguish the world’s most successful CEOs,
            and redefine your approach to leadership.
          </p>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center flex-row-reverse ">
        <div className="colourful w-[50%] h-full overflow-hidden"></div>
        <div className="w-[50%] p-16">
          <h1 className="mb-4">
            Shaping tomorrow’s talent agenda for the public sector
          </h1>
          <p className="mb-6">
            The vast demographic changes transforming the world today are having
            a profound impact on how the public sector manages talent. Our
            six-pronged approach can help leaders shape a robust talent
            framework for the future.
          </p>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="flex gap-2 mb-4">
            <p className="font-normal leading-6">Dare to lead</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
