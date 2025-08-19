import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import profilePhoto from '../assets/me.png'; // Ensure path is correct
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Open Source Contributor",
  "Python Developer",
  "Tech Enthusiast"
];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className='bap'>
      <Navbar/>
      <section id="home" className="home-section">
        <div className="container">
          <div className="home-content">

            {/* === LEFT TEXT CONTENT === */}
            <div className="home-text">
              <h1 className="greeting">
                Hi, I'm <span className="name-highlight">Mohammed Hussain</span>
              </h1>

              <div className="dynamic-text">
                <span className="typed-text">{displayText}</span>
                <span className="cursor">|</span>
              </div>

              <p className="bio">
                I build exceptional digital experiences with modern technologies.
                Passionate about full-stack development, open-source, and AI innovations.
              </p>

              {/* === Quick Highlights === */}
              

              {/* === CALL TO ACTION BUTTONS === */}
              <div className="cta-buttons">
                <Link to="/Projects" className="btn btn-primary">View My Work</Link>
                <Link to ="/Contact" className="btn btn-secondary">Contact Me</Link>
              </div>

              {/* === SOCIAL LINKS === */}
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>

              {/* === Stats Section === */}
              
            </div>

            {/* === RIGHT IMAGE CONTENT === */}
           

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
