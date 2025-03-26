// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import '../styles/Cart.css';

// const Cart = () => {

//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCartItems(storedCart);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cartItems));
//     }, [cartItems]);

//     const removeFromCart = (id) => {
//         const updatedCart = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCart);
//     };

//     const totalAmount = cartItems.reduce((total, item) => {
//         return total + Number(item.price.match(/\d+/g).join(''));
//     }, 0);
//     ////
//     // item.price.match(/\d+/g).join('') → 
//     //   Extracts only the no's 
//     //     from the price (removes ₹ and Commas).
//     // Number(...) → Converts the extracted string into a number.
//     // reduce(...) → Adds up all the prices in cartItems.


//     return (
//         <div>
//             <Navbar />
//             <div className="cart-container">
//                 <h2>Shopping Cart</h2>
//                 {cartItems.length === 0 ? (
//                     <p>Your cart is empty.</p>
//                 ) : (
//                     <ul>
//                         {cartItems.map((item) => (
//                             <li key={item.id}>
//                                 <span>{item.name} - {item.price}</span>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//                 <h3>Total: ₹{totalAmount.toLocaleString()}</h3>
//             </div>
//         </div>
//     );
// };

// export default Cart;




import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const firstName = localStorage.getItem("firstName") || "User";

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

    return (
        <div>
            <Navbar username={firstName}/>
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

                {/* Right Section - Checkout */}
                <div className="checkout-section">
                    <h2 className="checkout-title">Checkout</h2>
                    <h3 className="checkout-total">Total Price: ₹{totalAmount.toFixed(2)}</h3>

                    <label className="checkout-label">Name:</label>
                    <input type="text" className="checkout-input" placeholder="Enter your name" />

                    <label className="checkout-label">Email:</label>
                    <input type="email" className="checkout-input" placeholder="Enter your email" />

                    <label className="checkout-label">Address:</label>
                    <textarea className="checkout-textarea" placeholder="Enter your address"></textarea>

                    <label className="checkout-label">Payment Method:</label>
                    <select className="checkout-select">
                        <option>Select a payment method</option>
                        <option>Credit/Debit Card</option>
                        <option>UPI</option>
                        <option>Cash on Delivery</option>
                    </select>

                    <button className="checkout-btn">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;