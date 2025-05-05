// --- Footer.js ---
import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #0d6efd;
            color: white;
            text-align: center;
            padding: 15px 20px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            position: relative;
            bottom: 0;
            width: 100%;
            margin-top: 20px;
          }

          .footer p {
            margin: 0;
          }
        `}
      </style>

      <div className="footer">
        <p>© {new Date().getFullYear()} St. Xavier's College of Management & Technology. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
