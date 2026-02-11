import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderHero = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div
      className="h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517649763962-0c623066013b')",
      }}
    >
      {/* Glass Navbar */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] bg-white/30 backdrop-blur-md rounded-2xl px-8 py-4 flex justify-between items-center shadow-lg z-50">
        
        <h1 className="font-bold text-xl">SPORTIFY</h1>

        <div className="flex gap-8 items-center">
          <div
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative cursor-pointer"
          >
            Products
            {openMenu === "products" && (
              <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg p-6 w-60">
                <p className="hover:text-blue-600">Shoes</p>
                <p className="hover:text-blue-600">Clothing</p>
                <p className="hover:text-blue-600">Accessories</p>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setOpenMenu("sports")}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative cursor-pointer"
          >
            Sports
            {openMenu === "sports" && (
              <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg p-6 w-60">
                <p>Cricket</p>
                <p>Football</p>
                <p>Running</p>
              </div>
            )}
          </div>

          <Link to="/about">About</Link>
          <Link to="/careers">Offers</Link>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full">
          Contact Us
        </button>
      </div>

      {/* Hero Content */}
      <div className="pt-40 px-20 text-white max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight">
          Sports Gear <br /> For Champions
        </h1>
        <p className="mt-6 text-lg">
          Discover premium sports equipment, shoes and accessories built for
          performance and comfort.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold">
          Explore Products →
        </button>
      </div>
    </div>
  );
};

export default HeaderHero;
