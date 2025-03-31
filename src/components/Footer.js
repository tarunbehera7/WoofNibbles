import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="woof">Woof</span><span className="nibbles">Nibbles</span>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="footer-info">
          <p>&copy; 2025 WoofNibbles. All rights reserved.</p>
          <p>Follow us on social media: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;