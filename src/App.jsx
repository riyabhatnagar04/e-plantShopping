import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartPage from "./Cart";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs"; 
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename="/shoppingreact">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}






