import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute text-gray-200 flex flex-col w-full h-full bg-black/40 justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text ">
            Foods <span className="text-orange-600">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="/food main.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
