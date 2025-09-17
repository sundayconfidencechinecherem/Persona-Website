import React from "react";
import "../css/Portfolio.css";
import necheslaudry from "../assets/nechelaundry.png";
import excellentproperty from "../assets/excellentproperties.png";

function Portfolio() {
  const projects = [
    {
      title: "Neche’s Laundry",
      description: "A modern, responsive web app developed for Neche’s Laundry, delivering a seamless user experience across all devices. The platform offers intuitive navigation, detailed service information, and a user-friendly interface, reflecting the brand's commitment to quality and customer satisfaction.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: necheslaudry,
      liveUrl: "https://neches-laundry.netlify.app/",
      githubUrl: "https://github.com/sundayconfidencechinecherem/Excellent-Properties"
    },
    {
      title: "Excellent Properties",
      description: "A responsive and modern real estate web app built to showcase property listings, highlight featured homes, and provide an intuitive user experience. The platform includes easy navigation, property search filters, and detailed property pages, helping users explore and engage with properties seamlessly.",
      technologies: ["HTML", "CSS","JavaScript", "React"],
      image: excellentproperty,
      liveUrl: "https://excellent-properties.netlify.app/",
      githubUrl: "https://github.com/sundayconfidencechinecherem/Laundry-App"
    }
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-demo"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;