import React from "react";

import LoginForm from "./src/components/LoginForm";
import Welcome from "./src/components/Welcome";

const App = () => {
  return (
    <div className="app-container">
      {/* Background circles */}
      <div className="circle-blue-1"></div>
      <div className="circle-blue-2"></div>
      
      <div className="main-layout">
        {/* Welcome Section (Left Side) */}
        <div className="welcome-section">
          <Welcome />
        </div>
        {/* Login Form (Right Side) */}
        <div className="login-section">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginForm from "./LoginForm";
// import WelcomeSection from "./WelcomeSection";
// import Home from "./Home";

// // Placeholder components for other team members' pages
// const Cart = () => <h2>Cart (Team Member 3)</h2>;
// const Orders = () => <h2>Orders (Team Member 4)</h2>;
// const AdminDashboard = () => <h2>Admin Dashboard (Team Member 5)</h2>;
// const UserProfile = () => <h2>User Profile (Team Member 6)</h2>;

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Login Page (Welcome + LoginForm) */}
//           <Route
//             path="/"
//             element={
//               <div className="login-page">
//                 <WelcomeSection />
//                 <LoginForm />
//               </div>
//             }
//           />
//           {/* Home Page (after login/signup) */}
//           <Route path="/home" element={<Home />} />
//           {/* Other Routes for Team Members */}
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
//
// export default App;
