import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard({ name, job, image, text }) {
  return (
    <div className="flex flex-col md:relative">
      {/* User Image */}
      <div className="relative mx-auto md:absolute md:top-[-7rem] z-[10]">
        <img
          src={image}
          className="aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 sticky"
          alt=""
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-30 left-[10px]"></div>
      </div>

      {/* User Details */}
      <div className="text-center mt-7">
        <h2 className="font-bold text-lg md:text-2xl tracking-wider capitalize">
          {name}
        </h2>
        <h2 className="text-violet-300 uppercase text-sm">{job}</h2>
      </div>

      <span className="text-violet-400 w-fit mx-auto mt-5">
        <FaQuoteLeft />
      </span>

      {/* User Description */}
      <div className="text-center text-slate-500 mt-4 ">{text}</div>
      <div className="text-violet-400 w-fit mx-auto mt-5 mb-5">
        <FaQuoteRight />
      </div>
    </div>
  );
}
