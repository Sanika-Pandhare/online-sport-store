import { useState } from "react";
import menuData from "./menuData";

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = Object.keys(menuData);

  // Group products by subCategory for mega menu columns
  const groupBySubCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.subCategory]) {
        acc[product.subCategory] = [];
      }
      acc[product.subCategory].push(product.name);
      return acc;
    }, {});
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseLeave={() => setActiveCategory(null)}
    >
      {/* TOP NAV */}
      <nav style={styles.nav}>
        {categories.map((cat) => (
          <div
            key={cat}
            onMouseEnter={() => setActiveCategory(cat)}
            style={{
              ...styles.navItem,
              borderBottom:
                activeCategory === cat
                  ? "2px solid black"
                  : "2px solid transparent"
            }}
          >
            {cat}
          </div>
        ))}
      </nav>

      {/* DROPDOWN */}
      {activeCategory && menuData[activeCategory] && (
        <div style={styles.dropdown}>
          <div style={styles.dropdownContainer}>
            {Object.entries(
              groupBySubCategory(menuData[activeCategory])
            ).map(([subCat, items]) => (
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
    fontSize: "16px",
    fontWeight: "500",
    position: "relative",
    zIndex: 100
  },

  navItem: {
    cursor: "pointer",
    paddingBottom: "6px",
    transition: "0.2s ease",
  },

  dropdown: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100vw",
    backgroundColor: "#f5f5f5",
    padding: "50px 120px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    zIndex: 1000
  },

  dropdownContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto"
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
    cursor: "pointer",
    transition: "0.2s",
  }
};

export default MegaMenu;
