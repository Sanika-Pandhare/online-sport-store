import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* GRADIENT OVERLAY (MORE PREMIUM LOOK) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-7xl">

        <p className="text-yellow-400 font-semibold mb-3 tracking-wide uppercase">
          New Collection 2026
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Elevate Your <br /> Game Today
        </h1>

        <p className="text-gray-200 max-w-xl mb-8 text-lg">
          Discover premium sports gear designed for performance, comfort, 
          and style. Trusted by athletes across India.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap">

          {/* PRIMARY BUTTON */}
          <button
            onClick={() => navigate("/categories")}
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold 
            hover:bg-yellow-400 transition duration-300 shadow-lg hover:scale-105"
          >
            Shop Now
          </button>

          {/* SECONDARY BUTTON */}
          <button
            onClick={() => navigate("/about")}
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold 
            hover:bg-white hover:text-black transition duration-300 hover:scale-105"
          >
            Learn More
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;