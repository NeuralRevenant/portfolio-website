import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBriefcase,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import workLogo from "../../assets/images/work.jpeg";
import purdueLogo from "../../assets/images/purdue.jpeg";
import wibmoLogo from "../../assets/images/wibmo.jpg";
import freechargeLogo from "../../assets/images/freecharge.png";
import ravginsLogo from "../../assets/images/ravgins.webp";
import "./Experience.css";

const Experience = () => {
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
    <section className="experience-section">
      <div className="experience-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={handleClose}
          aria-label="Close Experience Section"
          tabIndex="0"
          ref={closeIconRef}
          role="button"
          aria-hidden="false"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClose();
          }}
        />

        <div className="modal-content">
          <h2 className="major-heading">🚀 Experience</h2>
          <img src={workLogo} alt="Experience Logo" className="top-logo" />

          <div className="experience-item">
            <img src={purdueLogo} alt="Purdue Logo" className="company-logo" />

            <div className="role-description">
              <h3>
                <span className="icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                Teaching Assistant & Research Assistant
              </h3>
              <h4 className="experience-company">Purdue University</h4>
              <h4 className="experience-date">September 2024 - Present</h4>
              <p>
                As a Teaching Assistant for Programming Language Design, I work
                closely with professors to deliver course material, grade
                assignments, and provide academic support, ensuring students
                grasp complex programming concepts. In my Research Assistant
                role, I contribute to the <em>CosmoSim</em> project on
                high-performance computational cosmological simulations.
                Handling datasets exceeding 300TB, I implement advanced parallel
                processing techniques in Python to enhance performance in
                high-performance computing (HPC) environments.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img src={wibmoLogo} alt="Wibmo Logo" className="company-logo" />
            <div className="role-description">
              <h3>
                <span className="icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                Associate Software Engineer
              </h3>
              <h4 className="experience-company">Wibmo (a PayU company)</h4>
              <h4 className="experience-date">July 2022 - April 2023</h4>
              <p>
                At Wibmo, I developed and optimized backend services for a
                Risk-based Authentication Engine, enhancing fraud detection and
                prevention measures, such as identifying potential money
                laundering and BIN attacks. By designing and implementing a
                microservices architecture, I improved scalability and system
                reliability under high-traffic conditions. Additionally, I
                reduced latency by 20% by developing asynchronous, event-driven
                systems with RabbitMQ and Kafka, and optimized transaction
                processing time using advanced techniques. My work encompassed a
                diverse tech stack, including Spring Boot, MySQL, Couchbase,
                Redis, Node.js, Docker, Linux, and AWS, to deliver robust and
                secure solutions.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img
              src={freechargeLogo}
              alt="Freecharge Logo"
              className="company-logo"
            />
            <div className="role-description">
              <h3>
                <span className="icon">
                  <FontAwesomeIcon icon={faTools} />
                </span>
                Full Stack Developer Intern
              </h3>
              <h4 className="experience-company">Freecharge</h4>
              <h4 className="experience-date">May 2021 - July 2021</h4>
              <p>
                During my internship at Freecharge, I focused on optimizing the
                microservices architecture to improve system efficiency and
                scalability. I led memory caching initiatives, reducing database
                load and enhancing response times. Additionally, I implemented
                load-balancing strategies that optimized resource allocation,
                ensuring system stability and reliability.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img
              src={ravginsLogo}
              alt="Ravgins Logo"
              className="company-logo"
            />
            <div className="role-description">
              <h3>
                <span className="icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                Front-end Developer Intern
              </h3>
              <h4 className="experience-company">Ravgins</h4>
              <h4 className="experience-date">June 2020 - August 2020</h4>
              <p>
                As a Front-End Developer Intern at Ravgins, I built responsive
                web and mobile applications from the ground up using Angular,
                Ionic, and other front-end tools, significantly improving user
                experience and engagement. I also collaborated closely with
                cross-functional teams to deliver projects on time, aligning
                with client objectives and enhancing overall functionality and
                interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
