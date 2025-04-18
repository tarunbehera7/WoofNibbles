import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        ////
        addToCart(product); // Add product to cart
        // Show success alert
        Swal.fire({
            title: "Success!",
            text: `${product.name} has been added to your cart.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500 // Auto close after 1.5 seconds
        });
    };

    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.image}  className="product-image" 
                    alt={product.name}/>
            </div>
            <div className="details-container">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <ul className="features-list">
                    <li className="feature-item">Rating: {product.rating} ⭐</li>
                    <li className="feature-item">In Stock: {product.stock || 'Yes'}</li>
                </ul>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;