import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCode,
  faTools,
  faDatabase,
  faServer,
  faCogs,
  faLaptopCode,
  faBrain,
  faNetworkWired,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <section id="skills" className="skills-section">
      <section className="skills-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={handleClose}
          aria-label="Close Skills Section"
          tabIndex="0"
          role="button"
          aria-hidden="false"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClose();
          }}
        />
        <div className="content">
          <h2 className="major-heading">🛠 Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faBrain} /> AI & Machine Learning
                </h3>
                <p>
                  AI/ML, Natural Language Processing, Computer Vision, Machine
                  Learning, Deep Learning (PyTorch, TensorFlow)
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faCogs} /> Low-Level Development
                </h3>
                <p>
                  Linux System Programming, Memory Management, File I/O, Socket
                  Programming, Network Protocols and Communication
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faServer} /> High-Performance Computing
                </h3>
                <p>
                  Multi-Processing & Multi-Threading, Virtual Threads &
                  Coroutines, Asynchronous Programming, GPU Programming (CUDA),
                  MPI & OpenMP, POSIX Threads
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faCode} /> Programming Languages
                </h3>
                <p>C, C++, C#, Python, Java, JavaScript, SQL, N1QL</p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faLaptopCode} /> Frameworks
                </h3>
                <p>
                  Spring Boot, Spring Webflux, Vert.x, Node.js, Express.js,
                  Django, FastAPI, React, Angular
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faTools} /> Tools & Technologies
                </h3>
                <p>
                  Git, Docker, Redis, Apache Kafka, RabbitMQ, JMeter, Postman,
                  JDBC, Cloud: AWS, Azure, Heroku
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faDatabase} /> Databases
                </h3>
                <p>MySQL, MariaDB, PostgreSQL, MongoDB, Couchbase, Firebase</p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faProjectDiagram} /> Platforms
                </h3>
                <p>
                  GitHub, BitBucket, Jira, LeetCode, Kaggle, Hugging Face,
                  GeeksForGeeks
                </p>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-content">
                <h3>
                  <FontAwesomeIcon icon={faNetworkWired} /> Operating Systems
                </h3>
                <p>Linux, macOS, Windows</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
