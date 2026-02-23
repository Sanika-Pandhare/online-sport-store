import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/vijay-logo.png";
import MegaMenu from "./navigation/MegaMenu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b relative">

      {/* 🔹 TOP BAR */}
      <div className="flex justify-end items-center px-6 py-1 text-sm font-medium text-black bg-gray-50">

        {/* ✅ Contact Added Here */}
        <span
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-purple-600 transition"
        >
          Contact
        </span>

        <span className="mx-3">|</span>

        <span
          onClick={() => navigate("/signup")}
          className="cursor-pointer hover:text-purple-600 transition"
        >
          Sign Up
        </span>

        <span className="mx-3">|</span>

        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer hover:text-purple-600 transition"
        >
          Log In
        </span>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo + Store Name */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-blue-600">VIJAY</span>
            <span className="text-yellow-500">SPORTS</span>
          </h1>
        </div>

        {/* SEARCH BAR */}
        <div className="flex justify-center flex-1">
          <div className="relative w-[420px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-6">

          <Link
            to="/about"
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
          >
            About Us
          </Link>

          <div
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition"
          >
            <span>🛒</span>
            <span>Cart</span>
          </div>

        </div>
      </div>

      {/* 🔹 CATEGORY MEGA MENU */}
      <MegaMenu />

    </header>
  );
};

export default Header;