import React from 'react';
import Navbar from './Navbar';
import products from '../utils/mockData';
import ProductCard from './ProductCard';
import "../styles/ProductList.css";

function ProductList() {
    
    const firstName = localStorage.getItem("firstName") || "User";

    return (
        <div className="page-container">
            
            <Navbar username={firstName} /> 

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;