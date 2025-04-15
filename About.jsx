import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="about-container">
      <style>{`
        .about-container {
          padding: 3rem 2rem;
          max-width: 1200px;
          margin: auto;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-title h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0;
        }

        .section-title strong {
          font-weight: bold;
        }

        .title-line {
          width: 100px;
          height: 2px;
          background-color: #333;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
          align-items: stretch;
        }

        .about-image {
          flex: 1;
          max-width: 480px;
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        .about-text {
          flex: 1;
          min-width: 300px;
          line-height: 1.8;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .about-text p {
          margin-bottom: 1rem;
        }

        .about-text h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .choose-container {
          margin-top: 4rem;
        }

        .choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .choose-item {
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }

        .choose-item h4 {
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .choose-item p {
          color: #555;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            align-items: center;
          }

          .about-image {
            max-width: 100%;
          }

          .about-text {
            text-align: center;
          }

          .section-title {
            flex-direction: column;
            gap: 0.5rem;
          }

          .title-line {
            width: 100px;
          }
        }
      `}</style>

      {/* About Section */}
      <div className="section-title">
        <h2>ABOUT <strong>US</strong></h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        <img src={assets.About} alt="about" className="about-image" />
        <div className="about-text">
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase 
            a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to 
            every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive 
            collection sourced from trusted brands and suppliers.
          </p>
          <h4>Our Mission</h4>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing 
            a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose-container">
        <div className="section-title">
          <h2>WHY <strong>CHOOSE US</strong></h2>
          <div className="title-line"></div>
        </div>

        <div className="choose-grid">
          <div className="choose-item">
            <h4>QUALITY ASSURANCE:</h4>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="choose-item">
            <h4>CONVENIENCE:</h4>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="choose-item">
            <h4>EXCEPTIONAL CUSTOMER SERVICE:</h4>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
