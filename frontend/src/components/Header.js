import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import cpmsLogo from '../assets/cpms.png'; // Corrected the path

const Header = () => {
  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #0d6efd;
            padding: 10px 20px;
            color: white;
            font-family: Arial, sans-serif;
          }
          
          .header-left {
            display: flex;
            align-items: center;
          }
          
          .header-left img {
            height: 50px;
            width: 50px;
            margin-right: 15px;
          }
          
          .header-left h1 {
            font-size: 20px;
            margin: 0;
          }
          
          .header-right {
            display: flex;
            gap: 10px;
          }

          .header-right a {
            background-color: white;
            color: #0d6efd;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 5px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .header-right a:hover {
            background-color: #e6e6e6;
          }
        `}
      </style>

      <div className="header">
        {/* Left Side: Logo + College Name */}
        <div className="header-left">
          <img src={cpmsLogo} alt="College Logo" />
          <h1>St. Xavier's College of Management & Technology</h1>
        </div>

        {/* Right Side: Login and Signup buttons */}
        <div className="header-right">
          <Link to="/choose">Login</Link>
          <Link to="/Adminregister">Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
