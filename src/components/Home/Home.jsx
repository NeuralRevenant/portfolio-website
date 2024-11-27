import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faCode as leetcode,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const location = useLocation();
  const iconRef = useRef(null);

  // bug fix for animating the top-icon after route change
  useEffect(() => {
    const icon = iconRef.current;
    if (icon && location.pathname === "/") {
      // restart the animation
      icon.style.animation = "none";
      void icon.offsetWidth;
      icon.style.animation = "";
    }
  }, [location]);

  return (
    <section id="home">
      <FontAwesomeIcon icon={faLaptopCode} className="top-icon" ref={iconRef} />
      <div className="homepage-intro">
        <h1 className="name font-size-large">KAUSHIK CHATURVEDULA</h1>
        <p className="tagline font-size-medium">
          Innovative Software Engineer Crafting Solutions for Tomorrow
        </p>
        <p className="intro font-size-small">
          Welcome to my professional portfolio. Explore my work to learn more
          about my skills, projects, and the value I can bring to your team.
        </p>
      </div>
      <nav className="section-links">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="Kaushik_Chaturvedula_Resume.pdf"
        >
          Resume
        </a>
      </nav>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/kaushikchaturvedula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/NeuralRevenant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://leetcode.com/u/ArrayArtisan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={leetcode} />
        </a>
        <a href="mailto:kaushikchaturvedula@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
};

export default Home;
