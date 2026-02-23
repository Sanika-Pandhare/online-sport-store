import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Footer from "./components/Footer";   // ✅ added

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />   {/* ✅ added */}
    </BrowserRouter>
  );
}

export default App;