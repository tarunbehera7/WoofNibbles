import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../assets/Cart.css';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    const totalAmount = cartItems.reduce((total, item) => {
        return total + Number(item.price.match(/\d+/g).join(''));
    }, 0);
    // item.price.match(/\d+/g).join('') → 
    //   Extracts only the no's 
    //     from the price (removes ₹ and Commas).
    // Number(...) → Converts the extracted string into a number.
    // reduce(...) → Adds up all the prices in cartItems.


    return (
        <div>
            <Navbar />
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <span>{item.name} - {item.price}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default Cart;