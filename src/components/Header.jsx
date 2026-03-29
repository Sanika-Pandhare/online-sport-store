import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/vijay-logo.png";
import MegaMenu from "./navigation/MegaMenu";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const categories = [
    "Cricket",
    "Team Sports",
    "Athletics",
    "Boxing",
    "Fitness",
    "Training",
    "Indoor Games",
    "Accessories"
  ];

  return (
    <header
      className="header-container"
      onMouseLeave={() => setActiveCategory(null)}
    > 

      {/* 🔹 TOP BAR */}
      <div className="topbar">
        <span onClick={() => navigate("/contact")}>Contact</span>
        <span>|</span>
        <span onClick={() => navigate("/signup")}>Sign Up</span>
        <span>|</span>
        <span onClick={() => navigate("/login")}>Log In</span>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="navbar">

        {/* 🔥 LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <span className="shop-name">
            <span className="blue">VIJAY </span>
            <span className="yellow">SPORTS</span>
          </span>
        </div>

        {/* 🔍 SEARCH */}
        <div className="search-box">
          <span onClick={handleSearch} className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="nav-right">
          <button
            className="about-btn"
            onClick={() => navigate("/about")}
          >
            About Us
          </button>

          <span className="icon" onClick={() => navigate("/cart")}>
            🛒
          </span>
        </div>

      </div>

      {/* 🔹 CATEGORY BAR */}
      <div className="category-bar">
        {categories.map((cat) => (
          <span
            key={cat}
            className="category-item"
            onMouseEnter={() => setActiveCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* 🔹 MEGA MENU */}
      <MegaMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

    </header>
  );
};

export default Header;