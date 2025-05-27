import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/purdue.jpeg";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  const closeIconRef = useRef(null);

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    if (closeIconRef.current) {
      closeIconRef.current.setAttribute("inert", "true");
    }
  }, []);

  return (
    <div className="about-section">
      <div className="about-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={handleClose}
          aria-label="Close About Section"
          tabIndex="0"
          ref={closeIconRef}
          role="button"
          aria-hidden="false"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClose();
          }}
        />

        <div className="modal-content">
          <h2 className="major-heading">🌟About Me</h2>
          <div className="image-and-text">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <p className="about-me-text">
              Hello! My name is <strong>Kaushik Chaturvedula</strong>. I'm a
              passionate Software Engineer with strong experience building
              high-performance, scalable software systems across microservices,
              LLM-based agents, and full-stack architectures.
            </p>
            <p className="about-me-text">
              I recently graduated with a Master of Science in Computer Science
              from
              <strong> Purdue University Fort Wayne</strong> with a perfect GPA
              of 4.0/4.0. I completed the 30-credit-hour program in just three
              semesters, ranking among the top in several advanced courses. My
              curriculum focused on AI, Machine Learning, full-stack
              engineering, and scalable systems, combining rigorous theory with
              extensive hands-on development.
            </p>
            <p className="about-me-text">
              My graduate coursework included: Natural Language Processing,
              Machine Learning, Computer Vision, High-Performance Computing,
              Full-Stack Development, Operating Systems, HCI, Game Design,
              Algorithm Design, and Software Engineering. I also served as a
              Research Assistant and Teaching Assistant for Programming Language
              Design, mentoring students and contributing to large-scale
              computational research.
            </p>
            <p className="about-me-text">
              I’m proficient in Python, C++, Java, and JavaScript with expertise
              in backend optimization, distributed systems, high-performance
              computing, concurrent programming, and transformer-based AI
              systems. My experience spans full-stack development, cloud-native
              services, LLMs, NLP, Computer Vision, database design, and
              scalable agentic AI pipelines.
            </p>
            <p className="about-me-text clear-float">
              Prior to my MS, I earned my Bachelor's in Mechanical Engineering
              from
              <strong> NIT Warangal</strong> and worked at{" "}
              <strong>Wibmo</strong> as an Associate Software Engineer, where I
              developed fraud detection systems and event-driven microservices.
              I've also held multiple internships contributing to microservice
              optimization, database systems, and web platforms.
            </p>
            <p className="about-me-text clear-float">
              My MSCS journey was intense, enriching, and deeply rewarding —
              sharpening my engineering mindset and preparing me to build
              impactful AI-driven software. I'm excited to bring this experience
              to future opportunities where I can innovate, collaborate, and
              drive meaningful impact.
            </p>
          </div>

          <div className="section education-section">
            <h3 className="section-heading">🎓 Education</h3>
            <div className="education-item">
              <h4>Master of Science in Computer Science</h4>
              <p>Purdue University Fort Wayne, Indiana</p>
              <p>January 2024 – May 2025</p>
              <p>GPA: 4.0/4.0</p>
              <p>
                <strong>Highlights:</strong> Completed 30-credit MS in 3
                semesters. Top ranker in AI, ML, HPC, and NLP-focused courses.
                Research and Teaching Assistant roles held.
              </p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Technology in Mechanical Engineering</h4>
              <p>National Institute of Technology Warangal, India</p>
              <p>August 2018 – May 2022</p>
              <p>
                <strong>Achievement:</strong> Ranked <strong>#9227</strong> out
                of 1.2 million in JEE Mains (2018) entrance test
              </p>
            </div>
          </div>

          <div className="section connect-section">
            <h3 className="section-heading">🌐 Let's Connect</h3>
            <p className="connect-text">
              I'm always excited to collaborate on projects that push boundaries
              and spark innovation. Let's connect, brainstorm, and bring fresh
              ideas to life. Whether you’re looking to build something
              remarkable or just want to share ideas, feel free to reach out!
            </p>
            <p className="quote">
              "The future belongs to those who turn curiosity into action and
              vision into reality."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
