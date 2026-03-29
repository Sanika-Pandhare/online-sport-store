import { useLocation } from "react-router-dom";
import "./CategoryPage.css"; // reuse same styling

const SearchResultsPage = () => {

  const query = new URLSearchParams(useLocation().search).get("q");

  // 🔥 SAME TEMP PRODUCTS (later from backend)
  const products = [
    { id: 1, name: "Cricket Bat", category: "Cricket", price: 1500, rating: 4 },
    { id: 2, name: "Football", category: "Team Sports", price: 800, rating: 3 },
    { id: 3, name: "Tennis Racket", category: "Indoor Games", price: 2000, rating: 5 },
    { id: 4, name: "Gym Dumbbells", category: "Fitness", price: 1200, rating: 4 },
  ];

  // 🔥 SEARCH FILTER
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="category-page">

      <div className="category-header">
        <h1>Search Results for "{query}" ({filteredProducts.length})</h1>
      </div>

      <div className="products">

        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">

            <div className="image-box"></div>

            <div className="product-rating">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <span>₹{item.price}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SearchResultsPage;