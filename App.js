import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./src/components/AuthLayout";
import Home from "./src/components/Home";
import ProductDetails from "./src/components/ProductDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* element is component */}
        <Route path="/" element={<AuthLayout />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;