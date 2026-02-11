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

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

const Header = ({ isSignedIn, setIsSignedIn }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const sections = {
    featured: {
      title: "New & Featured",
      columns: [
        { heading: "Featured", items: ["New Arrivals", "Bestsellers"] },
        { heading: "Trending", items: ["Retro Running", "Gym Wear"] },
        { heading: "Sports", items: ["Cricket", "Football", "Basketball"] },
      ],
    },
    men: {
      title: "Men",
      columns: [
        { heading: "Topwear", items: ["T-Shirts", "Printed Shirts"] },
        { heading: "Bottomwear", items: ["Track Pants", "Shorts"] },
        { heading: "Gym", items: ["Gym Wear", "Training Shoes"] },
      ],
    },
    women: {
      title: "Women",
      columns: [
        { heading: "Topwear", items: ["T-Shirts", "Sports Bra"] },
        { heading: "Bottomwear", items: ["Leggings", "Track Pants"] },
        { heading: "Gym", items: ["Yoga", "Training"] },
      ],
    },
    kids: {
      title: "Kids",
      columns: [
        { heading: "Boys", items: ["T-Shirts", "Shoes"] },
        { heading: "Girls", items: ["Tops", "Leggings"] },
      ],
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-white border-b"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* HEADER BAR */}
      <div className="flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Vijay Sport Store
        </h1>

        {/* SECTIONS */}
        <div className="flex gap-8 text-sm font-medium">
          {Object.keys(sections).map((key) => (
            <span
              key={key}
              onMouseEnter={() => setActiveMenu(key)}
              className="cursor-pointer hover:underline"
            >
              {sections[key].title}
            </span>
          ))}
        </div>

        {/* SEARCH + PROFILE */}
        <div className="flex items-center gap-6">

          {/* SEARCH */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-72">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search sports products"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* PROFILE (same as your old code) */}
          <div className="relative">
            <span
              onClick={() => setOpenProfile(!openProfile)}
              className="cursor-pointer"
            >
              Profile
            </span>

            {openProfile && !isSignedIn && (
              <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl w-56">
                <div className="px-4 py-3 border-b">
                  <p className="font-semibold">Hello User</p>
                  <p className="text-xs text-gray-500">
                    To access your account
                  </p>
                </div>

                <div
                  onClick={() => navigate("/signup")}
                  className="m-3 bg-black text-white text-center py-2 rounded cursor-pointer"
                >
                  Sign Up
                </div>

                <p
                  onClick={() => navigate("/signin")}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  Sign In
                </p>
              </div>
            )}

            {openProfile && isSignedIn && (
              <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl w-40">
                <p
                  onClick={() => setIsSignedIn(false)}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* DROPDOWN */}
      {activeMenu && (
        <div className="w-full bg-white border-t shadow-lg">
          <div className="grid grid-cols-4 gap-10 px-16 py-10">
            {sections[activeMenu].columns.map((col, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-4">{col.heading}</h3>
                {col.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-600 hover:text-black cursor-pointer mb-2"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
