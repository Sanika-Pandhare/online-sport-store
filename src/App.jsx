import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultsPage from "./pages/SearchResultsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactPage from "./pages/ContactPage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
//import CategoryPage from "./components/CategoryPage";

<div className="bg-red-500 text-white p-10 text-center">
  Tailwind Test
</div>

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🔹 HEADER */}
      <Header />

      {/* 🔹 ROUTES */}
      <Routes>

        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* AUTH */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />

        {/* ✅ CATEGORY PAGE (IMPROVED ROUTE) */}
        
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* OPTIONAL FALLBACK */}
        <Route path="*" element={<Home />} />
        <Route path="/search" element={<SearchResultsPage />} />

      </Routes>

      {/* 🔹 FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;