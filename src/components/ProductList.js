import React from 'react';
// import '../assets/ProductDetails.css';
import Navbar from './Navbar';
import products from '../utils/mockData';
import ProductCard from './ProductCard';
import "../assets/ProductList.css";

function ProductList() {
    const firstName = localStorage.getItem("firstName") || "User";

    return (
        <div className="page-container">
            <Navbar username={firstName} /> {/* Moved outside for proper alignment */}

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;