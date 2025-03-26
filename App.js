import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./src/components/AuthLayout";
import Home from "./src/components/Home";
import ProductDetails from "./src/components/ProductDetails";
import ProductList from "./src/components/ProductList";
import Cart from "./src/components/Cart";
import CartProvider from "./src/components/CartContext";
import Admin from "./src/components/Admin";
import Order from "./src/components/Order";


const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;