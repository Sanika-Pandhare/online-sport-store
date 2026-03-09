import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

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

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />

        {/* ✅ CATEGORY PAGE */}
        <Route path="/categories" element={<Categories />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;