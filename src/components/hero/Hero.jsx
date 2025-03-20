import "./hero.css";
import { motion } from "motion/react";
import ComputerModelContainer from "../computer/ComputerModelContainer";
import { useState, useEffect } from "react";
import Speech from "./Speech";

const awardVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } }
};

const Hero = () => {
    const [highlight, setHighlight] = useState(false);

    const handleHighlight = (e) => {
        e.stopPropagation();
        setHighlight(true);
    };

    const handleDisableHighlight = () => {
        setHighlight(false);
    };

    useEffect(() => {
        if (highlight) {
            document.addEventListener("click", handleDisableHighlight);
        } else {
            document.removeEventListener("click", handleDisableHighlight);
        }

        return () => {
            document.removeEventListener("click", handleDisableHighlight);
        };
    }, [highlight]);

    return (
        <div className="hero" onClick={handleDisableHighlight}>
            {/* Background Layer -1 */}
            <div className="hSection left">
                {/* TITLE */}
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hTitle"
                >
                    Hello There, 
                    <br />
                    <span>I'm Kristi</span>
                </motion.h1>

                {/* Subtitle with Typing Effect */}
                <div className="motionText">
                    <Speech />
                </div>
                <div className="button-container">
                    <a href="#Portfolio" className="ProjectsButton">
                        PROJECTS
                    </a>
                    <a href="#Contact" className="contactButton">CONTACT</a>
                </div>
            </div>
            
            <div className="hSection right">
                {/* FOLLOW SECTION -*/}
                <div className="follow">
                    <a href="https://www.linkedin.com/in/kristibeka/">
                        <img src="/linkedin_icon.png" alt="" /> 
                    </a>
                    <div className="followTextContainer">
                        <div className="followText">FOLLOW ME</div>
                    </div>
                </div>
            </div>

            {/* Front Layer - Computer Model */}
            <div className="front-layer-container" onClick={handleHighlight}>
                <div className="side-div"></div> {/* Empty div for centering */}
                <div className={`front-layer ${highlight ? "highlight" : ""}`}>
                    <ComputerModelContainer />
                </div>
                <div className="side-div"></div> {/* Empty div for centering */}
            </div>
            <div className="bottom-section">
                {/* SCROLL SVG */}
                <motion.a 
                animate={{y:[0,5], opacity:[0,1,0]}}
                transition={{
                    repeat:Infinity,
                    duration: 4,
                    ease: "easeInOut"
                }}
                href="#Portfolio"
                >
                <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
                />
                <motion.path
                    animate={{y:[0,5]}}
                    transition={{
                        repeat:Infinity,
                        duration: 4,
                        ease: "easeInOut"
                    }}
                    d="M12 5V8"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    />
                    </svg>
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
