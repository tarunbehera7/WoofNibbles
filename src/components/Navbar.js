// import React from "react";
// import "../assets/Navbar.css";
// import LogoutIcon from "../Icons/logout-svg.svg";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ username }) => {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear all session-related local storage items
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("token");
//     localStorage.removeItem("firstName");
//     // Navigate to login page
//     navigate("/login");
//   };
//   return (
//     <nav className="navbar">
//       <div className="logo">🐾 WoofNibbles</div>
//       <div className="navbar-right">
//         <div className="user-info">
//           <span className="username">{username || "User"}</span>
//         </div>
//         <div className="logout-button" onClick={handleLogout}>
//           <img src={LogoutIcon} alt="Logout" className="logout-icon" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import logo from "../logo/logo2.png";
// import LogoutIcon from "../Icons/logout-svg.svg";
// import "../assets/Navbar.css";

// const Navbar = ({ username }) => {

//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [isOpen]);


//   const toggleHamburger = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("token");
//     localStorage.removeItem("firstName");
//     navigate("/login");
//   };



//   return (
//     <header>
//       <div className="navbar">
//         {/* Logo */}
//         {/* <div className="logo-container">
//           <a href="/">
//             <img className="logo" src={logo} alt="Logo" />
//           </a>
//         </div> */}
//         <div className="logo">🐾 WoofNibbles</div>

//         {/* Hamburger Menu */}
//         <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleHamburger}>
//           {isOpen ? "✖" : "☰"}
//         </div>



//         {/* User Info and Logout */}
//         <div className="navbar-right">
//           {/* Navigation Links */}
//           <nav className={`nav-items ${isOpen ? "open" : ""}`}>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/cart">Cart</a></li>
//               <li><a href="/admin">Admin</a></li>
//               <li><a href="/user">User</a></li>
//               <li><a href="/products">Products</a></li>
//               <li><a href="/orders">Order</a></li>
//             </ul>
//           </nav>
//           <div className="user-info">
//             <span className="username">{username || "User"}</span>
//           </div>
//           <div className="logout-button" onClick={handleLogout}>
//             <img src={LogoutIcon} alt="Logout" className="logout-icon" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../Icons/logout-svg.svg";
import "../styles/Navbar.css";

const Navbar = ({ username }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);


  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    navigate("/login");
  };

  
  return (
    <header>
      <div className="navbar">

        <div className="logo">
        🐾 <span className="woof">Woof</span><span className="nibbles">Nibbles</span>
        </div>

        {/* Navigation Links & User Info */}
        <div className="navbar-right">

          {/* Hamburger Menu */}
          <div className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleHamburger}
          >
            {isOpen ? "✖" : "☰"}
          </div>

          <nav className={`nav-items ${isOpen ? "open" : ""}`}>
            <ul>
              <li><a href="/home">Home</a></li>
              
              <li><a href="/admin">Admin</a></li>
              {/* <li><a href="/user">User</a></li> */}
              <li><a href="/products">Products</a></li>
              <li><a href="/orders">Order</a></li>
              <li><a href="/cart">Cart</a></li>
              {/* Logout button move inside nav-items for mobile */}
              <li className="mobile-logout">
                <div className="logout-button" onClick={handleLogout}>
                  <img src={LogoutIcon} alt="Logout" className="logout-icon" />
                  <a>Logout</a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="user-info">
            <span className="username">{username || "User"}</span>
          </div>

          {/* Logout button for desktop */}
          <div className="logout-button desktop-logout" onClick={handleLogout}>
            <img src={LogoutIcon} alt="Logout" className="logout-icon" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;