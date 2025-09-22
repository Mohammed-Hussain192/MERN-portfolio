import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/About.css';
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import Particles from '../components/Orb';


gsap.registerPlugin(useGSAP);

function About() {
  useGSAP(() => {
    // Page entrance animation
    gsap.from(".about-section", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out"
    });

    // Education items animation
    

    // Skills animation
   

    // Certifications animation
  
    
  });

  return (
    <>
     <Navbar />
   
      
      <div className="about-page">
         <div className="orb-container">
       <Particles
    particleColors={['#000000ff', '#ff1212ff']}
    particleCount={700}
    particleSpread={10}
    speed={0.3}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={false}
  />
      </div>
        
        
        
        <main className="about-container">
          
          {/* About Me Section */}
          <section className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="section-content">
              <p className="about-text">
                I am Mohammed Hussain, a dedicated Full-Stack Developer with a strong passion for designing and delivering innovative, scalable digital solutions. 
                I specialize in creating engaging web applications that seamlessly blend user experience with robust backend functionality.
              </p>
              <p className="about-text">
                My expertise spans frontend technologies such as React and GSAP animations, alongside backend development using Node.js, Express, and MongoDB. 
                Additionally, I have experience developing AI-powered applications in Python.
              </p>
              <p className="about-text">
                Over the years, I have successfully contributed to a variety of projects including intelligent assistants like Jarvis AI, interactive learning tools such as Time Pass AI, and e-commerce platforms like Pack-Me. 
                My goal is to build software that not only solves problems but also delights users.
              </p>
              <p className="about-text">
                I consistently pursue excellence in both technical skills and professional growth, demonstrated by securing top awards in competitions such as Front-end Fusion and Zero Error at the V-QUANTUM Tech Fest. 
                Outside of development, I enjoy cricket and volleyball, which help me maintain a well-rounded and balanced approach to challenges.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              <div className="education-item">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p className="institution">Vidya Vahini First Grade College, Tumkur | 2022 – Present</p>
                <ul className="education-details">
                  <li>Focused studies in Full-Stack Development, Artificial Intelligence, and Data Analysis.</li>
                  <li>Earned certifications from renowned organizations including NASSCOM Foundation, Microsoft, Infosys Springboard, and Wadhwani Foundation.</li>
                  <li>Achieved 1st place in Front-end Fusion and 3rd place in Zero Error (C Programming) at the V-QUANTUM Tech Fest.</li>
                </ul>
              </div>

              <div className="education-item">
                <h3>Pre-University Course (PUC)</h3>
                <p className="institution">Subhash Pre-University College, Koratagere, Tumkur | Completed 2022</p>
                <ul className="education-details">
                  <li>Concentrated on Computer Science and Mathematics.</li>
                  <li>Built foundational programming and analytical problem-solving skills.</li>
                </ul>
              </div>

              <div className="education-item">
                <h3>Secondary School Leaving Certificate (SSLC)</h3>
                <p className="institution">Zainabiya School, Tumkur | Completed 2020</p>
                <ul className="education-details">
                  <li>Developed a solid foundation in Science, Mathematics, and Technology.</li>
                  <li>Participated in various coding and technology competitions, honing early technical skills.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills-section">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-content">
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React.js</li>
                    <li>GSAP Animations</li>
                    <li>EJS</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Database & Tools</h3>
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="certifications-section">
            <h2 className="section-title">Achievements & Certifications</h2>
            <div className="section-content">
              <div className="certification-item">
                <h3>Data Analyst Certification</h3>
                <p className="issuer">NASSCOM Foundation & Microsoft</p>
              </div>
              <div className="certification-item">
                <h3>Artificial Intelligence Certification</h3>
                <p className="issuer">[Issuing Authority]</p>
              </div>
              <div className="certification-item">
                <h3>Python Completion Certificate</h3>
                <p className="issuer">Infosys Springboard</p>
              </div>
              <div className="certification-item">
                <h3>Problem-Solving Certificate</h3>
                <p className="issuer">HackerRank</p>
              </div>
              <div className="certification-item">
                <h3>Employability Skills Certificate</h3>
                <p className="issuer">Wadhwani Foundation</p>
              </div>
              <div className="certification-item">
                <h3>1st Place – Front-end Fusion</h3>
                <p className="issuer">V-QUANTUM Tech Fest</p>
              </div>
              <div className="certification-item">
                <h3>3rd Place – Zero Error Competition</h3>
                <p className="issuer">V-QUANTUM Tech Fest (C Programming)</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default About;