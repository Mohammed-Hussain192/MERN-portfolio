import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="Homecont" id="contact">
      
      <div className="cont">
        
        {/* ===== FORM SECTION ===== */}
        <form>
          <h2 className="co">Contact Me</h2>
          <input type="text" id="input" placeholder="Your Name" required />
          <input type="email" id="input" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button id="btn" type="submit">Send</button>

          <p className="hee">Or reach me via:</p>
          <div className="emo">
            <div className="do">
              <FaPhoneAlt /> <a href="tel:+919019274981">9019274981</a>
            </div>
            <div className="do">
              <FaEnvelope /> <a href="mailto:sahilsahu7816@gmail.com">sahilsahu7816@gmail.com</a>
            </div>
            <div className="do">
              <FaMapMarkerAlt /> <span>Tumkur Karnataka , India</span>
            </div>
          </div>
        </form>

        {/* ===== JOIN SECTION ===== */}
       <div className="freelancer-card">
  <div className="freelancer-content">
    <h2>🚀 Available for Freelance Work</h2>
    <p>
      I’m a creative full-stack developer who turns ideas into high-impact digital products.
      Whether it’s a sleek landing page or a complex MERN application, I’ve got you covered.
    </p>

    <div className="freelancer-services">
      <div className="service-box">
        <i className="fas fa-laptop-code"></i>
        <span>Full-Stack Development</span>
      </div>
      <div className="service-box">
        <i className="fas fa-plug"></i>
        <span>API Integration</span>
      </div>
      <div className="service-box">
        <i className="fas fa-paint-brush"></i>
        <span>UI/UX Design</span>
      </div>
      <div className="service-box">
        <i className="fas fa-cloud-upload-alt"></i>
        <span>Deployment</span>
      </div>
    </div>

    <a href="/contact" className="hire-me-btn">💼 Hire Me Now</a>
  </div>
</div>


      </div>
    </div>
    </>
  );
};

export default Contact;
