import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="contact-container">
      <style>{`
        .contact-container {
          padding: 3rem 2rem;
          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .contact-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-title strong {
          font-weight: bold;
        }

        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .contact-image {
  width: 350px; /* Adjust the width as needed */
  height: 350px; /* Keeping the height as is for the portrait look */
  object-fit: cover;
  border-radius: 4px;
}

        .contact-info {
          flex: 1;
          max-width: 400px;
          text-align: left;
        }

        .contact-section {
          margin-bottom: 2rem;
        }

        .contact-section h3 {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .explore-button {
          padding: 0.6rem 1.2rem;
          border: 1px solid black;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .explore-button:hover {
          background: black;
          color: white;
        }
      `}</style>

      <h2 className="contact-title">Contact <strong>Us</strong></h2>
      <div className="contact-content">
        <img
          src={assets.heroes}
          alt="office setup"
          className="contact-image"
        />
        <div className="contact-info">
          <div className="contact-section">
            <h3>Our Store</h3>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>

          <div className="contact-section">
            <h3>Careers at Forever</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-button">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
