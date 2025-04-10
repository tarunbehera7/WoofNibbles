import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import '../styles/Cart.css';
import Footer from './Footer';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showDialog, setShowDialog] = useState(false); // Added showDialog state
    const firstName = localStorage.getItem("firstName") || "User";
    const navigate = useNavigate();

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

    const handlePlaceOrder = async () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        if (!name || !email || !address || !paymentMethod) {
            alert("Please fill in all checkout details!");
            return;
        }

        const orderData = {
            customerName: name,
            totalPrice: totalAmount,
            status: "Pending",
            address: address,
            date: new Date().toISOString(),
            items: cartItems
        };

        try {
            await axios.post('http://localhost:8080/api/admin/orders', orderData);
            setShowDialog(true); // Show dialog on success
            setTimeout(() => {
                setShowDialog(false); // Hide dialog after 3 seconds
                setCartItems([]); // Clear cart
                localStorage.removeItem("cart"); // Clear local storage
                navigate('/orders'); // Redirect to Orders page
            }, 3000);
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    return (
        <>
         <Navbar username={firstName} />
        <div>
           
            <div className="cart-page">
                {/* Left Section - Shopping Cart */}
                <div className="cart-section">
                    <h2 className="cart-title">Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        <ul className="cart-list">
                            {cartItems.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <span className="cart-item-name">{item.name} - {item.price}</span>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3 className="cart-total">Total: ₹{totalAmount.toLocaleString()}</h3>
                </div>

                {/* Right Section- Checkout */}
                <div className="checkout-section">
                    <h2 className="checkout-title">Checkout</h2>
                    <h3 className="checkout-total">Total Price: ₹{totalAmount.toFixed(2)}</h3>

                    <label className="checkout-label">Name:</label>
                    <input 
                        type="text" 
                        className="checkout-input" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name" 
                    />

                    <label className="checkout-label">Email:</label>
                    <input 
                        type="email" 
                        className="checkout-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" 
                    />

                    <label className="checkout-label">Address:</label>
                    <textarea 
                        className="checkout-textarea" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                    ></textarea>

                    <label className="checkout-label">Payment Method:</label>
                    <select 
                        className="checkout-select"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="">Select a payment method</option>
                        <option value="Credit/Debit Card">Credit/Debit Card</option>
                        <option value="UPI">UPI</option>
                        <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>

                    <button className="checkout-btn" onClick={handlePlaceOrder}>Place Order</button>
                </div>
            </div>

            {/* Success Dialog */}
            {showDialog && (
                <div className="success-dialog">
                    Order placed successfully! Redirecting to Orders...
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default Cart;