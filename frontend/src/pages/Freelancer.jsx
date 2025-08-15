import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaEnvelope, FaLaptopCode, FaCloud, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";
import "../styles/Freelancer.css";
import {Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Freelancer = () => {
  return (
   <>
   <Navbar/>
    <section id="freelancer" className="freelancer-section">
      <div className="container">
        {/* Title */}
        <h2 className="section-title"> I'm Available for Freelance Work</h2>
        <p className="section-subtitle">
          Passionate <strong>Full-Stack Developer</strong> ready to bring your ideas to life with clean code, modern design, and robust functionality.
        </p>

        {/* Services */}
        <div className="services-grid">
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Custom Web Apps</h3>
            <p>Scalable, responsive, and feature-rich applications tailored to your needs.</p>
          </div>

          <div className="service-card">
            <FaReact className="service-icon" />
            <h3>Frontend Development</h3>
            <p>Modern, high-performance UIs built with React.js, animations, and smooth UX.</p>
          </div>

          <div className="service-card">
            <FaNodeJs className="service-icon" />
            <h3>Backend Development</h3>
            <p>Secure, fast, and API-driven backend systems with Node.js & Express.</p>
          </div>

          <div className="service-card">
            <FaDatabase className="service-icon" />
            <h3>Database Design</h3>
            <p>Optimized database solutions using MongoDB & MySQL for seamless performance.</p>
          </div>

          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile-Responsive Design</h3>
            <p>Fully responsive layouts that work perfectly across all devices.</p>
          </div>

          <div className="service-card">
            <FaCloud className="service-icon" />
            <h3>Cloud Deployment</h3>
            <p>Deploy and manage apps on AWS, Vercel, or DigitalOcean with CI/CD pipelines.</p>
          </div>

          <div className="service-card">
            <FaProjectDiagram className="service-icon" />
            <h3>End-to-End Projects</h3>
            <p>From concept to launch — complete project execution with continuous support.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-container">
          <Link to="/contact" className="btn btn-primary">
            <FaEnvelope className="btn-icon" /> Hire Me
          </Link>
          <p className="cta-text">Let’s collaborate to make your vision a reality!</p>
        </div>
      </div>
    </section>
   
   </>
  );
};

export default Freelancer;
