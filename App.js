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