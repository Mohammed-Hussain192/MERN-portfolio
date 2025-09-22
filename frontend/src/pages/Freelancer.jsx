import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaEnvelope, FaLaptopCode, FaCloud, FaMobileAlt, FaProjectDiagram, FaArrowRight } from "react-icons/fa";
import "../styles/Freelancer.css";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Freelancer = () => {
  return (
    <>
      <Navbar />
      <section id="freelancer" className="freelancer-section">
        {/* Hero Section */}
        <div className="freelancer-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Full-Stack Developer <span className="accent-text">Available for Freelance</span>
              </h1>
              <p className="hero-subtitle">
                I build modern, scalable web applications with cutting-edge technologies. Let's transform your ideas into digital reality.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Start a Project <FaArrowRight className="btn-icon" />
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View My Work
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-icons">
                <FaReact className="icon react" />
                <FaNodeJs className="icon node" />
                <FaDatabase className="icon database" />
                <FaCloud className="icon cloud" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Services I Offer</h2>
              <p className="section-subtitle">
                Comprehensive full-stack development services to bring your digital vision to life
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="card-icon">
                  <FaLaptopCode />
                </div>
                <h3>Custom Web Applications</h3>
                <p>Scalable, responsive, and feature-rich applications tailored to your specific business needs.</p>
                <ul className="service-features">
                  <li>React.js Applications</li>
                  <li>Progressive Web Apps</li>
                  <li>Single Page Applications</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="card-icon">
                  <FaReact />
                </div>
                <h3>Frontend Development</h3>
                <p>Modern, high-performance user interfaces with smooth animations and exceptional UX.</p>
                <ul className="service-features">
                  <li>React.js Development</li>
                  <li>Interactive UI/UX</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="card-icon">
                  <FaNodeJs />
                </div>
                <h3>Backend Development</h3>
                <p>Secure, fast, and API-driven backend systems built with modern technologies.</p>
                <ul className="service-features">
                  <li>Node.js & Express</li>
                  <li>REST & GraphQL APIs</li>
                  <li>Authentication Systems</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="card-icon">
                  <FaDatabase />
                </div>
                <h3>Database Design</h3>
                <p>Optimized database architecture and management for seamless application performance.</p>
                <ul className="service-features">
                  <li>MongoDB & MySQL</li>
                  <li>Database Optimization</li>
                  <li>Data Migration</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="card-icon">
                  <FaMobileAlt />
                </div>
                <h3>Responsive Development</h3>
                <p>Fully responsive designs that work perfectly across all devices and screen sizes.</p>
                <ul className="service-features">
                  <li>Mobile-First Approach</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Touch-Friendly Interfaces</li>
                </ul>
              </div>

              <div className="service-card">
                <div className="card-icon">
                  <FaCloud />
                </div>
                <h3>Cloud Deployment</h3>
                <p>Deployment and management of applications on cloud platforms with CI/CD pipelines.</p>
                <ul className="service-features">
                  <li>AWS & DigitalOcean</li>
                  <li>CI/CD Pipelines</li>
                  <li>Performance Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="freelance-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to bring your project to life?</h2>
              <p>Let's discuss your ideas and create something amazing together</p>
              <Link to="/contact" className="btn btn-large">
                <FaEnvelope className="btn-icon" /> Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Freelancer;