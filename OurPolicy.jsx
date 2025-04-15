import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <>
      <style>{`
        .our-policy-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 3rem;
          text-align: center;
          padding: 2rem 0;
        }

        @media (min-width: 640px) {
          .our-policy-container {
            flex-direction: row;
            gap: 2rem;
          }
        }

        .policy-item {
          flex: 1;
        }

        .policy-icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1.25rem auto;
        }

        .policy-title {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .policy-description {
          color: #9ca3af;
          margin-top: 0.25rem;
        }
      `}</style>

      <div className="our-policy-container">
        <div className="policy-item">
          <img src={assets.Exchange} className="policy-icon" alt="Exchange Icon" />
          <p className="policy-title">Easy Exchange Policy</p>
          <p className="policy-description">We offer hassle free exchange policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.Returns} className="policy-icon" alt="Return Icon" />
          <p className="policy-title">7 Days Return Policy</p>
          <p className="policy-description">We provide 7 days free return policy</p>
        </div>
        <div className="policy-item">
          <img src={assets.Csr} className="policy-icon" alt="Customer Support Icon" />
          <p className="policy-title">Best customer support</p>
          <p className="policy-description">we provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
