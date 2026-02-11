import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import CategoryPage from "./components/CategoryPage";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HeaderHero from "./components/HeaderHero";
import Footer from "./components/Footer";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
       <Footer />
    </BrowserRouter>

    
  );
}

export default App;
