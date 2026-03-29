import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

// Images
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

  const products = [
    { name: "Sports Shoes", image: shoe },
    { name: "Track Pants", image: pant1 },
    { name: "Trophies", image: trophy },
    { name: "Joggers", image: jogger },
    { name: "Sports T-Shirts", image: tshirt },
    { name: "Sports Shorts", image: shorts },
    { name: "Printing Shirts", image: printshirt },
    { name: "Boys Sports Shorts", image: boyshort },
  ];

  return (
    <div className="bg-white">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 ABOUT */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Vijay Sports
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Your one-stop destination for premium sports equipment, apparel, and accessories.
          Built for performance, designed for style.
        </p>
      </section>

      {/* 🔥 FEATURED PRODUCTS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Featured Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate("/categories")}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium text-gray-800 group-hover:text-black">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 EXPLORE COLLECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
            Explore Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-2xl group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 HIGHLIGHT SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
            <img
              src={printshirt}
              alt="Printing Shirt"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Custom Printing Shirts
              </h3>
              <p className="text-gray-600 mt-2">
                Design your own jerseys for teams and events.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
            <img
              src={boyshort}
              alt="Boys Shorts"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Comfortable Sports Shorts
              </h3>
              <p className="text-gray-600 mt-2">
                Lightweight and breathable for maximum comfort.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;