import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";   // ✅ Add this
import Cart from "./pages/Cart";              // ✅ Add this

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />   {/* ✅ Added */}
        <Route path="/cart" element={<Cart />} />         {/* ✅ Added */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;