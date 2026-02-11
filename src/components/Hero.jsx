// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import heroVideo from "../assets/Hero.mp4";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">

//       {/* Background Video */}
//       <motion.video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 6, ease: "easeOut" }}
//         className="absolute inset-0 w-full h-full object-cover 
//                    brightness-75 contrast-110 saturate-110"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </motion.video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
//         >
//           Play Strong. Win Big 🏆
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-sm sm:text-lg md:text-xl mb-8 max-w-xl text-gray-200"
//         >
//           Premium sports gear for champions
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <Link
//             to="/products"
//             className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg"
//           >
//             Shop Now
//           </Link>

//           <Link
//             to="/categories"
//             className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
//           >
//             Categories
//           </Link>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../Hero.mp4";

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

      {/* Clear Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
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
