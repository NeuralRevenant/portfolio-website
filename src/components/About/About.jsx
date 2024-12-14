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
              passionate Software Engineer with a year of experience building
              high-performance, scalable software solutions, including
              microservices and asynchronous architectures. I am currently
              pursuing my Master's degree in Computer Science at Purdue
              University, where I maintain a perfect GPA of 4.0/4.0.
            </p>
            <p className="about-me-text">
              I am proficient in several programming languages including C++,
              Python, and Java, with a strong foundation in high-performance
              computing, distributed systems, full-stack development, systems
              programming, concurrent programming, socket programming, and
              backend optimization. My expertise also includes AI/ML, deep
              learning, Natural Language Processing, Computer Vision,
              algorithms, data structures, database systems, and cloud
              computing. I completed my Bachelor's degree in Mechanical
              Engineering at the National Institute of Technology Warangal,
              India, after securing an All India Rank of 9227 out of over 1.2
              million students in the JEE Mains 2018 entrance test.
            </p>
            <p className="about-me-text clear-float">
              During my undergraduate studies, I completed two software development
              internships in my sophomore and junior years. Currently, as a
              Research Assistant at Purdue, I contribute to high-performance
              computational simulations research, manage large datasets ({">"}
              300 TB), and implement parallel processing techniques. I thrive in
              collaborative environments and am always seeking new challenges to
              push the boundaries of technology.
            </p>
            <p className="about-me-text clear-float">
              Before my graduate studies, I worked as an Associate Software
              Engineer at Wibmo (a PayU company). There, I developed and
              optimized backend services for a Risk-based Authentication Engine,
              enhancing fraud detection and prevention. I designed and developed
              microservices and asynchronous architectures to handle
              high-traffic loads. Beyond my technical skills, I possess strong
              problem-solving abilities, effective communication skills, and a
              commitment to continuous learning. I am eager to explore new
              opportunities where I can leverage my diverse skill set and
              passion for innovation. If you are seeking a dedicated and
              accomplished software engineer with a proven track record, I would
              welcome the opportunity to connect and discuss how I can
              contribute to your organization's growth and success.
            </p>
          </div>

          <div className="section education-section">
            <h3 className="section-heading">🎓 Education</h3>
            <div className="education-item">
              <h4>Master of Science in Computer Science</h4>
              <p>Purdue University, Fort Wayne, Indiana</p>
              <p>January 2024 – Expected May 2025</p>
              <p>GPA: 4.0/4.0</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Technology in Mechanical Engineering</h4>
              <p>National Institute of Technology Warangal, India</p>
              <p>August 2018 – May 2022</p>
              <p>
                <strong>Achievement:</strong> Ranked <strong>#9227</strong> out of 1.2 million in
                JEE Mains (2018) entrance test
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
