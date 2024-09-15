import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>By signing in you are agreeing to <br/><br/>our <a href="#">Terms and privacy policy</a></p>
      <div className="tabs">
        <a href="#" className="active">Login</a>
        <a href="#">Register</a>
      </div>
      <br/>
      <form onSubmit={handleLogin} className="login-form">
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <div className="form-options">
            <br/>
          <label className='label-box'>
            <input type="checkbox" className='check-box'/> Remember Me
            
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      
      <div className="social-login">
        
        <p>or connect with</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
