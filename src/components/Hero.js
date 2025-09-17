import React from 'react';
import "../css/Hero.css";
import confidenceImage from "../assets/sconfidence.jpg"; // Update with your actual image path

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello, I'm <span>Confidence Chinecherem</span></h1>
          <p className="hero-role">Software Developer</p>
          <p className="hero-description">
            Transforming ideas into powerful digital solutions that empower businesses to succeed.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primarys">View my work</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={confidenceImage} 
            alt="Confidence Chinecherem - Software Developer" 
            className="profile-image"
          />
          <div className="image-decoration"></div>
        </div>
      </div>
      
     
    </section>
  );
}

export default Hero;