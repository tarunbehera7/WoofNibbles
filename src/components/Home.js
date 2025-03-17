// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   // Check if a user is logged in 
//   //    By checking "localStorage"..
//   const isLoggedIn = !!localStorage.getItem("user");

//   return (
//     <div className="home-container">
//       <h1>Welcome to WoofNibbles</h1>
//       <p className="home-subtitle">Premium Dog Nutrition 🐾</p>
      
//       {/* Hero Section with Call-to-Action */}
//       <div className="home-hero">
//         <p className="home-description">
//           Discover the best nutrition for your furry friend! Sign in to explore personalized meal plans, track your dog's health, and shop their favorite treats.
//         </p>
//         <div className="home-actions">
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login" className="home-button">Login</Link>
//               <Link to="/register" className="home-button">Register</Link>
//             </>
//           ) : (
//             <Link to="/products" className="home-button">Shop Now</Link>
//           )}
//         </div>
//       </div>

//       {/* Placeholder for Product Previews */}
//       <div className="product-preview">
//         <h3>Featured Products</h3>
//         <p>(Product listings will be added by Saurav)</p>
//         {/* Future integration point for ProductListing component */}
//       </div>
//     </div>
//   );
// };

// export default Home;









import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>
            <span className="highlight">Woof</span>Nibbles 🐾
          </h2>
        </div>
        <div className="navbar-links">
          <a href="/home">Home</a>
          <a href="/cart">Cart</a>
          <a href="/orders">Orders</a>
          <a href="/profile">Profile</a>
          {user && (
            <div className="user-info">
              <span>Welcome, {user.name}!</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1>Welcome to WoofNibbles 🐾</h1>
        <p>Your one-stop shop for premium dog nutrition!</p>
        <div className="product-listing">
          <h2>Our Products</h2>
          <p>Product listing will be displayed here (Work in progress by Team Member 2).</p>
        </div>
      </div>
    </div>
  );
};

export default Home;