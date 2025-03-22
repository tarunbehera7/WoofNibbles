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




import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import dog from "../assets/dog.png";
import dogFood from "../assets/dog_food.jpeg";
import chewToy from "../assets/chew_toys.jpeg";
import poopBags from "../assets/poop_bags.jpeg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const firstName = localStorage.getItem("firstName") || "User";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  
  const topProducts = [
    { id: 1, name: "Premium Dog Food", price: "$25", img: dogFood },
    { id: 2, name: "Chew Toy", price: "$10", img: chewToy },
    { id: 3, name: "Cat Treats", price: "$12", img: poopBags },
  ];



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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magnis nibh tellus vestibulum vestibulum. Turpis ac.
                    </p>
                    <div className="promo-buttons">
                      <button className="order-button">Order Now</button>
                      <button className="contact-button">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section">
                <img src={dog} alt="Happy Pug with Pet Food" className="promo-image" />
              </div>
            </div>

            {/* Top Products Section */}
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
          </>
        )}
      </div>
    </>
  );
};

export default Home;