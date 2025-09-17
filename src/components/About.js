import React from "react";
import "../css/About.css";
import confidenceImage from "../assets/sconfidence2.jpg";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
            <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                Confidence Chinecherem is a passionate Software Developer with hands-on 
                experience building scalable, user-focused digital solutions. She currently 
                works at BlockWave Software, where she develops responsive websites and 
                applications for small and medium-sized businesses in Nigeria.
              </p>
           
              <h2 className="section-titles">Work Experience</h2>
      
              <div >
                <h3 className="role">Full Stack Developer</h3>
                <strong className="company">
                  Blockwave Software & IT · Rivers State, NG
                </strong>
                <p className="duration">Oct 2023 – Present </p>

                <ul className="responsibilities">
                  <li>
                    Managed a digital solutions company delivering responsive websites
                    and applications for SMBs.
                  </li>
                  <li>
                    Handled full project lifecycle, from UI/UX design in Figma to
                    development and deployment, using MERN stack technologies.
                  </li>
                  <li>
                    Collaborated with clients to build scalable, user-focused solutions
                    that drive online growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src={confidenceImage} 
                alt="Confidence Chinecherem - Software Developer" 
                className="profile-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Full-Stack Developer</span>
                </div>
              </div>
            </div>
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;