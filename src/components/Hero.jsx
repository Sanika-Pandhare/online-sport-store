import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const texts = [
    "Play Strong. Win Big 🏆",
    "Premium Sports Gear",
    "Built For Champions",
    "Train Hard. Stay Fit."
  ];

  const [index, setIndex] = useState(0);

  // Change text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Animated Heading */}
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 
                     mix-blend-difference text-white 
                     drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          {texts[index]}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-lg md:text-2xl font-semibold 
                     max-w-2xl mb-8 
                     mix-blend-difference text-white
                     drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
        >
          Vijay Sport – Your Complete Sports Destination
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/products"
            className="bg-orange-500 px-6 py-3 rounded-lg font-semibold 
                       hover:bg-orange-600 transition duration-300 shadow-lg text-white"
          >
            Shop Now
          </Link>

          <Link
            to="/categories"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold 
                       hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            Categories
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;