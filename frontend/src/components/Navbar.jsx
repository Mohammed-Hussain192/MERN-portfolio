import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import hussain from '../assets/files/hussain.pdf';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".nav-link",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(".logo-icon",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.2 }
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Minimal Logo Icon (No Name) */}
        <div className="logo-icon"></div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link className="nav-link" to="/"> Home</Link>
          <Link className="nav-link" to="/about"> About</Link>
          <Link className="nav-link" to="/Projects"> Projects</Link>
          <Link className='nav-link' to='/freelancer' >Freelancer</Link>
          <a className="nav-link" href={hussain} download="resume"> Resume</a>
          <Link className="nav-link" to="/Contact">Get in Touch</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
