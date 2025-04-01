import React from 'react';
import Navbar from './Navbar';
import products from '../utils/mockData';
import ProductCard from './ProductCard';
import "../styles/ProductList.css";
import Footer from './Footer';

function ProductList() {
    
    const firstName = localStorage.getItem("firstName") || "User";

    return (
        <>
        <Navbar username={firstName} /> 
        <div className="page-container">
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} 
                        product={product} />
                ))}
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default ProductList;