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




import React, { useEffect, useState } from "react";
import "../assets/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  
  const [loading, setLoading] = useState(true);
  const firstName = localStorage.getItem("firstName") || "User"; 
  // Use localStorage to retrieve "firstName".

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2-sec preloader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <Navbar username={firstName} />
      {loading ? (
        <div className="preloader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="welcome-message">
          <h1>Welcome, {firstName}! 🐾</h1>
          <p>Enjoy exploring WoofNibbles!</p>
        </div>
      )}
    </div>
  );
};

export default Home;