import React, { useRef } from "react";
import "../css/Testimonial.css";
import daniel from "../assets/testimonials/Daniel.jpeg";
import winifred from "../assets/testimonials/winifred.JPG";
import sonset from "../assets/testimonials/sonset.JPG";
import praise from "../assets/testimonials/favour.jpg";
import favour from "../assets/testimonials/praise.jpg";

const testimonials = [
  { name: "Daniel", role: "Colleague", feedback: "Confidence is reliable and detail-oriented, she always meets project deadlines.", image: daniel },
  { name: "Winifred", role: "Software Developer", feedback: "It was amazing working and collaborating with you, Confidence.", image: winifred },
  { name: "Sonset", role: "Asp. Dev", feedback: "Friendly and supportive, always willing to help and share knowledge with the team.", image: sonset },
  { name: "Praise", role: "Student", feedback: "Confidence’s guidance makes learning much easier and enjoyable.", image: praise },
  { name: "Favour", role: "Student", feedback: "She is great at explaining complex ideas in a simple way.", image: favour },
];

function Testimonial() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>

        <div className="testimonial-wrapper-with-arrows">
          <button className="arrow left-arrow" onClick={scrollLeft}>‹</button>

          <div className="testimonials-wrapper" ref={containerRef}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={t.image} alt={t.name} className="testimonial-img" />
                  <div>
                    <h3 className="testimonial-name">{t.name}</h3>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
                <p className="testimonial-feedback">“{t.feedback}”</p>
              </div>
            ))}
          </div>

          <button className="arrow right-arrow" onClick={scrollRight}>›</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
