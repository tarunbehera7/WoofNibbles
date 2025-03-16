import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {

  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (activeTab === "login") {
        const response = await axios.post("http://localhost:8080/api/auth/login", {
          email: loginEmail,
          password: loginPassword,
        });
        setSuccess("Login successful!");
        console.log("Login response:", response.data);
        // Store token (e.g., in localStorage) and redirect
        localStorage.setItem("token", response.data.token);
        // Redirect to product listing page (Team Member 2's task)
        window.location.href = "/products"; // Replace with React Router navigation
      } 
      else {
        const response = await axios.post("http://localhost:8080/api/auth/register", {
          name: signupName,
          email: signupEmail,
          password: signupPassword,
        });
        setSuccess("Sign up successful! Please log in.");
        setActiveTab("login");
        setSignupName("");
        setSignupEmail("");
        setSignupPassword("");
        console.log("Sign up response:", response.data);
      }
    } 
    catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="login-form-container">

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      <ul className="tab-list">
        <li className="tab-item">
          <a
            className={`tab-link ${activeTab === "login" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("login")}
          >
            Login
          </a>
        </li>
        <li className="tab-item">
          <a
            className={`tab-link ${activeTab === "signup" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </a>
        </li>
      </ul>

      <form onSubmit= {handleSubmit}>
        {activeTab === "login" ? (
          <>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                  value= {loginEmail}
                  onChange= { (e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  value= {loginPassword}
                  onChange= { (e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="forgot-password">
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="submit-button">
              🐾 Login
            </button>
          </>
        ) : (
          <>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full Name"
                  value={signupName}
                  onChange={ (e) => setSignupName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                  value={signupEmail}
                  onChange={ (e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={ (e) => setSignupPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              🐾 Sign Up
            </button>
          </>
        )}

        <p className="form-footer">
          {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
          <a
            href="#"
            className="form-link"
            onClick= { (e) => {
              e.preventDefault();
              setActiveTab(activeTab === "login" ? "signup" : "login");
            }}
          >
            {activeTab === "login" ? "Sign up" : "Login"}
          </a>
        </p>

      </form>
    </div>
  );
};

export default LoginForm;