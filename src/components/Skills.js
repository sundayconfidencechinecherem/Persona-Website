
import "../css/Skills.css";
import skillsData from "../data/SkillsData";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import npm from "../assets/skills/npm.png";
import bootstrap from "../assets/skills/boostrap.jpeg";
import node from "../assets/skills/node.png";
import mongoDB from "../assets/skills/mongodb.png";
import postman from "../assets/skills/postman.png";
import firebase from "../assets/skills/firebase.png";
import gspace from "../assets/skills/google workspace.png";
import figma from "../assets/skills/figma.avif";
import React, { useEffect, useRef, useState } from "react";

// const tagToIcon = {
//   "HTML": html,
//   "CSS": css,
//   "JavaScript": javascript,
//   "React": react,
//   "TailwindCSS": npm, // Using npm as placeholder - you should import TailwindCSS icon
//   "Node.js": node,
//   "Express": node, // Using node as placeholder - you should import Express icon
//   "MongoDB": mongoDB,
//   "Firebase": firebase,
//   "Figma": figma,
//   "Wireframing": figma, // Using figma as placeholder
//   "Responsive Design": html, // Using html as placeholder
//   "Communication": gspace, // Using google workspace as placeholder
//   "Collaboration": gspace, // Using google workspace as placeholder
//   "Problem-Solving": gspace, // Using google workspace as placeholder
//   "Adaptability": gspace // Using google workspace as placeholder
// };

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const progressBarsRef = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate progress bars with delay
            progressBarsRef.current.forEach((bar, index) => {
              if (bar) {
                setTimeout(() => {
                  bar.style.width = bar.getAttribute('data-progress') + '%';
                }, index * 200);
              }
            });
          }
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
    return (
        <section id="skills" className="skills" ref={sectionRef}>
          <div className="container">
            <h2 className="section-title">Expertise</h2>
    
            
            <div className="skills-grid">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-category ${isVisible ? 'animate-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <h3 className="skill-title">{skill.category}</h3>
                    <span className="progress-percent">{skill.progress}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="progress-item">
                    <div className="progress-info">
                      <span>Proficiency</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        ref={el => progressBarsRef.current[index] = el}
                        data-progress={skill.progress}
                        style={{ '--progress-color': skill.color }}
                      >
                        <div className="progress-indicator"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             {/* Rotating Tech Logos */}
        <div className="skills-carousel">
          <div className="carousel-track">
            <img src={bootstrap} alt="bootstrap"/>
            <img src={npm} alt="npm" />
            <img src={mongoDB} alt="MongoDB" />
            <img src={firebase} alt="Firebase" />
            <img src={figma} alt="Figma" />
            <img src={gspace} alt="googleworkspace" />
            <img src={javascript} alt="JavaScript" />
            <img src={npm} alt="npm" />
            <img src={node} alt="node" />
            <img src={react} alt="react" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={postman} alt="postman" />
          </div>
        </div>
          </div>
        </section>
      );
    }

export default Skills;