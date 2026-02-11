// 
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

// Import Images
import shoe from "../assets/products/shoe.jpg";
import pant1 from "../assets/products/pant1.jpg";
import trophy from "../assets/products/trophy.jpg";
import jogger from "../assets/products/jogger.jpg";
import tshirt from "../assets/products/tshirt.jpg";
import shorts from "../assets/products/shorts.jpg";
import printshirt from "../assets/products/printshirt.jpg";
import boyshort from "../assets/products/boyshort.jpg";

const Home = () => {
  const navigate = useNavigate();

  const productNames = [
    "Sports Shoes",
    "Track Pants",
    "Trophies",
    "Joggers",
    "Sports T-Shirts",
    "Sports Shorts",
    "Printing Shirts",
    "Boys Sports Shorts",
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Welcome to Vijay Sports, Kole 🏆
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Vijay Sports provides all types of sports materials including Cricket Kits,
            Football, Volleyball, Boxing Equipment, Gym Accessories, Running Shoes,
            Track Pants, T-Shirts, Trophies, and School Sports Equipment.
            We deliver premium quality at affordable prices.
          </p>
        </div>
      </section>

      {/* OUR AVAILABLE PRODUCTS (ONLY NAMES) */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Available Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {productNames.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <p className="text-lg md:text-xl font-semibold text-gray-700">
                {product}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT IMAGE GALLERY (SIZE INCREASED) */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Product Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {[shoe, pant1, trophy, jogger, tshirt, shorts, printshirt, boyshort].map(
            (img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={img}
                  alt="product"
                  className="w-full 
                             h-72 
                             sm:h-80 
                             md:h-96 
                             object-cover 
                             hover:scale-105 
                             transition duration-500"
                />
              </div>
            )
          )}

        </div>
      </section>

      {/* PRINTING SHIRT & BOYS SHORTS SECTION */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <img
              src={printshirt}
              alt="Printing Shirt"
              className="w-full h-80 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-4">
              Premium Printing Shirts
            </h3>
            <p className="text-gray-600 mt-2">
              Customized sports printing shirts available for schools,
              colleges, tournaments, and teams.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <img
              src={boyshort}
              alt="Boys Shorts"
              className="w-full h-80 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-4">
              Boys Sports Shorts
            </h3>
            <p className="text-gray-600 mt-2">
              Comfortable, lightweight and durable sports shorts available
              in multiple colors and sizes.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
