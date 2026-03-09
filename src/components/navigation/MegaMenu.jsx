import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuData from "./menuData";

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    "Home",
    "Shop",
    "Team Sports",
    "Athletics",
    "Boxing",
    "Fitness",
    "Indoor Games",
    "Custom Printing"
  ];

  const groupBySubCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.subCategory]) {
        acc[product.subCategory] = [];
      }
      acc[product.subCategory].push(product.name);
      return acc;
    }, {});
  };

  const groupedData =
    activeCategory && menuData[activeCategory]
      ? groupBySubCategory(menuData[activeCategory])
      : null;

  const columnCount = groupedData
    ? Object.keys(groupedData).length
    : 0;

  return (
    <div
      style={{ position: "relative" }}
      onMouseLeave={() => setActiveCategory(null)}
    >
      {/* 🔹 TOP NAV */}
      <nav style={styles.nav}>
        {categories.map((cat) => (
          <div
            key={cat}
            style={{
              ...styles.navItem,
              borderBottom:
                activeCategory === cat
                  ? "2px solid orange"
                  : "2px solid transparent"
            }}
            onMouseEnter={() => {
              if (menuData[cat]) {
                setActiveCategory(cat);
              } else {
                setActiveCategory(null);
              }
            }}
            onClick={() => {
              if (cat === "Home") navigate("/");
            }}
          >
            {cat}
          </div>
        ))}
      </nav>

      {/* 🔹 DROPDOWN */}
      {groupedData && (
        <div style={styles.dropdown}>
          <div
            style={{
              ...styles.dropdownContainer,
              gridTemplateColumns: `repeat(${columnCount}, 1fr)`
            }}
          >
            {Object.entries(groupedData).map(([subCat, items]) => (
              <div key={subCat} style={styles.column}>
                <h4 style={styles.columnTitle}>{subCat}</h4>
                {items.map((item, index) => (
                  <p key={index} style={styles.menuItem}>
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

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "500",
    position: "relative",
    zIndex: 100
  },

  navItem: {
    cursor: "pointer",
    paddingBottom: "6px",
    fontSize: "16px",
    transition: "all 0.2s ease"
  },

  dropdown: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: "50px 0",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    zIndex: 1000
  },

  dropdownContainer: {
    display: "grid",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto",   // ✅ THIS centers content
    textAlign: "left"
  },

  column: {
    display: "flex",
    flexDirection: "column"
  },

  columnTitle: {
    fontWeight: "600",
    marginBottom: "18px",
    fontSize: "16px",
    color: "#333"
  },

  menuItem: {
    marginBottom: "12px",
    color: "#555",
    fontSize: "14px",
    cursor: "pointer"
  }
};

export default MegaMenu;