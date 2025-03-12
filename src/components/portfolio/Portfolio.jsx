import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="./src/portfolio1.png" alt="Project 1" />
            </div>
            <div className="portfolio-text">
              <h2>Project One</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="portfolio-tools">
                <span>Skill 1</span>
                <span>Skill 2</span>
                <span>Skill 3</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="./src/portfolio2.png" alt="Project 2" />
            </div>
            <div className="portfolio-text">
              <h2>Project Two</h2>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="portfolio-tools">
                <span>Skill 4</span>
                <span>Skill 5</span>
                <span>Skill 6</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="./src/myscreen.png" alt="Project 3" />
            </div>
            <div className="portfolio-text">
              <h2>Project Three</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="portfolio-tools">
                <span>Skill 7</span>
                <span>Skill 8</span>
                <span>Skill 9</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="./src/portfolio4.png" alt="Project 4" />
            </div>
            <div className="portfolio-text">
              <h2>Project Four</h2>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="portfolio-tools">
                <span>Skill 10</span>
                <span>Skill 11</span>
                <span>Skill 12</span>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="./src/portfolio5.png" alt="Project 5" />
            </div>
            <div className="portfolio-text">
              <h2>Project Five</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="portfolio-tools">
                <span>Skill 13</span>
                <span>Skill 14</span>
                <span>Skill 15</span>
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
