import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
import logo from "../assets/vijay-logo.png";

function AddProduct() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

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
        <div className="menu-item" onClick={() => navigate("/admin/dashboard")}>
          🏠 Home
        </div>
        <div className="menu-item">📦 All Products</div>
        <div className="menu-item active">⇄ Add Products</div>
        <div className="menu-item">⇄ Edit Products</div>
      </div>

      {/* Add Product Content */}
      <div className="add-product-container">
        <h2>Select Product Category</h2>

        <div className="category-grid">
          <div className="category-card">👟 Shoes</div>
          <div className="category-card">👕 T-Shirts</div>
          <div className="category-card">🥤 Protein</div>
          <div className="category-card">👖 Pants</div>
        </div>
      </div>

    </div>
  );
}

export default AddProduct;