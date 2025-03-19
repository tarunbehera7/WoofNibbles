import React from 'react';
import '../assets/ProductDetails.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="details-container">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>

                <h2 className="features-title">Key Features:</h2>
                <ul className="features-list">
                    {product.details.map((detail, index) => (
                        <li key={index} className="feature-item">{detail}</li>
                    ))}
                </ul>

                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;