import React from "react";
import "../css/Contact.css";
import ContactForm from "./ContactForm";

// Simple Icons
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M11.54 22.351a.76.76 0 00.723 0 16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282c.35.24.73.49 1.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        {/* Left side: info */}
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
  I’m always excited to connect! Whether you’re interested in collaborating on a project or discussing opportunities, feel free to reach out. Let’s build something amazing together.
</p>


          <div className="contact-items">
            <div className="contact-item">
              <EmailIcon />
              <a href="mailto:sconfidencechinecherem@gmail.com">
                sconfidencechinecherem@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <LocationIcon />
              <span>Enugu State, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Right side: form */}
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
