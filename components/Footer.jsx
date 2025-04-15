import React from 'react'; 
import { assets } from '../assets/assets'; // Import logo

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          {/* Left Section: Logo and description text */}
          <div className="footer-left">
            <img src={assets.logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Right Section: Company info and contact details */}
          <div className="footer-right">

            {/* Company Links */}
            <div className="footer-section">
              <h2 className="footer-heading">COMPANY</h2>
              <ul className="footer-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h2 className="footer-heading">GET IN TOUCH</h2>
              <ul className="footer-list">
                <li>+1-000-000-0000</li>
                <li>greatstackdev@gmail.com</li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Text */}
        <div className="footer-bottom">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: white;
          color: #333;
          padding: 60px 20px;
          font-family: sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .footer-left {
          flex: 1;
          min-width: 300px;
          align-self: flex-start; /* keeps it slightly higher */
          margin-top: -10px; /* lift left side a bit */
        }

        .footer-right {
          display: flex;
          gap: 60px;
          flex: 1;
          justify-content: flex-end;
          min-width: 300px;
          margin-top: 10px; /* push right side a bit down */
          flex-wrap: wrap;
        }

        .footer-section {
          min-width: 150px;
        }

        .footer-logo {
          width: 130px;
          margin-bottom: 20px;
        }

        .footer-text {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          font-size: 14px;
          color: #555;
        }

        .footer-list li {
          margin-bottom: 10px;
        }

        .footer-list a {
          color: #555;
          text-decoration: none;
        }

        .footer-list a:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          border-top: 1px solid #e0e0e0;
          margin-top: 40px;
          padding-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #777;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .footer-right {
            flex-direction: column;
            gap: 30px;
            margin-top: 0;
          }

          .footer-left {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
