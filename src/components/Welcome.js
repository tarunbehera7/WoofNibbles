import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-content">
      <h1 className="welcome-title">
        <span className="highlight">Woof</span>Nibbles
      </h1>
      <p className="welcome-subtitle">Premium Dog Nutrition 🦴</p>
      <h2 className="welcome-heading">
        Welcome back, <span className="highlight-blue">furry friend!</span>
      </h2>
      <p className="welcome-description">
        Sign in to access your personalized meal plans, track your dog’s
        nutrition, and shop their favorite treats.
      </p>
      <div className="badge-container">
        <span className="badge-item">
          <span className="badge-icon">🦴</span>
          <div className="badge-text">
            Fresh Ingredients <br /> 100% natural
          </div>
        </span>
        <span className="badge-item">
          <span className="badge-icon">🍽️</span>
          <div className="badge-text">
            Custom Meals <br /> Tailored nutrition
          </div>
        </span>
      </div>
    </div>
  );
};

export default Welcome;