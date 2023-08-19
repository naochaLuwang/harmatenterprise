import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-52 border-t-2 border shadow-lg bg-slate-50">
      <div className="lg:max-w-7xl lg:mx-auto flex justify-between h-full w-full items-center space-x-10">
        <div className="flex flex-col flex-shrink-0 space-y-2">
          <div className="relative w-28 h-28">
            <Image src="/org/logo.jpeg" alt="logo" fill />
          </div>
          <p className="text-xs max-w-2xl lg:leading-relaxed font-medium text-neutral-600">
            Nestled in Imphal, HARMAT ENTERPRISE PRIVATE LIMITED is a hub of
            architectural innovation, smart planning, and advanced IT
            networking. Our passion for creativity and technology fuels our
            progress. With a team from across India, we&apos;re not just
            changing spaces; we&apos;re making possibilities limitless. Welcome
            to a new era of excellence!
          </p>
        </div>
        <div className="  bg-indigo-950 w-1 h-32"></div>
        <div className="flex flex-col w-full h-auto items-center">
          <p>contact@harmatenterprise.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
