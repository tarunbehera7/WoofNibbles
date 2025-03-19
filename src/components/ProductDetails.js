import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/ProductDetails.css';
import Navbar from './Navbar';

function ProductDetails() {
  
  const { id } = useParams();
  const firstName = localStorage.getItem("firstName") || "User"; 

  const product = {
    id: parseInt(id),
    name: "Premium Dry Dog Food",
    price: "₹1,499",
    description: "High-quality dry food for adult dogs, made with premium ingredients to ensure optimal nutrition for your furry friend.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80",
    details: [
      "Made with real chicken as the first ingredient",
      "Contains essential vitamins and minerals",
      "No artificial preservatives or flavors",
      "Supports healthy digestion",
      "Promotes strong muscles and bones"
    ]
  };

  return (
    <div className="container">
        <Navbar username={firstName} />
      <div className="product-container">
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
    </div>
  );
}

export default ProductDetails;