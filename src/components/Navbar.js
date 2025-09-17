import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation,useNavigate } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Check if we're on the home page for scroll navigation
  const isHomePage = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

// Special function for Blog navigation - UPDATED
const handleBlogNavigation = () => {
    closeMenu(); // Add this line to close the menu
    
    // If we're already on the blog page, scroll to top
    if (location.pathname === '/blog') {
      scrollToTop();
    } else {
      // Navigate to blog and scroll to top after a short delay
      navigate('/blog');
      setTimeout(scrollToTop, 100);
    }
  };
  return (
    <header className="navbar">
      <div className="navbar-container">
        {isHomePage ? (
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="logo"
            onClick={closeMenu}
            aria-label="Home"
          >
            Confidence C.
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            className="logo"
            onClick={closeMenu}
            aria-label="Home"
          >
            Confidence C.
          </RouterLink>
        )}

        {/* Hamburger button */}
        <button 
          className={`menu-toggle ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          {/* About Link */}
          {isHomePage ? (
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              onClick={closeMenu}
              aria-label="About section"
            >
              About
            </ScrollLink>
          ) : (
            <RouterLink 
              to="/#about" 
              onClick={closeMenu}
              aria-label="About section"
            >
              About
            </RouterLink>
          )}

          {/* Portfolio Link */}
          {isHomePage ? (
            <ScrollLink 
              to="portfolio" 
              smooth={true} 
              duration={500} 
              onClick={closeMenu}
              aria-label="Portfolio section"
            >
              Portfolio
            </ScrollLink>
          ) : (
            <RouterLink 
              to="/#portfolio" 
              onClick={closeMenu}
              aria-label="Portfolio section"
            >
              Portfolio
            </RouterLink>
          )}

          {/* Skills Link */}
          {isHomePage ? (
            <ScrollLink 
              to="skills" 
              smooth={true} 
              duration={500} 
              onClick={closeMenu}
              aria-label="Skills section"
            >
              Expertise
            </ScrollLink>
          ) : (
            <RouterLink 
              to="/#skills" 
              onClick={closeMenu}
              aria-label="Skills section"
            >
              Expertise
            </RouterLink>
          )}

          {/* Contact Link */}
          {isHomePage ? (
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              onClick={closeMenu}
              aria-label="Contact section"
            >
              Contact
            </ScrollLink>
          ) : (
            <RouterLink 
              to="/#contact" 
              onClick={closeMenu}
              aria-label="Contact section"
            >
              Contact
            </RouterLink>
          )}

          {/* Blog Link (always RouterLink) */}
          <RouterLink 
            to="/blog" 
            onClick={handleBlogNavigation}
            aria-label="Blog page"
            className="router-link"
          >
            Blog
          </RouterLink>
          
        </nav>
      </div>
    </header>
  );
}