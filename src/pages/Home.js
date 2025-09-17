import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ElevatorPitch from "../components/Pitch";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
function Home() {
  return (
    <div>
     <Hero />
     <ElevatorPitch />
     <About />
     <Portfolio />
     <Skills />
     <Contact />
     <Testimonial />
  </div>
  );
}

export default Home;
