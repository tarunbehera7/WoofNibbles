import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import '../styles/Cart.css';
import Footer from './Footer';

const Cart = () => {
    console.log("Cart component loaded"); // Test if component loads

    const [cartItems, setCartItems] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showDialog, setShowDialog] = useState(false);
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
            setShowDialog(true);
            setTimeout(() => {
                setShowDialog(false);
                setCartItems([]);
                localStorage.removeItem("cart");
                navigate('/orders');
            }, 3000);
        }
        catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    const handlePayment = async () => {
        console.log("=== PAYMENT DEBUG START ===");
        
        // Validation checks
        if (cartItems.length === 0) {
            console.log("❌ Cart is empty");
            alert("Your cart is empty!");
            return;
        }
        if (!name || !email || !address || !paymentMethod) {
            console.log("❌ Missing checkout details:", { name, email, address, paymentMethod });
            alert("Please fill in all checkout details!");
            return;
        }

        console.log("✅ Validation passed");

        try {
            const amount = totalAmount * 100; // Razorpay accepts paise
            console.log("💰 Amount in paise:", amount);

            // Step 1: Create order in backend
            console.log("📡 Making API call to backend...");
            const response = await axios.post('http://localhost:8080/api/payment/create-order', { amount });
            console.log("✅ Backend response received:", response);
            
            if (!response.data) {
                throw new Error("No data received from backend");
            }

            const data = response.data;
            console.log("📦 Razorpay Order data:", data);

            const options = {
                key: "rzp_test_pGJiYviIJtVNJI",  // test key
                amount: data.amount,
                currency: data.currency,
                name: "WoofNibbles",
                description: "Pet Products Payment",
                order_id: data.id,
                handler: function (response) {
                    console.log("🎉 Payment successful:", response);
                    alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                    handlePlaceOrder();
                },
                prefill: { name, email, contact: "9999999999" },
                theme: { color: "#F37254" }
            };

            console.log("⚙️ Razorpay options:", options);

            // Check if Razorpay is loaded
            if (typeof window.Razorpay === 'undefined') {
                console.log("❌ Razorpay SDK not loaded");
                alert("Razorpay SDK not loaded. Please refresh the page and try again.");
                return;
            }

            console.log("✅ Razorpay SDK is loaded");
            console.log("🚀 Opening Razorpay payment modal...");
            const rzp = new window.Razorpay(options);
            console.log("🔧 Razorpay instance created:", rzp);
            rzp.open();
            console.log("✅ Razorpay modal opened");
        } 
        catch (error) {
            console.error("💥 Error in payment process:", error);
            console.error("📋 Error details:", error.response?.data || error.message);
            console.error("🌐 Network error:", error.response?.status, error.response?.statusText);
            alert("Failed to initiate payment. Please check console for details.");
        }
        
        console.log("=== PAYMENT DEBUG END ===");
    };

    return (
        <>
            <Navbar username={firstName} />
            <div>
                <div className="cart-page">
                    {/* Left Section - Shopping Cart */}
                    <div className="cart-section">
                        <h2 className="cart-title">Shopping Cart</h2>
                        {cartItems.length === 0
                            ? (
                                <p className="cart-empty">Your cart is empty.</p>
                            )
                            : (
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

                        <button className="checkout-btn" onClick={handlePayment}>Place Order</button>
                        <button onClick={() => alert("Test button works!")} style={{marginTop: '10px', padding: '10px'}}>Test Button</button>
                    </div>
                </div>

                {/* Success Dialog */}
                {showDialog && (
                    <div className="success-dialog">
                        Order placed successfully! Redirecting to Orders...
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;