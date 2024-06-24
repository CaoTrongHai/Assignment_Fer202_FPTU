import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
