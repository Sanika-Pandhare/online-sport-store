import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";

import Header from "./components/Header";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function Layout() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      )}

      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;