
import React from 'react';
import './Hero.css';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-header">
            <p className="hero-line"></p>
            <p className="hero-badge">OUR BESTSELLERS</p>
          </div>
          <h1 className="hero-title">Latest Arrivals</h1>
          <div className="hero-cta">
            <p className="hero-shop">SHOP NOW</p>
            <p className="hero-underline"></p>
          </div>
        </div>
      </div>
      <img src={assets.Hero} alt="hero image"/>
    </div>
  );
};

export default Hero;
