import React from "react";
import "../assets/Navbar.css";

const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="logo">🐾 WoofNibbles</div>
      <div className="user-info">
        Welcome, <span className="username">{username || "User"}!</span>
      </div>
    </nav>
  );
};

export default Navbar;