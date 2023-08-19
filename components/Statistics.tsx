"use client";
import React from "react";
import CountUp from "react-countup";

const counters = [
  {
    num: 5,
    title: "Years of expertise",
  },
  {
    num: 5,
    title: "Years of expertise",
  },
  {
    num: 5,
    title: "Years of expertise",
  },
  {
    num: 5,
    title: "Years of expertise",
  },
];

const Statistics = () => {
  return (
    <div className="w-full h-auto py-20">
      <div className="flex justify-between mx-auto max-w-7xl">
        {counters.map((counter) => (
          <div className="flex flex-col items-center" key={counter.title}>
            <CountUp
              end={counter.num}
              className="text-6xl font-bold text-neutral-500"
              suffix="+"
            />
            <p>{counter.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
