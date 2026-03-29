import { useParams } from "react-router-dom";

// ✅ Import images
import tshirt from "../assets/products/tshirt.jpg";
import shorts from "../assets/products/shorts.jpg";
import shoe from "../assets/products/shoe.jpg";
import jogger from "../assets/products/jogger.jpg";
import trophy from "../assets/products/trophy.jpg";
import printshirt from "../assets/products/printshirt.jpg";
import pant from "../assets/products/pant1.jpg";
import boyshort from "../assets/products/boyshort.jpg";

const CategoryPage = () => {
  const { name } = useParams();

  // ✅ Category-wise product data (URL-friendly keys)
  const data = {
    shop: [
      { name: "T-Shirts", image: tshirt },
      { name: "Shorts", image: shorts },
      { name: "Shoes", image: shoe },
      { name: "Joggers", image: jogger },
    ],

    "team-sports": [
      { name: "Cricket Bat", image: boyshort },
      { name: "Football", image: trophy },
    ],

    athletics: [
      { name: "Track Pants", image: pant },
      { name: "Running Shoes", image: shoe },
    ],

    boxing: [
      { name: "Boxing Gloves", image: boyshort },
      { name: "Training Wear", image: jogger },
    ],

    fitness: [
      { name: "Workout T-Shirts", image: tshirt },
      { name: "Joggers", image: jogger },
    ],

    "indoor-games": [
      { name: "Carrom Board", image: trophy },
      { name: "Chess Set", image: trophy },
    ],

    "custom-printing": [
      { name: "Printed T-Shirts", image: printshirt },
    ],
  };

  // ✅ Get products based on URL
  const products = data[name];

  return (
    <div style={{ padding: "50px 8%" }}>
      
      {/* ✅ Page Title */}
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "40px",
          textTransform: "capitalize",
          color: "#333",
        }}
      >
        {name ? name.replace("-", " ") : "Products"}
      </h1>

      {/* ✅ If no products found */}
      {!products && (
        <p style={{ fontSize: "18px", color: "gray" }}>
          No products found for this category.
        </p>
      )}

      {/* ✅ Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {products &&
          products.map((item, i) => (
            <div
              key={i}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                background: "#f4f6f9",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {/* ✅ Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              {/* ✅ Product Name */}
              <div
                style={{
                  padding: "15px",
                  textAlign: "center",
                  background: "#fff",
                }}
              >
                <h2 style={{ fontSize: "18px", margin: 0 }}>
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;