import React from "react";
import "./Categories.css";

import tshirt from "../assets/products/tshirt.jpg";
import shorts from "../assets/products/shorts.jpg";
import shoe from "../assets/products/shoe.jpg";
import jogger from "../assets/products/jogger.jpg";
import trophy from "../assets/products/trophy.jpg";
import printshirt from "../assets/products/printshirt.jpg";

function Categories() {
  const categories = [
    { name: "T-Shirts", image: tshirt },
    { name: "Shorts", image: shorts },
    { name: "Shoes", image: shoe },
    { name: "Joggers", image: jogger },
    { name: "Awards & Trophies", image: trophy },
    { name: "Custom Printing", image: printshirt },
  ];

  return (
    <div className="categories-page">


      <h1 className="categories-title">Shop by Category</h1>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <h2>{category.name}</h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Categories;

export default Categories;

