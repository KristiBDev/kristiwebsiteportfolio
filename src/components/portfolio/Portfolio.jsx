import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./portfolio.css";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img: "/portfolio1.png",
    desc: "A modern portfolio website built with React and Three.js, featuring interactive 3D elements and smooth animations.",
  },
  {
    id: 2,
    title: "Next.js E-Commerce",
    img: "/portfolio2.png",
    desc: "Full-featured e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payments.",
  },
  {
    id: 3,
    title: "Music Streaming App",
    img: "/portfolio3.png",
    desc: "A responsive music streaming application with real-time playback, playlists, and social features.",
  },
  {
    id: 4,
    title: "Travel Blog",
    img: "/portfolio4.png",
    desc: "Dynamic travel blog platform with rich media support, user authentication, and interactive maps.",
  },
];

const Portfolio = () => {
  const [width, setWidth] = useState(0);
  const portfolioRef = useRef();

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  useEffect(() => {
    const calculateWidth = () => {
      const container = portfolioRef.current;
      if (container) {
        const scrollWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        setWidth(scrollWidth - viewportWidth);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <div className="portfolio" ref={portfolioRef}>
      <div className="progress">
        <motion.div style={{ scaleX: scrollYProgress }} className="progressBar" />
      </div>
      <motion.div 
        className="pList"
        style={{ x }}
      >
        {items.map((item) => (
          <div className="pItem" key={item.id}>
            <div className="pImg">
              <img src={item.img} alt={item.title} />
            </div>
            <motion.div 
              className="pText"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;