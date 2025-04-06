import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/admin">Admin</a></li>
                    </ul>
                </nav>
                <div className="footer-info">
                    <p>&copy; 2025 <span className="woof">Woof</span><span className="nibbles">Nibbles</span>. All rights reserved.</p>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-facebook bx-sm'></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-twitter bx-sm'></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-linkedin bx-sm'></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-instagram bx-sm"></i>
                        </a> 
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;