import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faBriefcase,
  faRocket,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import DynamicBackground from "../DynamicBackground/DynamicBackground";
import FloatingObject from "../FloatingObject/FloatingObject";
import AIBrain3D from "../AIBrain3D/AIBrain3D";
import "./PortfolioSPA.scss";

// Import images
import profileImage from "../../assets/images/photo.webp";
import purdueLogo from "../../assets/images/purdue.jpeg";
import wibmoLogo from "../../assets/images/wibmo.jpg";
import freechargeLogo from "../../assets/images/freecharge.png";
import ravginsLogo from "../../assets/images/ravgins.webp";
import mieLogo from "../../assets/images/MIE_logo.webp";
import vistexLogo from "../../assets/images/vistex_logo.jpeg";

// Project images
import InsightAILogo from "../../assets/images/insightAI.png";
import HumanoidLogo from "../../assets/images/balance.png";
import DeepSightLogo from "../../assets/images/obj_det.png";
import CancerClassificationLogo from "../../assets/images/cancer_classification.png";
import UAVAssistantLogo from "../../assets/images/uav_assistant.png";
import SwiftNetLogo from "../../assets/images/swiftnet.png";
import PlanPulseLogo from "../../assets/images/planpulse.png";
import ClinicaLogo from "../../assets/images/clinica.png";

const PortfolioSPA = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    []
  );

  // Updated Projects Data
  const projectsData = useMemo(
    () => [
      {
        title: "Clinica (Kiroween Hackathon)",
        logo: ClinicaLogo,
        description:
          "Intelligent medical assistant and full-stack platform built during the Kiroween hackathon for querying and analyzing medical/EHR data via natural language, combining FHIR APIs, agentic AI reasoning, and interactive graph visualizations to deliver secure, HIPAA-aligned insights.",
        technologies: [
          "Next.js",
          "FastAPI",
          "FHIR",
          "Neo4j",
          "Agentic AI",
          "Graph Visualizations",
          "HIPAA Compliance",
        ],
        highlights: ["Hackathon Project", "FHIR APIs", "Agentic Reasoning"],
      },
      {
        title: "Humanoid Balance and Locomotion via Deep Reinforcement Learning",
        logo: HumanoidLogo,
        description:
          "Developing a simulated humanoid control system using PPO and MDP frameworks to achieve dynamic balance and adaptive gait learning in physics-based environments. Designed reward shaping and policy optimization for stable, intelligent locomotion.",
        technologies: [
          "Python",
          "PyTorch",
          "Deep Learning",
          "Reinforcement Learning",
          "Physics Simulation",
        ],
        highlights: ["Reinforcement Learning", "Policy Optimization", "Adaptive Gait Learning"],
      },
      {
        title: "DeepSight",
        logo: DeepSightLogo,
        description:
          "Building advanced architectures like Mask R-CNN, FC-DenseNet, and Mask2Former for context-aware image segmentation to improve mAP accuracy, boundary precision, and pixel-level performance.",
        technologies: [
          "PyTorch",
          "Mask R-CNN",
          "FC-DenseNet",
          "Mask2Former",
          "Transfer Learning",
          "Computer Vision",
        ],
        highlights: ["Instance Segmentation", "Context-Aware Modeling", "High mAP Accuracy"],
      },
      {
        title: "Cancer Classification using CNN",
        logo: CancerClassificationLogo,
        description:
          "Designed and trained DenseNet-based U-Net architectures for cancer image classification, achieving improved diagnostic accuracy and interpretability.",
        technologies: [
          "PyTorch",
          "DenseNet",
          "U-Net",
          "CNN",
          "Medical Imaging",
          "Deep Learning",
        ],
        highlights: ["Medical AI", "Diagnostic Accuracy", "U-Net Architecture"],
      },
      {
        title: "UAV Telemetry Assistant (Volunteer Project with ArenaAI)",
        logo: UAVAssistantLogo,
        description:
          "Designed and developed a multi-agent LangGraph system enabling natural-language questions on any flight detail with both short and long-term memory, capable of reasoning over MAVLink log data to explain flight events and provide real-time insights.",
        technologies: [
          "FastAPI",
          "LangChain",
          "LangGraph",
          "Multi-Agent Systems",
          "PyMavlink",
          "Natural Language Processing",
          "Generative AI",
          "Prompt Engineering",
        ],
        highlights: ["Multi-Agent Architecture", "Long-term Memory", "Real-time Analysis"],
      },
      {
        title: "InSightAI (Multimodal VQA)",
        logo: InsightAILogo,
        description:
          "Real-time Visual Question Answering combining vision transformers with LLM reasoning. CLIP ViT-L/14 embeddings, LLaMA-3 8B synthesis, agentic RAG with GPT-4o planning over multimodal inputs.",
        technologies: [
          "PyTorch",
          "CLIP",
          "LLaMA-3",
          "GPT-4o",
          "OpenSearch",
          "FastAPI",
          "VQAv2",
          "Docker",
        ],
        highlights: ["Vision-Language", "Multimodal Fusion", "GPU Inference"],
      },
      {
        title: "SwiftNet",
        logo: SwiftNetLogo,
        description:
          "High-performance C++ networking library using io_uring, kqueue, and coroutines, optimized for CPU efficiency and high throughput.",
        technologies: [
          "Modern C++",
          "io_uring",
          "kqueue",
          "Coroutines",
          "Async I/O",
          "Linux",
        ],
        highlights: ["High Performance", "Async I/O", "CPU Optimized"],
      },
      {
        title: "PlanPulse (Task Management)",
        logo: PlanPulseLogo,
        description:
          "Developed a cloud-native task management system with layered architecture and microservices for real-time collaboration. Implemented JWT authentication, Redis caching, and Dockerized deployment on Google Cloud Run with Spring Boot, React, and MongoDB, ensuring scalability, modularity, and secure access control.",
        technologies: [
          "React",
          "Spring Boot",
          "MongoDB",
          "Redis",
          "Google Cloud Run",
          "Docker",
          "JWT",
          "Microservices",
        ],
        highlights: ["Cloud-Native", "Real-time Collaboration", "Secure Access Control"],
      },
    ],
    []
  );

  // Updated Experience Data
  const experienceData = useMemo(
    () => [
      {
        title: "Data Scientist",
        company: "Vistex",
        logo: vistexLogo,
        date: "November 2025 – Present",
        location: "Hoffman Estates, Illinois, U.S.",
        type: "Internship",
        description:
          "Developing machine learning and data science pipelines to analyze revenue flows and optimize financial strategies for enterprise clients.",
        achievements: [
          "Built ML/data science pipelines using GCP, BigQuery, and Vertex AI to analyze revenue flows and optimize financial strategies for enterprise clients with generative AI-based analysis and insights.",
        ],
      },
      {
        title: "Software Developer",
        company: "Medical Informatics Engineering",
        logo: mieLogo,
        date: "January 2025 – October 2025",
        location: "Fort Wayne, Indiana, U.S.",
        type: "Full-time",
        description:
          "Built and optimized production-grade healthcare platforms by developing high-performance backend services and integrating agentic AI tools for real-time clinical interactions and intelligent EHR data retrieval.",
        achievements: [
          "Built and optimized healthcare platforms (WebChart, BlueHive, Ozwell) by developing high-performance backend services and integrating agentic AI tools (RAG, MCP, LLM-based planning) to enable real-time clinical interactions, intelligent EHR data retrieval, and scalable workflow automation.",
          "Architected full-stack pipelines with Node.js/Fastify, FastAPI, and Next.js, integrating MongoDB, relational databases, and OpenSearch to handle high-throughput ingestion and low-latency retrieval with strict reliability guarantees.",
          "Led migration of a large API suite from a legacy Meteor platform to Node.js/Fastify, increasing system speed and developer efficiency while meeting tight deadlines.",
          "Collaborated with cross-functional engineering teams to define platform standards and improve internal development workflows.",
        ],
      },
      {
        title: "Teaching Assistant",
        company: "Purdue University",
        logo: purdueLogo,
        date: "September 2024 – January 2025",
        type: "Part-time",
        description:
          "Programming Language Design Course: Assisted in delivering course material, grading assignments, and providing academic support to students. Involved in enhancing the overall educational experience for students through various teaching-related tasks.",
        achievements: [],
      },
      {
        title: "Research Assistant",
        company: "Purdue University",
        logo: purdueLogo,
        date: "September 2024 – January 2025",
        type: "Part-time",
        description:
          "Contributed to high-performance computational cosmological simulations (CosmoSim) research handling 300TB datasets.",
        achievements: [
          "Implemented parallel processing techniques to improve performance in HPC environments.",
        ],
      },
      {
        title: "Associate Software Engineer",
        company: "Wibmo (a PayU company)",
        logo: wibmoLogo,
        date: "July 2022 – April 2023",
        location: "Bengaluru, India",
        type: "Full-time",
        description:
          "Designed, developed, and tested distributed backend services for a Risk-Based Authentication system securing global payment gateways, improving fraud detection and overall platform reliability.",
        achievements: [
          "Designed and implemented scalable cloud-native Java Spring Boot and Node.js based distributed microservices for a Risk-Based Authentication engine used in global payment systems, improving fraud detection, system reliability, and strengthening throughput handling.",
          "Developed event-driven services using Kafka and RabbitMQ to support asynchronous workflows and low-latency transaction processing, reducing average transaction latency by around 20% in production",
          "Built robust database migration pipelines from CouchbaseDB to MariaDB, ensuring data consistency and zero downtime during deployment.",
          "Collaborated across QA and DevOps teams to automate testing, streamline CI/CD pipelines, and deliver secure, production-grade releases.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Freecharge",
        logo: freechargeLogo,
        date: "May 2021 – July 2021",
        location: "Mumbai, India",
        type: "Internship",
        description:
          "Built scalable financial transaction APIs and modular microservices to support secure, fault-tolerant payment workflows.",
        achievements: [
          "Built scalable financial transaction APIs with Node.js/Express.js and MongoDB, enhancing efficiency and maintainability.",
          "Developed modular microservices with Docker and AWS ECS to handle secure, fault-tolerant payment workflows, reducing transaction failures and improving reliability.",
        ],
      },
      {
        title: "Front-end Developer",
        company: "Ravgins",
        logo: ravginsLogo,
        date: "June 2020 – August 2020",
        location: "New Delhi, India",
        type: "Internship",
        description:
          "Designed and developed responsive web and mobile interfaces for Wobb, an influencer marketing platform, using React, Angular, and Ionic. Focused on creating clean, intuitive UIs and seamless user experiences across devices.",
        achievements: [
          "Built and optimized full-stack components with modern front-end frameworks, HTML, CSS, and JavaScript/TypeScript to enhance engagement and usability.",
          "Implemented responsive design principles that improved interaction quality and cross-platform performance.",
          "Collaborated with a cross-functional team to deliver projects on time, aligning with objectives.",
        ],
      },
    ],
    []
  );


  // Dynamic role animation
  const roles = useMemo(
    () => [
      "a Computer Scientist",
      "a Software Engineer",
      "an AI & ML Engineer",
      "a Full Stack Developer",
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const sections = Object.keys(sectionRefs);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = sectionRefs[section].current;
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(section);
        break;
      }
    }
  }, [isScrolling, sectionRefs]);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  const scrollToSection = (section) => {
    setIsScrolling(true);
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".main-nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="portfolio-spa">
      <DynamicBackground />
      <FloatingObject hide={activeSection === "hero"} />

      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">
          <FontAwesomeIcon icon={faRocket} />
          <span>Kaushik</span>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        <ul
          className={`nav-links ${
            isMobileMenuOpen ? "nav-links-mobile-open" : ""
          }`}
        >
          {Object.keys(sectionRefs).map((section) => {
            const label =
              section === "hero"
                ? "Home"
                : section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <li key={section}>
                <button
                  className={`nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hero Section with 3D AI Brain */}
      <section id="hero" ref={heroRef} className="section hero-section">
        <div className="hero-brain-container">
          <AIBrain3D />
        </div>
        <div className="hero-content">
          <div className="hero-icon-container">
            <FontAwesomeIcon icon={faLaptopCode} className="hero-icon" />
          </div>
          <h1 className="hero-name">KAUSHIK CHATURVEDULA</h1>
          <p className="hero-tagline">
            Crafting Intelligence Through Code
          </p>
          <p className="hero-intro">
            Building next-generation AI and software systems that think, adapt, and scale.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/kaushikchaturvedula"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/NeuralRevenant"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:kaushikchaturvedula@gmail.com"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <button
            className="cta-button"
            onClick={() => scrollToSection("about")}
          >
            Explore My Journey
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="section about-section">
        <div className="container">
          <h2 className="section-title">🌟 About Me</h2>
          
          <div className="about-content">
            <div className="about-image">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="about-text">
              <h3 className="about-role">
                Hello, I'm <strong>Kaushik Chaturvedula</strong> —{" "}
                <span key={roleIndex} className="dynamic-role fade-in">
                  {roles[roleIndex]}
                </span>
              </h3>
              <p>
                I build intelligent, scalable software that merges <strong>deep learning</strong>, <strong>agentic reasoning</strong>, and <strong>distributed system design</strong>. 
                and deploying adaptive AI systems to production environments.
              </p>
              <p>
                At Medical Informatics Engineering (MIE), I develop <strong>Agentic AI</strong>, <strong>RAG</strong>, and <strong>MCP</strong> pipelines powering platforms like <strong>BlueHive</strong>, <strong>Ozwell</strong>, and <strong>WebChart</strong>, integrating <strong>Fastify</strong>, <strong>OpenSearch</strong>, and Efficient Database Systems for real-time intelligence.
                My experience spans machine learning, deep learning, reinforcement learning, and agentic orchestration (LangChain, LangGraph), as well as cloud-native backend engineering in C++, Python, Java, and JavaScript, building adaptive systems that learn, reason, and scale.
              </p>
              <p>
                Graduated with an <strong>MS in Computer Science from Purdue University</strong> with a perfect <strong>4.0/4.0 GPA</strong>, completing 30 credits in just 3 semesters 
                while ranking at the top in advanced AI/ML and High-Performance Computing (HPC) courses.
              </p>
            </div>
          </div>

          <div className="education-section">
            <h2 className="section-title">🎓 Education</h2>
            <div className="education-grid">
              <div className="education-item">
                <h4>Master of Science in Computer Science</h4>
                <p className="institution">Purdue University, Indiana</p>
                <p className="date">January 2024 – May 2025</p>
                <p className="gpa">GPA: 4.0/4.0</p>
                <p className="highlight">
                  <strong>Highlights:</strong> Perfect GPA across 30 credits in 3 semesters. 
                  Top performer in AI/ML, HPC, and Software Engineering courses.
                </p>
              </div>
              <div className="education-item">
                <h4>Bachelor of Technology in Mechanical Engineering</h4>
                <p className="institution">
                  National Institute of Technology Warangal, India
                </p>
                <p className="date">August 2018 – May 2022</p>
                <p className="achievement">
                  <strong>Achievement:</strong> Ranked <strong>#9227</strong> out of 
                  1.2 million+ in JEE Mains/Advanced (2018)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={experienceRef}
        className="section experience-section"
      >
        <div className="container">
          <h2 className="section-title">🚀 Professional Experience</h2>
          <div className="experience-timeline">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="experience-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="experience-timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="experience-logo">
                  <img src={exp.logo} alt={`${exp.company} Logo`} />
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="title-row">
                      <h3 className="experience-title">
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          style={{ marginRight: "8px" }}
                        />
                        {exp.title}
                      </h3>
                      <span
                        className={`experience-type ${
                          exp.type === "Internship" ? "experience-type-internship" : ""
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="experience-company">{exp.company}</h4>
                    <div className="experience-meta">
                      <p className="experience-date">{exp.date}</p>
                      {exp.location ? (
                        <>
                          <span className="meta-separator">•</span>
                          <p className="experience-location">{exp.location}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="section projects-section"
      >
        <div className="container">
          <h2 className="section-title">💼 Featured Projects</h2>
          <div className="projects-list">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`project-item ${index % 2 === 1 ? 'project-item-reverse' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-image-container">
                  <div className="project-image-wrapper">
                    <img src={project.logo} alt={project.title} />
                    <div className="image-overlay"></div>
                  </div>
                </div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-item">
                          <FontAwesomeIcon icon={faRocket} style={{ marginRight: '6px' }} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="section contact-section"
      >
        <div className="container">
          <h2 className="section-title">💬 Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm excited to collaborate on projects that push boundaries and 
                spark innovation. Let's connect and bring ideas to life.
              </p>
              <div className="contact-methods">
                <a
                  href="mailto:kaushikchaturvedula@gmail.com"
                  className="contact-method"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  kaushikchaturvedula@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/kaushikchaturvedula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/NeuralRevenant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub Profile
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Kaushik Chaturvedula. All rights reserved.</p>
          <p>
            "Building the future, one algorithm at a time."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSPA;
