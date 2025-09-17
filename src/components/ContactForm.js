import React, { useState } from "react";
import "../css/ContactForm.css";

// Import SVG icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);



function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle, submitting, submitted, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/mdkgevrk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("submitted");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Send a Message</h2>
      {status === "submitted" && (
          <div className="success-message">
            <p>Thank you for reaching out! Your message has been successfully sent. I will get back to you shortly.</p>
          </div>
        )}
        
        {status === "error" && (
          <div className="error-message">
            <p>Sorry, there was an error sending your message. Please try again later.</p>
          </div>
        )}
      
      <form 
        id="contact-form" 
        className="contact-form" 
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <div className="input-icon">
            <UserIcon />
          </div>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <div className="input-icon">
            <EmailIcon />
          </div>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="input-group">
          <div className="input-icon">
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn primary-btn"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        
   
      </form>
    </div>
  );
}

export default ContactForm;
