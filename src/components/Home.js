// import React, { useEffect, useState } from "react";
// import "../assets/Home.css";
// import Navbar from "./Navbar";

// const Home = () => {

//   const [loading, setLoading] = useState(true);
//   const username = localStorage.getItem("username");

//   useEffect(() => {
//     const timer = setTimeout(() =>
//       setLoading(false)
//       , 2000); // 2-sec preloader
//     return () => clearTimeout(timer);
//   }, []);


//   return (
//     <div className="home-container">

//       <Navbar username={username} />

//       {loading ? (
//         <div className="preloader">
//           <div className="spinner"></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="welcome-message">
//           {/* <h1>Welcome, {username || "User"}! 🐾</h1> */}
//           <h1>Welcome, {response?.data?.name?.split(' ')[0] || "User"}!</h1>
//           <p>Enjoy exploring WoofNibbles!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




// import axios from "axios"; // Import axios
// import { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/auth/userdata"); 
//         setUserData(response.data);  // Assuming "response.data" contains 
//         // this structure  { name: "John Doe" } 
//       } 
//       catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="home-container">
//       <Navbar username={userData?.name?.split(' ')[0] || "User"} />

//       {loading ? (
//         <div className="preloader">
//           <div className="spinner"></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="welcome-message">
//           <h1>Welcome, {userData?.name?.split(' ')[0] || "User"}!</h1>
//           <p>Enjoy exploring WoofNibbles!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from "react";
// import "../assets/Home.css";
// import Navbar from "./Navbar";

// const Home = () => {

//   const [loading, setLoading] = useState(true);
//   const firstName = localStorage.getItem("firstName") || "User"; 
//   // Use localStorage to retrieve "firstName".

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); // 2-sec preloader
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="home-container">
//       <Navbar username={firstName} />
//       {loading ? (
//         <div className="preloader">
//           <div className="spinner"></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="welcome-message">
//           <h1>Welcome, {firstName}! 🐾</h1>
//           <p>Enjoy exploring WoofNibbles!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import dog from "../assets/dog.png";
import dogFood from "../assets/dog_food.jpeg";
import chewToy from "../assets/chew_toys.jpeg";
import poopBags from "../assets/poop_bags.jpeg";
import Footer from "./Footer";
import "../styles/Footer.css";


const Home = () => {

  const [loading, setLoading] = useState(true);
  const firstName = localStorage.getItem("firstName") || "User";
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  const topProducts = [
    { id: 1, name: "Premium Dog Food", price: "₹ 1,499", img: dogFood },
    { id: 2, name: "Chew Toy", price: "₹ 599", img: chewToy },
    { id: 3, name: "Eco friendly Poop Bags", price: "₹ 349", img: poopBags },
  ];

  // Fn to scroll to the contact-section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Navbar username={firstName} />

      <div className="home-container">
        {loading ? (
          <div className="preloader">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="content-wrapper">
              <div className="left-section">
                <div className="welcome-message">
                  <h1>Welcome, {firstName}! 🐾</h1>
                  <p>Enjoy exploring WoofNibbles!</p>
                </div>
                <div className="promo-section">
                  <h2>Find the Best Food For Your Pet</h2>
                  <div className="promo-text">
                    <p>
                      Explore high-quality pet food, fun toys, and essential accessories—all in one place.
                    </p>
                    <div className="promo-buttons">
                      <button className="order-button">Order Now</button>
                      <button className="contact-button" onClick={scrollToContact}>Contact Us</button>
                    </div>
                  </div>
                </div>
                <div className="footer-info">
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
              <div className="right-section">
                <img src={dog} alt="Happy Pug with Pet Food" className="promo-image" />
              </div>
            </div>

            {/* Top-Products Section */}
            <div className="top-products-section">
              <h2>Top Products</h2>
              <div className="products-grid">
                {topProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="buy-button">Buy Now</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section" ref={contactRef}>
              <h2>Contact Us</h2>
              {/* <form className="contact-form"  action="https://formspree.io/f/xqapdrbo" method="POST"> */}
              <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" className="submit-button1">Submit</button>
              </form>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;