import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/project.css';

function Home() {
  const [openMap, setOpenMap] = useState({});

  const toggleDetails = (idx) => {
    setOpenMap(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const projects = [
    {
      title: "CodeFlow – Online Compiler Platform",
      summary: `A browser-based compiler platform that allows developers to write, compile, and run code in multiple programming languages without any local setup. Designed for students, interview preparation, and quick prototyping.`,
      tech: `Frontend: EJS, GSAP animations
Backend: Node.js, Express.js
Database: MongoDB
APIs/Libraries: Compiler API integration, Axios`,
      features: [
        "Supports C, C++, Java, Python, JavaScript, and more",
        "Real-time code execution with instant output",
        "Syntax highlighting and error reporting",
        "Secure sandbox environment to prevent malicious code execution"
      ],
      highlights: [
        "Optimized API calls to reduce execution latency",
        "Integrated error parsing for better debugging",
        "Designed with scalability in mind for future language support"
      ],
      github: "hello/github",
      live_demo:"hrjjhjkjfvjkd"
    },
    {
      title: "Time Pass AI – Fun AI for Kids",
      summary: `A playful AI chatbot designed for children to interact with safely. Encourages creativity, curiosity, and fun through lighthearted conversations.`,
      tech: `Frontend: React.js
Backend: Python (Flask for API version)
APIs: OpenAI API / AI conversation engine`,
      features: [
        "Child-friendly conversational responses",
        "Supports both web and console versions",
        "Fun animations and colorful UI",
        "Basic educational Q&A mode"
      ],
      highlights: [
        "Filtered content for safety",
        "Custom personality training for a playful tone",
        "Responsive design for tablets and mobile devices"
      ],
      github: ""
    },
    {
      title: "Pinterest Clone",
      summary: `A functional replica of Pinterest’s image-sharing platform where users can upload, save, and explore images in a dynamic grid layout.`,
      tech: `Frontend: EJS, GSAP animations
Backend: Node.js, Express.js
Database: MongoDB
Libraries: Multer for file uploads`,
      features: [
        "User registration & login",
        "Image uploads with captions",
        "Dynamic masonry grid layout",
        "Smooth scroll-based animations"
      ],
      highlights: [
        "Optimized image loading for performance",
        "GSAP-based animated transitions",
        "Clean, minimal Pinterest-inspired UI"
      ],
      github: ""
    },
    {
      title: "BagHub – MERN E-commerce Bag Store",
      summary: `A full-stack e-commerce platform focused on selling bags with a modern interface, product filtering, and secure checkout.`,
      tech: `Frontend: React.js, Tailwind CSS, GSAP
Backend: Node.js, Express.js
Database: MongoDB
Payment: Stripe API`,
      features: [
        "User authentication & profile management",
        "Product search, filter, and sort",
        "Cart management & order tracking",
        "Responsive mobile-first design"
      ],
      highlights: [
        "Integrated Stripe for secure payments",
        "Optimized API routes for faster product loading",
        "SEO-friendly product pages"
      ],
      github: ""
    },
    {
      title: "Pack-Me – E-commerce Website",
      summary: `An e-commerce site for bag shopping, providing a clean and simple shopping experience with essential cart features.`,
      tech: `Frontend: React.js, GSAP animations
Backend: Node.js, Express.js
Database: MongoDB`,
      features: [
        "Product browsing and search",
        "Cart and checkout functionality",
        "Animated product transitions",
        "Fully responsive design"
      ],
      highlights: [
        "Lightweight architecture for speed",
        "Minimal yet elegant user interface",
        "Reusable React components for scalability"
      ],
      github: ""
    },
    {
      title: "Jarvis AI – Personal Assistant",
      summary: `A Python-powered voice assistant inspired by Marvel’s J.A.R.V.I.S., capable of executing a range of tasks from opening apps to fetching online data.`,
      tech: `Language: Python
Libraries: SpeechRecognition, pyttsx3, smtplib, webbrowser`,
      features: [
        "Voice-controlled command execution",
        "Email sending and web searches",
        "Weather and news updates",
        "Custom command integration"
      ],
      highlights: [
        "Natural voice synthesis with pyttsx3",
        "Task execution speed optimized",
        "Expandable architecture for future skills"
      ],
      github: ""
    },
    {
      title: "Tesla Clone",
      summary: `A pixel-perfect frontend replica of Tesla’s homepage with smooth animations and interactive car showcase.`,
      tech: `Frontend: React.js, Tailwind CSS, GSAP`,
      features: [
        "Tesla-inspired minimal design",
        "Smooth page transitions",
        "Fully responsive layout",
        "Hero section animations"
      ],
      highlights: [
        "Exact spacing & typography matching Tesla’s site",
        "Optimized animation for performance",
        "Accessible design principles followed"
      ],
      github: ""
    },
    {
      title: "Amazon Web Page Clone",
      summary: `A static clone of Amazon’s product listing page, demonstrating mastery in frontend design and responsiveness.`,
      tech: `Frontend: HTML, CSS, JavaScript`,
      features: [
        "Grid-based product layout",
        "Responsive design",
        "Hover and focus effects",
        "Clean typography and alignment"
      ],
      highlights: [
        "Perfect replica of Amazon’s visual style",
        "Responsive across devices",
        "Lightweight and fast-loading"
      ],
      github: ""
    },
    {
      title: "YouTube Clone",
      summary: `A YouTube-inspired video app with Shorts-style vertical scrolling videos.`,
      tech: `Frontend: EJS
Backend: Node.js, Express.js
Database: MongoDB`,
      features: [
        "Shorts-style video playback",
        "Dynamic video feed rendering",
        "Responsive mobile-first UI",
        "Simple search functionality"
      ],
      highlights: [
        "Smooth vertical scroll video transitions",
        "Optimized video streaming",
        "Compact, clean UI"
      ],
      github: ""
    },
    {
      title: "Attendify Landing Page",
      summary: `A GSAP-powered animated landing page with multiple theme options.`,
      tech: `Frontend: HTML, CSS, JavaScript, GSAP`,
      features: [
        "Theme switching functionality",
        "Smooth animations and parallax effects",
        "Responsive design",
        "Optimized asset loading"
      ],
      highlights: [
        "Custom GSAP animation sequences",
        "Performance-optimized animations",
        "Cross-browser compatibility"
      ],
      github: ""
    },
    {
      title: "Food Recipe Project",
      summary: `A recipe browsing app with search, filters, and detailed cooking instructions.`,
      tech: `Frontend: React.js
APIs: Spoonacular API`,
      features: [
        "Search recipes by ingredient or name",
        "Filter by cuisine or dietary needs",
        "Detailed recipe steps & ingredients",
        "Responsive layout"
      ],
      highlights: [
        "API integration with caching for speed",
        "Mobile-friendly cooking guide view",
        "Clean card-based UI"
      ],
      github: ""
    },
    {
      title: "MERN Stack Portfolio",
      summary: `A personal portfolio showcasing skills, projects, and contact form with backend integration.`,
      tech: `Frontend: React.js, GSAP
Backend: Node.js, Express.js
Database: MongoDB`,
      features: [
        "Dynamic project showcase",
        "GSAP-powered animations",
        "Responsive & interactive UI",
        "Contact form with backend processing"
      ],
      highlights: [
        "Optimized GSAP animations for smooth performance",
        "Easy to update with new projects",
        "SEO-friendly structure"
      ],
      github: ""
    },
    {
  title: "StockSense – Real-Time Stock Market Analysis Platform",
  summary: `A comprehensive web application that provides users with real-time stock market data, in-depth analysis, and personalized portfolio tracking to make informed investment decisions.`,
  tech: `Frontend: React.js, Chart.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
APIs: Alpha Vantage API / Yahoo Finance API`,
  features: [
    "Live stock price updates with interactive charts",
    "Portfolio management with gain/loss tracking",
    "Advanced technical indicators and market news integration",
    "Customizable watchlists and alerts"
  ],
  highlights: [
    "Optimized data fetching for minimal latency",
    "Intuitive and clean user interface with responsive design",
    "Secure user authentication and data privacy",
    "Scalable architecture to handle high-frequency data updates"
  ],
  github: "",
  live_demo : ""
}
  ];

  return (
    <div className='projects-page'>
      <Navbar />
      
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="projects-title">Major Projects</h1>
          <p className="projects-subtitle">Showcasing my development work and technical capabilities</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${openMap[index] ? 'expanded' : ''}`}
            >
              <div className="project-card-content">
                <h2 className="project-name">{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                
                <div className="tech-stack">
                  <h3>Tech Stack</h3>
                  <pre className="tech-details">{project.tech}</pre>
                </div>

                <button
                  className="toggle-details"
                  onClick={() => toggleDetails(index)}
                  aria-expanded={!!openMap[index]}
                >
                  {openMap[index] ? '▲ Hide Details' : '▼ View Details'}
                </button>

                {openMap[index] && (
                  <div className="project-details">
                    <div className="details-section">
                      <h3>Key Features</h3>
                      <ul className="features-list">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="details-section">
                      <h3>Development Highlights</h3>
                      <ul className="highlights-list">
                        {project.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-links">
                      {project.github ? (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="github-link"
                        >
                          View on GitHub
                        </a>
                      ) : (
                        <span className="github-coming-soon">GitHub: (link coming soon)</span>
                      )}

                      {project.live_demo ? (
                        <a 
                          href={project.live_demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="live-demo-link"
                        >
                          View Live Demo
                        </a>
                      ) : (
                        <span className="live-demo-coming-soon">Live Demo: (link coming soon)</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
