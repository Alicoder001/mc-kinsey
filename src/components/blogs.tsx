import React from "react";

const Blog = () => {
  return (
    <div className="h-full mb-16">
      <div className="pt-16">
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
        <li className="blog-item vawe flex w-full h-full">
          <div className="overflow-hidden shrink-0 w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
          <div className="info w-full h-full">
            <p className="text-[14px]">March 15, 2024</p>
            <p className="text-[24px]">
              McKinsey and Celonis bring the power of process mining to business
              transformations
            </p>
          </div>
        </li>
        <li className="blog-item mobile">
          <div className="info w-full h-full">
            <p className="text-[14px] text-white">March 15, 2024</p>
            <p className="text-[24px] text-white">
              Mobile World Congress 2024: Rewiring telcos for the future
            </p>
          </div>
        </li>
        <li className="blog-item island flex w-full h-full">
          <div className="info w-full h-full relative ">
            <div className="info-wrap absolute bottom-0 left-0">
              <p className="text-[14px]">March 15, 2024</p>
              <p className="text-[24px] ">
                McKinsey and Celonis bring the power of process mining to
                business transformations
              </p>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
        </li>
        <li className="blog-item model flex w-full h-full">
          <div className="info w-full h-full relative ">
            <div className="info-wrap absolute bottom-[72px] left-0">
              <p className="text-[14px]">March 15, 2024</p>
              <p className="text-[24px] ">
                McKinsey and Celonis bring the power of process mining to
                business transformations
              </p>
            </div>
            <div className="w-full h-[72px] bg-[#2251FF] absolute bottom-0 left-0 px-9 py-6">
              <p className="text-base text-white">
                Read more on our blog {"->"}
              </p>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 w-[50%] h-full">
            <div className="wrap w-full h-full"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
