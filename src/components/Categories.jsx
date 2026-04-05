import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import cricket from "../assets/products/cricket.png";
import team from "../assets/products/team.png";
import athletics from "../assets/products/athletics.png";
import boxing from "../assets/products/boxing.png";
import fitness from "../assets/products/fitness.png";
import training from "../assets/products/training.png";
import indoor from "../assets/products/indoor.png";
import accessories from "../assets/products/accessories.png";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    { name: "Cricket", image: cricket },
    { name: "Team sports", image: team },
    { name: "Athletics", image: athletics },
    { name: "Boxing", image: boxing },
    { name: "Fitness", image: fitness },
    { name: "Training", image: training },
    { name: "Indoor Games", image: indoor },
    { name: "Accessories", image: accessories },
  ];

  return (
    <div className="categories-page">

      <h1 className="categories-title">Shop by Category</h1>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() =>
              navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`)
            }
          >
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