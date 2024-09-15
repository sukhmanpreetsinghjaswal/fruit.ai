import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="login-button">
        <button className="login-box">
        <Link to="/login" className="login-box">
          Login
        </Link>
        </button>
      </div>

      <h1>Fruit.AI</h1>
      <p className="tagline">"Be Healthy!"</p>

      <div className="box-container">
        <div className="box chat-box">Chat.</div>
        <div className="box translate-box">
          <i className="fas fa-language"></i> Translate
        </div>
        <div className="box faqs-box">FAQs</div>
        <div className="box about-box">About</div>
      </div>
    </div>
  );
};

export default Home;
