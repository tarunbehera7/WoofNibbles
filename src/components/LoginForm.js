import React, { useEffect, useState } from "react";
import "../../styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showDialog && success === "Login successful!") { 
      // Only redirect on login success
      const timer = setTimeout(() => {
        setShowDialog(false);
        navigate("/home");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showDialog, success, navigate]);


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
        localStorage.setItem("userEmail", loginEmail);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("firstName", response.data.firstName); // Store firstName
        setShowDialog(true);
      } 
      else {
        const response = await axios.post("http://localhost:8080/api/auth/register", {
          firstName: signupFirstName,
          lastName: signupLastName,
          email: signupEmail,
          password: signupPassword,
        });
        setSuccess("Sign up successful! Please log in.");
        setActiveTab("login");
        setSignupFirstName("");
        setSignupLastName("");
        setSignupEmail("");
        setSignupPassword("");
        setShowDialog(true); // Show dialog, but no redirect
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      console.error(err);
    }
  };

  // Rest of the JSX remains unchanged
  return (
    <>
      {showDialog && (
        <div className="success-dialog">
          {success}
        </div>
      )}
      <div className="login-form-container">
        {error && <p className="error-message">{error}</p>}
        <ul className="tab-list">
          <li className="tab-item">
            <a
              className={`tab-link ${activeTab === "login" ? "active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("login");
              }}
            >
              Login
            </a>
          </li>
          <li className="tab-item">
            <a
              className={`tab-link ${activeTab === "signup" ? "active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("signup");
              }}
            >
              Sign Up
            </a>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          {activeTab === "login" ? (
            <>
              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email Address"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
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
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
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
                    placeholder="First Name"
                    value={signupFirstName}
                    onChange={(e) => setSignupFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Last Name"
                    value={signupLastName}
                    onChange={(e) => setSignupLastName(e.target.value)}
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
                    onChange={(e) => setSignupEmail(e.target.value)}
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
                    onChange={(e) => setSignupPassword(e.target.value)}
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
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(activeTab === "login" ? "signup" : "login");
              }}
            >
              {activeTab === "login" ? "Sign up" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;