import React from 'react';
import watch from '../assets/Hero_Watch.svg';
import watch2 from '../assets/Hero_Watch.png';
import line from '../assets/line.png';
import left from '../assets/left.png';
import right from '../assets/right.png';

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center py-16 px-4 sm:px-8 md:px-20 lg:px-36">
      {/* Line patterns on the right side */}
      <div className="absolute top-0 right-0 flex justify-end items-center z-10">
        <img src={line} alt="Pattern Line" className="w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 h-auto" />
      </div>

      {/* Main background container */}
      <div className="bg-custom w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-lg p-6 sm:p-8 md:p-12 relative z-0">
        {/* Left side (Watch Image) */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img src={watch2} alt="Watch IMG" className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto mt-6 md:mt-0" />
        </div>

        {/* Right side (Product Info) */}
        <div className="mt-8 md:mt-0 md:ml-8 flex flex-col items-start w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            WAY KAMBAS MINI EBONY
          </h1>
          <div className="h-0.5 bg-black w-1/6 mt-2"></div>
          <p className="text-base sm:text-lg lg:text-xl mt-4 font-light leading-relaxed">
            MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin, designed with an overlap effect on its strap.
          </p>
          <div className="mt-3 text-red-500 font-semibold underline cursor-pointer">
            Discover
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-red-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-600 transition">
              Add to cart
            </button>
            <div className="border border-red-500 text-red-500 font-medium py-3 px-4 rounded-lg">
              3 LEFT
            </div>
          </div>

          {/* Sliding Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="border border-red-500 p-3 rounded-full flex justify-center items-center hover:bg-red-100 transition">
              <img src={left} alt="Previous" className="h-5 w-5" />
            </button>
            <button className="bg-red-500 p-3 rounded-full flex justify-center items-center hover:bg-red-600 transition">
              <img src={right} alt="Next" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
