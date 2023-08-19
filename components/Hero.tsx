import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-fit ">
      <div className="flex items-center justify-between w-full lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col w-full h-auto">
          <h1 className="font-medium tracking-wider text-indigo-900 lg:text-5xl">
            IT Solutions that transform your business.
          </h1>
          <p className="mt-5 text-xl font-medium text-neutral-600">
            Leave the tech to us. Let&apos;s get started with yours
          </p>
          <p></p>
          <Link
            href="#_"
            className="relative inline-block mt-10 text-lg group w-fit"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Learn More</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
        <Image
          src="/icons/internet.svg"
          alt="internet"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
