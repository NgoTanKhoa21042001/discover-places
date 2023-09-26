import category from "@/data/category";
import Image from "@/node_modules/next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="hero-image"
          width={800}
          height={200}
          className="w-full absolute mt-[-10px] z-1"
        />
        <div className="mt-[70px] z-10">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCOVER
          </h2>
          <h2 className="text-[20px]">Your Amazing City</h2>
          <div className="mt-5 z-10 flex gap-2 items-center justify-center">
            <input
              type="text"
              placeholder="Search Anything"
              className="z-10 border-[1px] rounded-full bg-white shadow-sm px-5 p-3 w-[36%] outline-red-600"
            />
            <button className="bg-red-600 rounded-full p-3 shadow-md z-10 hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          {/* category */}
          <div className="mt-5 flex flex-col justify-center items-center">
            <h2>Or Browse the category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] gap-5 mt-3">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 shadow-lg hover:scale-110  cursor-pointer transition-all"
                >
                  <Image src={item.icon} alt="" width={30} height={30} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
