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

import Categories from "./components/Categories";   // ✅ ADD THIS

/* ADMIN IMPORTS */
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
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

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />


        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* AUTH */}

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />


        {/* ✅ CATEGORY PAGE */}
        <Route path="/categories" element={<Categories />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />

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