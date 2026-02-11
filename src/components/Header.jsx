// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Header = ({ isSignedIn, setIsSignedIn }) => {
//   const [openProducts, setOpenProducts] = useState(false);
//   const [openProfile, setOpenProfile] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] z-50 
//       backdrop-blur-xl bg-white/30 border border-white/40 
//       shadow-xl rounded-2xl px-10 py-4 flex justify-between items-center">

//       {/* LOGO */}
//       <h1
//         className="text-xl font-bold cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         Vijay Sport Store
//       </h1>

//       {/* MENU */}
//       <div className="flex gap-8 items-center text-sm font-medium">

//         <Link to="/">Home</Link>

//         {/* PRODUCTS DROPDOWN */}
//         <div
//           className="relative"
//           onMouseEnter={() => setOpenProducts(true)}
//           onMouseLeave={() => setOpenProducts(false)}
//         >
//           <span className="cursor-pointer">Products ▾</span>

//           {openProducts && (
//             <div className="absolute top-10 left-0 
//               backdrop-blur-xl bg-white/80 
//               rounded-xl shadow-xl p-6 
//               w-[520px] grid grid-cols-2 gap-6">

//               <div>
//                 <h3 className="font-bold mb-2">Shoes</h3>
//                 <p onClick={() => navigate("/category/shoes")} className="cursor-pointer hover:text-blue-600">Running</p>
//                 <p onClick={() => navigate("/category/shoes")} className="cursor-pointer hover:text-blue-600">Football</p>
//                 <p onClick={() => navigate("/category/shoes")} className="cursor-pointer hover:text-blue-600">Cricket</p>
//               </div>

//               <div>
//                 <h3 className="font-bold mb-2">Accessories</h3>
//                 <p onClick={() => navigate("/category/accessories")} className="cursor-pointer hover:text-blue-600">Bats</p>
//                 <p onClick={() => navigate("/category/accessories")} className="cursor-pointer hover:text-blue-600">Balls</p>
//                 <p onClick={() => navigate("/category/accessories")} className="cursor-pointer hover:text-blue-600">Gloves</p>
//               </div>
//             </div>
//           )}
//         </div>

//         <Link to="/contact">Contact</Link>

//         {/* PROFILE (MEESHO STYLE) */}
//         <div className="relative">
//           <span
//             onClick={() => setOpenProfile(!openProfile)}
//             className="cursor-pointer"
//           >
//             Profile
//           </span>

//           {openProfile && !isSignedIn && (
//             <div className="absolute right-0 top-10 
//               backdrop-blur-xl bg-white/90 
//               rounded-xl shadow-xl w-56 overflow-hidden">

//               <div className="px-4 py-3 border-b">
//                 <p className="font-semibold">Hello User</p>
//                 <p className="text-xs text-gray-500">
//                   To access your account
//                 </p>
//               </div>

//               <div
//                 onClick={() => navigate("/signup")}
//                 className="m-3 bg-purple-600 text-white text-center py-2 rounded cursor-pointer"
//               >
//                 Sign Up
//               </div>

//               <p
//                 onClick={() => navigate("/signin")}
//                 className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
//               >
//                 Sign In
//               </p>
//             </div>
//           )}

//           {openProfile && isSignedIn && (
//             <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl w-40">
//               <p
//                 onClick={() => setIsSignedIn(false)}
//                 className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
//               >
//                 Logout
//               </p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Header;
import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // UPDATED CATEGORIES (Sports + Clothing + Accessories)
  const categories = {
    Shoes: [
      "Cricket Shoes",
      "Football Shoes",
      "Running Shoes",
      "Gym Shoes",
      "Skating Shoes",
      "Kabaddi Shoes",
    ],

    TShirts: [
      "Sports T-Shirts",
      "Gym T-Shirts",
      "Round Neck T-Shirts",
      "V-Neck T-Shirts",
      "Full Sleeve T-Shirts",
      "Dry Fit T-Shirts",
    ],

    Pants: [
      "Track Pants",
      "Lower Pants",
      "Joggers",
      "Short Pants",
      "Three-Fourth Pants",
      "Training Pants",
    ],

    Perfume: [
      "Men Perfume",
      "Women Perfume",
      "Unisex Perfume",
      "Deodorant Spray",
      "Body Mist",
      "Roll-On Perfume",
    ],

    Watches: [
      "Sports Watch",
      "Digital Watch",
      "Analog Watch",
      "Smart Watch",
      "Fitness Band",
    ],

    Cricket: [
      "Cricket Bat",
      "Cricket Ball",
      "Cricket Helmet",
      "Batting Gloves",
      "Cricket Stumps",
      "Bat Grip",
    ],

    Fitness: [
      "Dumbbells",
      "Yoga Mat",
      "Skipping Rope",
      "Gym Gloves",
      "Resistance Bands",
      "Agility Ladder",
    ],

    Boxing: [
      "Boxing Bag",
      "Boxing Gloves",
      "Head Guard",
      "Mouth Guard",
      "Boxing Kit",
    ],

    Games: [
      "Football",
      "Volleyball",
      "Badminton Racket",
      "Tennis Racket",
      "Carrom Board",
      "Chess Board",
    ],

    Accessories: [
      "Gym Bag",
      "Water Bottle",
      "Cap",
      "Socks",
      "Wrist Band",
      "Sports Towel",
    ],
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">

      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between px-4 md:px-12 py-4 border-b">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
          >
            VijaySport
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-md w-[40%]">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-1 cursor-pointer hover:text-violet-600"
            >
              <User size={22} />
              <span className="hidden sm:block text-sm font-medium">
                Profile
              </span>
            </div>

            {profileOpen && (
              <div className="absolute right-0 top-10 w-64 bg-white rounded-xl shadow-xl border">
                <div className="bg-violet-600 text-white p-4 rounded-t-xl">
                  <p className="font-semibold">Hello User</p>
                  <p className="text-sm opacity-90">
                    Access your Vijay account
                  </p>
                  <Link
                    to="/signup"
                    className="block mt-3 bg-white text-violet-600 text-center py-2 rounded-md font-semibold"
                  >
                    Sign Up
                  </Link>
                </div>

                <div className="p-3 text-sm text-gray-700">
                  <Link to="/signin" className="block py-2 px-2 hover:bg-gray-100 rounded">
                    Sign In
                  </Link>
                  <div className="py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
                    My Orders
                  </div>
                  <div className="py-2 px-2 hover:bg-red-50 text-red-500 rounded cursor-pointer">
                    Delete Account
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-violet-600">
            <ShoppingCart size={22} />
            <span className="hidden sm:block text-sm font-medium">
              Cart
            </span>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div
        className="hidden md:flex gap-8 px-12 py-3 text-sm font-medium border-b"
        onMouseLeave={() => setActiveMenu(null)}
      >
        {Object.keys(categories).map((key) => (
          <div
            key={key}
            onMouseEnter={() => setActiveMenu(key)}
            className="cursor-pointer hover:text-violet-600"
          >
            {key}
          </div>
        ))}
      </div>

      {/* MEGA DROPDOWN */}
      {activeMenu && (
        <div className="hidden md:block absolute w-full bg-white shadow-lg border-t">
          <div className="grid grid-cols-5 gap-10 px-16 py-8">
            {categories[activeMenu].map((item, index) => (
              <p key={index} className="text-gray-600 hover:text-black cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md p-4 space-y-4">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {Object.keys(categories).map((key) => (
            <div key={key}>
              <p className="font-semibold text-gray-800">{key}</p>
              <div className="pl-4 text-sm text-gray-600 space-y-1 mt-1">
                {categories[key].map((item, index) => (
                  <p key={index} className="cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
