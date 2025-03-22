import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/project1.png" alt="Project 1" />
            </div>
            <div className="portfolio-text">
              <h2>Future-Proof Local Email Archival Solution</h2>
              <p>Developed a Python-based email archiving tool that retrieves, compresses, and stores emails locally in HTML format for long-term access. The project included API integration, efficient data compression techniques, and a user-friendly interface for searching and viewing archived emails.</p>
              <div className="portfolio-tools">
                <span>Python</span>
                <span>HTML</span>
                <span>JavaScript</span>
              </div>
              <a href="https://kristibdev.github.io/case-study/" target="_blank" rel="noopener noreferrer">Case Study →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
            <img src={`${import.meta.env.BASE_URL}project2.png`} alt="Project 2" />

            </div>
            <div className="portfolio-text">
              <h2>Portfolio Website</h2>
              <p>Developed an interactive portfolio website using React, Three.js, JavaScript, HTML, and CSS, featuring smooth animations and 3D elements for an engaging user experience. The site showcases projects, skills, and contact information, optimized for responsiveness and performance. Deployed via GitHub Pages for easy access.</p>
              <div className="portfolio-tools">
                <span>React.js</span>
                <span>Three.js</span>
                <span>Framer Motion</span>
              </div>
              <a href="https://github.com/KristiBDev/kristiwebsiteportfolio" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
            <img src={`${import.meta.env.BASE_URL}myscreen.png`} alt="Project 3" />

            </div>
            <div className="portfolio-text">
              <h2>Project Three</h2>
              <p>Coming soon</p>
              <div className="portfolio-tools">
                <span>Skill 7</span>
                <span>Skill 8</span>
                <span>Skill 9</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        

        
      </div>
    </div>
  );
};

export default Portfolio;
