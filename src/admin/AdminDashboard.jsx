import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

import logo from "../assets/vijay-logo.png";
import slide1 from "../assets/products/admin_img2.jpg";
import slide2 from "../assets/products/admin_img3.jpg";
import slide3 from "../assets/products/admin_img4.jpg";

function AdminDashboard() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const addRef = useRef(null);

  const slides = [slide1, slide2, slide3];

  // Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (addRef.current && !addRef.current.contains(event.target)) {
        setShowAddDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <div className="admin-container">

      {/* Top Navbar */}
      <div className="top-navbar">

        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="admin-title">Vijay Sport's</h2>
        </div>

        <div className="settings-container">
          <div
            className="settings"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Settings ▼
          </div>

          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Menu Section */}
      <div className="menu-section">

        <div
          className="menu-item"
          onClick={() => navigate("/admin/dashboard")}
        >
          Home
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/admin/products")}
        >
          All Products
        </div>

        {/* Add Products Dropdown */}
        <div className="menu-item add-wrapper" ref={addRef}>
          <div onClick={() => setShowAddDropdown(!showAddDropdown)}>
            ⇄ Add Products ▼
          </div>

          {showAddDropdown && (
            <div className="add-dropdown">
              <div
                className="add-item"
                onClick={() => navigate("/admin/add-product")}
              >
                Shoes
              </div>

              <div
                className="add-item"
                onClick={() => navigate("/admin/add-product")}
              >
                Caps
              </div>

              <div
                className="add-item"
                onClick={() => navigate("/admin/add-product")}
              >
                T-Shirts
              </div>

              <div
                className="add-item"
                onClick={() => navigate("/admin/add-product")}
              >
                Protein
              </div>

              <div
                className="add-item"
                onClick={() => navigate("/admin/add-product")}
              >
                Pants
              </div>
            </div>
          )}
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/admin/edit-product")}
        >
          ⇄ Edit Products
        </div>

      </div>

      {/* Slider Section */}
      <div className="banner">
        <img src={slides[currentSlide]} alt="Slide" />
      </div>

    </div>
  );
}

export default AdminDashboard;