import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h2 className="landing-heading">Welcome to PopX</h2>
        <p className="landing-subtext">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button className="landingprimary-btn" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="landingsecondary-btn" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
