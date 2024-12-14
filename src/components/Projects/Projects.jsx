import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCode } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

import lexiPhylaxLogo from "../../assets/images/img1.jpg";
import swiftNetLogo from "../../assets/images/swiftnet.webp";
import flashPointLogo from "../../assets/images/img3.jpg";
import mathEvaluatorLogo from "../../assets/images/calc.webp";
import sambhashanLogo from "../../assets/images/globe.webp";
import musicPlayerLogo from "../../assets/images/music.webp";
import planPulseLogo from "../../assets/images/planpulse.webp";

const Projects = () => {
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

  const projectsData = [
    {
      title: "PlanPulse",
      logo: planPulseLogo,
      description: [
        "Built a collaborative task management system enabling users to create boards, manage tasks, and collaborate efficiently.",
        "Designed a layered architecture with modules for user, board, and task management, ensuring modularity and scalability.",
        "Implemented JWT-based secure authentication for enhanced security and performance.",
        "Backend hosted on Google Cloud Run with Docker containerization and MongoDB for data storage.",
      ],
      technologies: [
        "React",
        "Spring Boot",
        "MongoDB",
        "Redis",
        "Google Cloud Run",
        "Docker",
        "JWT",
        "Gradle",
        "Postman"
      ],
    },
    {
      title: "Lexi-Phylax",
      logo: lexiPhylaxLogo,
      description: [
        "Developed an AI-based hate speech classifier utilizing CNNs and transformer models like BERT.",
        "Integrated FastText embeddings for effective content filtering through natural language processing.",
        "Achieved an incredible 99% accuracy in detecting and categorizing hate speech in test data.",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "FastText",
        "Scikit-learn",
        "Seaborn",
        "Matplotlib",
        "Kaggle",
        "Transformers (Hugging Face)",
      ],
    },
    {
      title: "SwiftNet",
      logo: swiftNetLogo,
      description: [
        "Designed a C++ networking library optimized for low-latency, high-throughput applications.",
        "Incorporated io_uring and kqueue-based event loops for efficient, asynchronous I/O.",
        "Leveraged modern C++ coroutines to build virtual thread task offloading, improving CPU utilization and request handling.",
      ],
      technologies: [
        "Modern C++",
        "Linux System Programming",
        "Socket Programming",
        "High-Performance Computing",
        "Asynchronous I/O",
      ],
    },
    {
      title: "FlashPoint",
      logo: flashPointLogo,
      description: [
        "Created a high-performance in-memory key-value store focused on delivering low-latency responses.",
        "Implemented event loop-based networking with I/O multiplexing for efficient network management.",
        "Utilized event-driven asynchronous I/O and concurrent connection management.",
        "Built a lightweight thread pool to handle computationally intensive tasks efficiently.",
        "Integrated efficient resource management and pipelined request/response protocol.",
      ],
      technologies: [
        "C",
        "C++",
        "Data Structures and Algorithms",
        "Socket Programming",
        "Linux System Programming",
        "High-Performance Computing",
      ],
    },
    {
      title: "Math Evaluator",
      logo: mathEvaluatorLogo,
      description: [
        "Developed a mathematical expression evaluator capable of parsing and evaluating complex expressions.",
        "Also supports operations like addition, subtraction, and multiplication on matrices.",
        "Handles numbers and operations on numbers of any size.",
      ],
      technologies: ["C++", "Data Structures and Algorithms"],
    },
    {
      title: "Sambhashan",
      logo: sambhashanLogo,
      description: [
        "Built a social networking and chat web application inspired by Facebook.",
        "Utilized Node.js, EJS, and MongoDB following the MVC design pattern for a structured, maintainable codebase.",
        "Implemented features like authentication, session management, messaging, and multimedia sharing.",
        "Included functionalities such as image/video uploads, friend requests, and group sharing.",
      ],
      technologies: [
        "Node.js",
        "MongoDB",
        "RESTful APIs",
        "EJS",
        "MVC Pattern",
      ],
    },
    {
      title: "Music Player",
      logo: musicPlayerLogo,
      description: [
        "Developed a music player website with comprehensive user authentication.",
        "Implemented audio/video upload and download capabilities.",
        "Added search filters and personalized playlist options.",
        "Included features like custom song repetition mode for enhanced user experience.",
      ],
      technologies: ["EJS", "Node.js", "MongoDB", "MySQL"],
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-modal">
        <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={handleClose}
          aria-label="Close Projects Section"
          tabIndex="0"
          ref={closeIconRef}
          role="button"
          aria-hidden="false"
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClose();
          }}
        />

        <div className="modal-content">
          <h2 className="major-heading">🚀 Personal Projects</h2>

          {projectsData.map((project, index) => (
            <div className="project-item" key={index}>
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="project-logo"
              />

              <div className="project-description">
                <h3>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  {project.title}
                </h3>
                <ul className="description-list">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="technologies">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
