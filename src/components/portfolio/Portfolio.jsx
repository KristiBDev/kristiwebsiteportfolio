import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/portfolio1.png" alt="3D Portfolio" />
            </div>
            <div className="portfolio-text">
              <h2>3D Portfolio Website</h2>
              <p>Interactive portfolio featuring Three.js 3D models, smooth animations, and responsive design.</p>
              <div className="portfolio-tools">
                <span>React</span>
                <span>Three.js</span>
                <span>Framer Motion</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/portfolio2.png" alt="AI Generator" />
            </div>
            <div className="portfolio-text">
              <h2>AI Image Generator</h2>
              <p>Full-stack application that generates unique images using AI with authentication and sharing features.</p>
              <div className="portfolio-tools">
                <span>Next.js</span>
                <span>OpenAI</span>
                <span>MongoDB</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/portfolio3.png" alt="Chat App" />
            </div>
            <div className="portfolio-text">
              <h2>Real-time Chat App</h2>
              <p>Feature-rich chat application with real-time messaging, file sharing, and video calls.</p>
              <div className="portfolio-tools">
                <span>React</span>
                <span>Socket.io</span>
                <span>Firebase</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/portfolio4.png" alt="E-commerce" />
            </div>
            <div className="portfolio-text">
              <h2>E-commerce Platform</h2>
              <p>Modern e-commerce platform with product management, cart functionality, and secure payments.</p>
              <div className="portfolio-tools">
                <span>Next.js</span>
                <span>Stripe</span>
                <span>PostgreSQL</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/portfolio5.png" alt="Task Manager" />
            </div>
            <div className="portfolio-text">
              <h2>Task Management System</h2>
              <p>Collaborative task management system with real-time updates and team features.</p>
              <div className="portfolio-tools">
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
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
