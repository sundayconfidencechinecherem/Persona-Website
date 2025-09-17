import React from "react";
import "../css/Pitch.css";

const ElevatorPitch = () => {
  return (
    <section id="pitch" className="pitch section">
      <div className="pitch-container">
        <h2 className="section-title">Elevator Pitch</h2>
        <p className="pitch-text">
          Here’s a quick introduction video about who I am, what I do, and the value I bring.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bvMgyKp4Y6A?si=Dg_TkqUouNuX6GIj"
            title="Elevator Pitch Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitch;
