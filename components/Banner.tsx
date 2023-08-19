import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-auto py-20">
      <div className="w-full lg:max-w-7xl lg:mx-auto grid lg:grid-cols-3 gap-16">
        <div className="relative h-auto w-full border before:absolute before:-bottom-4 before:-right-4 before:h-12 before:w-12 before:border-b-4 before:border-r-4 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-12 after:w-12 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out border-neutral-300 before:border-indigo-200 after:border-indigo-200 rounded-md before:rounded-md after:rounded-md shadow-sm flex flex-col items-center py-10 px-6">
          <div className="relative h-56 w-56">
            <Image
              src="/icons/ecoomerce.png"
              alt="ecommerce"
              fill
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="lg:text-2xl font-medium text-neutral-600">
            Online Store
          </h1>
          <p className="text-center text-sm tracking-wider mt-3">
            Fashions, Electrical, Groceries, TV, Computer Hardware, Garden
            Tools, Kitchen Appliance, Toys and more. <br /> <br />
          </p>
          <Link className="inline-flex mt-5" href="/">
            <span className="h-10 flex items-center justify-center uppercase font-semibold px-6 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-l-md">
              shop now
            </span>
            <span className="h-10 w-12 flex-shrink-0 rounded-r-md flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                aria-hidden="true"
                focusable={false}
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x h-3 w-3"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="relative h-auto w-full border before:absolute before:-bottom-4 before:-right-4 before:h-12 before:w-12 before:border-b-2 before:border-r-2 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-12 after:w-12 after:border-t-4 after:border-l-4 after:transition-all after:duration-300 after:ease-in-out border-neutral-300 before:border-indigo-200 after:border-indigo-200 rounded-md before:rounded-md after:rounded-md shadow-sm flex flex-col items-center py-10 px-6">
          <div className="relative h-56 w-56">
            <Image
              src="/icons/digital.png"
              alt="ecommerce"
              fill
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="lg:text-2xl font-medium text-neutral-600">
            IT Solutions
          </h1>
          <p className="text-center text-sm tracking-wider mt-3">
            Web Design & Development, Networking, Smart Home Integration, Home
            Security, Medical and Industrial Equipments. <br />
            <br />
          </p>
          <Link className="inline-flex mt-5" href="/">
            <span className="h-10 flex items-center justify-center uppercase font-semibold px-6 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-l-md">
              read more
            </span>
            <span className="h-10 w-12 flex-shrink-0 rounded-r-md flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                aria-hidden="true"
                focusable={false}
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x h-3 w-3"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="relative h-auto w-full border before:absolute before:-bottom-4 before:-right-4 before:h-12 before:w-12 before:border-b-4 before:border-r-4 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-12 after:w-12 after:border-t-2 after:border-l-2 after:transition-all after:duration-300 after:ease-in-out border-neutral-300 before:border-indigo-200 after:border-indigo-200 rounded-md before:rounded-md after:rounded-md shadow-sm flex flex-col items-center py-10 px-6">
          <div className="relative h-56 w-56">
            <Image
              src="/icons/architect.png"
              alt="ecommerce"
              fill
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="lg:text-2xl font-medium text-neutral-600">
            Architectural Services
          </h1>
          <p className="text-center text-sm tracking-wider mt-3">
            Architectural Design and Planning, Interior Design, Landscaping
            Design, Material Selection, Skilled Workforce Provision, and 3D
            Visualization.
          </p>
          <Link className="inline-flex mt-5" href="/">
            <span className="h-10 flex items-center justify-center uppercase font-semibold px-6 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-l-md">
              read more
            </span>
            <span className="h-10 w-12 flex-shrink-0 rounded-r-md flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                aria-hidden="true"
                focusable={false}
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x h-3 w-3"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
