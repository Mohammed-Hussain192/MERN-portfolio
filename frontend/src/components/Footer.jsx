import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/footer.css"; // Make sure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Me</h3>
        <ul className="socials">
          {/* External Links */}
          <li>
            <a
              href="https://www.linkedin.com/in/mohammed-hussain-484026260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mohammed-Hussain19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="mailto:mohammedhussain@example.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="tel:+919019274981">
              <FaPhone />
            </a>
          </li>

          {/* Internal Link Example using <Link> */}
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mohammed Hussain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
