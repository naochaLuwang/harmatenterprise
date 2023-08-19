"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const arcservices = [
  {
    imageUrl: "construction.png",
    title: "Architecture Planning and Design",
  },
  {
    imageUrl: "smarthome.png",
    title: "Smart Home",
  },
  {
    imageUrl: "interior.png",
    title: "Interior Design",
  },
  {
    imageUrl: "cwork.png",
    title: "Construction Work",
  },
  {
    imageUrl: "landscape.png",
    title: "Landscape Design",
  },
  {
    imageUrl: "construction.png",
    title: "Architecture Planning and Design",
  },
];

const Architectural = () => {
  return (
    <div className="w-full h-auto bg-indigo-950 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="lg:text-3xl font-medium text-white">
          Expert Architectural <br /> Solutions
        </h1>
        <p className="text-white text-sm mt-3">
          Unlock Your Vision with Expert Architectural Solutions! Explore Our
          Wide Range of Services and Transform Your Dreams into Reality.
        </p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          arrows={false}
          className="mt-10"
        >
          {arcservices.map((arc) => (
            <div
              className="w-[19rem] h-96 rounded-md shadow-sm bg-white border-2 flex flex-col items-center justify-center "
              key={arc.title}
            >
              <div className="relative w-64 h-64 flex-shrink-0">
                <Image src={`/icons/${arc.imageUrl}`} alt="Construction" fill />
              </div>

              <h1 className="font-medium text-neutral-700 mt-5 text-lg uppercase text-center">
                {arc.title}
              </h1>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Architectural;
