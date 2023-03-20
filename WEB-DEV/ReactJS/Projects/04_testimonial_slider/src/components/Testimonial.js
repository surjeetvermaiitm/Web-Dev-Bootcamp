import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialCard from "./TestimonialCard";

import CardData from "../data";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const testimonialData = CardData;

  const slideRight = () => {
    if (index >= testimonialData.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  // Another way of implementing the function using turnary operator
  const slideLeft = () => {
    setIndex(index <= 0 ? testimonialData.length - 1 : index - 1);
  };

  const surpriseMe = () => {
    let k = Math.floor(Math.random() * testimonialData.length);

    // This while loop is given so that the value does not come same on consecutive clicks
    while (index === k) {
      k = Math.floor(Math.random() * testimonialData.length);
    }

    setIndex(k);
  };

  //   const { name, job, image, text } = testimonialData[index];

  return (
    <main className="w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-700 flex flex-col justify-center items-center p-10">
      {/* <TestimonialCard userName={name} userJob={job} userImage={image} userDetails={text} /> */}
      <TestimonialCard {...testimonialData[index]} />

      {/* Slider */}
      <div className="flex text-3xl mt-5 gap-3 text-violet-400  font-bold ">
        <div
          onClick={slideLeft}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </div>
        <div
          onClick={slideRight}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </div>
      </div>

      {/* Surprise Me */}
      <div
        onClick={surpriseMe}
        className="mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
      >
        Surprise Me
      </div>
    </main>
  );
}
