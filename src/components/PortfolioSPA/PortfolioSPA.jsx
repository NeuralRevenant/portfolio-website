import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faCode,
  faBriefcase,
  faTools,
  faDatabase,
  faServer,
  faCogs,
  faBrain,
  faNetworkWired,
  faProjectDiagram,
  faRocket,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import DynamicBackground from '../DynamicBackground/DynamicBackground';
import FloatingObject from '../FloatingObject/FloatingObject';
import './PortfolioSPA.scss';

// Import images
import profileImage from "../../assets/images/b_photo.jpeg";
import purdueLogo from "../../assets/images/purdue.jpeg";
import wibmoLogo from "../../assets/images/wibmo.jpg";
import freechargeLogo from "../../assets/images/freecharge.png";
import ravginsLogo from "../../assets/images/ravgins.webp";
import mieLogo from "../../assets/images/MIE_logo.webp";

// Project images
import lexiPhylaxLogo from "../../assets/images/img1.jpg";
import swiftNetLogo from "../../assets/images/swiftnet.webp";
import planPulseLogo from "../../assets/images/planpulse.webp";
import medicalAssistantLogo from "../../assets/images/medical-assistant.png";
import insightAILogo from "../../assets/images/insightAI.png";
import arenaLogo from "../../assets/images/arena-uav.png";

const PortfolioSPA = () => {
  const [activeSection, setActiveSection] = useState('hero');
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
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef
  }), []);

  // Memoized data to prevent re-renders
  const projectsData = useMemo(() => [
    {
      title: "Agentic UAV Telemetry Assistant (Volunteer project with ArenaAI)",
      logo: arenaLogo,
      description: [
        "As part of a volunteer initiative with ArenaAI, built an agentic AI backend to analyze UAV telemetry logs via natural-language chat.",
        "Implemented a ReAct-style multi-agent architecture (LangGraph + LangChain) with dynamic query planning and step-wise tool execution.",
        "Integrated short-term agentic memory, FAISS-based long-term agentic memory, and LLM-driven entity tracking for persistent, context-aware reasoning.",
        "Used GPT-4o for inference, OpenAI embeddings for indexing, real-time streaming APIs (FastAPI + WebSockets), and a custom Vue.js frontend.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "WebSockets",
        "Vue.js",
        "LangChain",
        "LangGraph",
        "GPT-4o & OpenAI embeddings",
        "FAISS",
        "MAVLink",
        "ReAct",
        "Agentic AI",
      ],
    },
    {
      title: "Medical Assistant (Agentic RAG)",
      logo: medicalAssistantLogo,
      description: [
        "Engineered an advanced Agentic RAG system for real-time natural language querying of EHR and clinical documents.",
        "Features GPT-powered semantic reasoning, dynamic query planning, and self-refining retrieval loops.",
        "Scalable FastAPI backend + custom Next.js chatbot UI with hybrid OpenSearch search.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "OpenSearch",
        "LLMs (GPT-4o & OpenAI)",
        "Hybrid Search",
        "Agentic RAG",
      ],
    },
    {
      title: "InSightAI (Multimodal Agentic VQA)",
      logo: insightAILogo,
      description: [
        "Built a real-time Visual Question Answering (VQA) system combining vision transformers with LLM-based reasoning over general-purpose images and clinical visual content.",
        "Integrated an Agentic RAG loop with dynamic GPT-4o planning, enabling the system to reason over multimodal inputs and perform self-refining document + image retrieval across OpenSearch.",
        "Utilized CLIP ViT-L/14 for visual embeddings and LLaMA-3 8B for response synthesis, fine-tuned for vision-language alignment over the VQAv2 dataset.",
        "Deployed using FastAPI and GPU-optimized backends, delivering high-throughput VQA inference with support for memory-augmented query refinement and multimodal grounding.",
      ],
      technologies: [
        "Python", "FastAPI", "PyTorch", "Transformers (Hugging Face)", "OpenSearch", "CLIP ViT-L/14", "LLaMA-3 8B", "VQAv2", "Agentic RAG", "ReAct", "Agentic AI", "Vision-Language Models", "Multimodal Fusion", "LLM Planner", "GPU Inference", "Docker"
      ],
    },
    {
      title: "Lexi-Phylax",
      logo: lexiPhylaxLogo,
      description: [
        "Developed an AI-powered hate speech classification engine leveraging transformer-based models.",
        "Initially trained a BERT-based model from Hugging Face on custom datasets and deployed it for inference.",
        "Built a custom transformer model with ~400M parameters, fine-tuned specifically for nuanced hate speech detection and classification.",
        "Optimized model training and evaluation pipelines using advanced techniques in PyTorch, improving accuracy and efficiency.",
      ],
      technologies: [
        "Python", "PyTorch", "Transformers (Hugging Face)", "Custom Transformer Model", "Deep Learning", "Scikit-learn"
      ],
    },
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
        "React", "Spring Boot", "MongoDB", "Redis", "Google Cloud Run", "Docker", "JWT", "Gradle", "Postman"
      ],
    },
    {
      title: "SwiftNet",
      logo: swiftNetLogo,
      description: [
        "Designed a C++ networking library optimized for low-latency, high-throughput applications.",
        "Incorporated io_uring and kqueue-based event loops for efficient, asynchronous I/O.",
        "Leveraged modern C++ coroutines to build virtual thread task offloading, improving CPU utilization and request handling.",
        "This library/framework is designed keeping in mind the good features from both the Node.js and the Spring Boot frameworks where one offers asynchronous request handling and the other parallel programming.",
      ],
      technologies: [
        "Modern C++", "Linux System Programming", "Socket Programming", "High-Performance Computing", "Asynchronous I/O"
      ],
    }
  ], []);

  // Experience data - memoized for performance
  const experienceData = useMemo(() => [
    {
      title: "Software Development Intern",
      company: "Medical Informatics Engineering",
      logo: mieLogo,
      date: "January 2025 - May 2025",
      description: [
        "Designed and built a Retrieval-Augmented Semantic Search (RASS) Engine to enable real-time, intelligent querying of EHR and clinical documents through natural language, empowering healthcare professionals to interact with both structured and unstructured data.",
        "Developed a scalable FastAPI backend and integrated a Next.js-based chatbot UI for seamless user interaction, supported by OpenSearch, RAG pipelines, LLMs, and NLP techniques.",
        "Utilized transformer models for query intent classification and NER, and fine-tuned hybrid/semantic retrieval using ANN indices, embedding models, and metadata filtering to boost both accuracy and response speed.",
        "Integrated Agentic AI capabilities through dynamic query planning and self-refining RAG loops, replacing traditional NER/intent pipelines with GPT-powered semantic reasoning for deeper document understanding.",
        "Built an LLM proxy layer to dynamically route requests across OpenAI, Azure, and Hugging Face models, enabling flexible model selection and optimized performance across tasks."
      ],
    },
    {
      title: "Teaching Assistant & Research Assistant",
      company: "Purdue University",
      logo: purdueLogo,
      date: "September 2024 - Jan 2025",
      description: "As a Teaching Assistant for the Programming Language Design course, I worked closely with the professor to deliver course material, grade assignments, and provide academic support. In my Research Assistant role, I contributed to the CosmoSim research on high-performance computational cosmological simulations dealing with around 300TB of data."
    },
    {
      title: "Associate Software Engineer",
      company: "Wibmo (a PayU company)",
      logo: wibmoLogo,
      date: "July 2022 - April 2023",
      description: [
        "Engineered and optimized backend services for a Risk-Based Authentication Engine used in secure payment gateway systems, improving fraud detection for threats like money laundering and BIN attacks.",
        "Developed robust database migration scripts to ensure seamless data transition from CouchbaseDB to MySQL/MariaDB.",
        "Designed and implemented scalable, asynchronous microservices using Java (Spring Boot), Node.js, Kafka, RabbitMQ, and MySQL/Couchbase, resulting in a 20% reduction in transaction latency and increased system reliability."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Freecharge",
      logo: freechargeLogo,
      date: "May 2021 - July 2021",
      description: "Developed backend services to support financial transaction systems for banking and payment operations, leveraging Node.js and MongoDB to optimize microservices, enhance caching, and improve load balancing for greater system efficiency and reliability."
    },
    {
      title: "Front-end Developer Intern",
      company: "Ravgins",
      logo: ravginsLogo,
      date: "June 2020 - August 2020",
      description: "Designed and built responsive web and mobile interfaces for the influencer marketing platform Wobb from scratch, using modern front-end frameworks and human-computer interaction principles to enhance user engagement and experience."
    }
  ], []);

  // Skills data - memoized for performance
  const skillsData = useMemo(() => [
    {
      category: "AI & Machine Learning",
      icon: faBrain,
      subskills: [
        {
          title: "Core Areas",
          items: [
            "Deep Learning, Classical Machine Learning, Generative AI, Causal Inference",
            "Reinforcement Learning (RLHF), Meta-Learning, Self-Supervised Learning, Semi-Supervised Learning, Curriculum Learning",
            "Natural Language Processing, Agentic AI, Model-Context Protocols (MCP), Chain-of-Thought Reasoning, Self-Refining Agents, Model Evaluation & Interpretability"
          ]
        },
        {
          title: "Retrieval & RAG Systems",
          items: [
            "Retrieval-Augmented Generation (RAG)",
            "Vector Databases (OpenSearch/ElasticSearch, FAISS, Pinecone)",
            "Semantic Search, Temporal/Context-Aware Retrieval, LangChain-based pipelines"
          ]
        },
        {
          title: "Computer Vision",
          items: [
            "CNNs (AlexNet, VGG, Inception, ResNet, DenseNet)",
            "Vision & Vision Language Models (ViT, CLIP)",
            "Image Captioning, Visual Question Answering (VQA), GANs, VAEs, Stable Diffusion"
          ]
        },
        {
          title: "NLP",
          items: [
            "Named Entity Recognition, Text Classification, Question Answering",
            "Semantic Parsing, Machine Translation, Text Summarization, Document Understanding, Intent Classification"
          ]
        },
        {
          title: "Frameworks & Tools",
          items: [
            "PyTorch, TensorFlow, Hugging Face Transformers, Ray, LangChain, OpenAI APIs, Ollama, Weights & Biases"
          ]
        }
      ]
    },
    {
      category: "Low-Level Development",
      icon: faCogs,
      skills: "Linux System Programming, Memory Management, File I/O, Socket Programming, Network Protocols and Communication"
    },
    {
      category: "High-Performance Computing",
      icon: faServer,
      skills: "Multi-Processing & Multi-Threading, Virtual Threads & Coroutines, Asynchronous Programming, GPU Programming (CUDA), MPI & OpenMP, POSIX Threads"
    },
    {
      category: "Programming Languages",
      icon: faCode,
      skills: "C, C++, C#, Python, Java, JavaScript, SQL, N1QL"
    },
    {
      category: "Frameworks",
      icon: faLaptopCode,
      skills: "Spring Boot, Spring Webflux, Vert.x, Node.js, Express.js, Django, FastAPI, React, Angular"
    },
    {
      category: "Tools & Technologies",
      icon: faTools,
      skills: "Git, Docker, Redis, Apache Kafka, RabbitMQ, JMeter, Postman, JDBC, Cloud: AWS, Azure, Heroku"
    },
    {
      category: "Databases",
      icon: faDatabase,
      skills: "MySQL, MariaDB, PostgreSQL, MongoDB, Couchbase, Firebase"
    },
    {
      category: "Platforms",
      icon: faProjectDiagram,
      skills: "GitHub, BitBucket, Jira, LeetCode, Kaggle, Hugging Face, GeeksForGeeks"
    },
    {
      category: "Operating Systems",
      icon: faNetworkWired,
      skills: "Linux, macOS, Windows"
    }
  ], []);

  // Dynamic role animation setup
  const roles = useMemo(() => [
    "a Computer Scientist",
    "a Software Engineer",
    "an AI & ML Engineer"
  ], []);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500); // switch every 3.5s
    return () => clearInterval(interval);
  }, [roles.length]);

  // Throttled scroll handler for better performance
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

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  const scrollToSection = (section) => {
    setIsScrolling(true);
    sectionRefs[section].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.main-nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      
      {/* Floating Objects */}
      <FloatingObject hide={activeSection === 'hero'} />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />}

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">
          <FontAwesomeIcon icon={faRocket} />
          <span>Kaushik</span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile-open' : ''}`}>
          {Object.keys(sectionRefs).map((section) => {
            const label = section === 'hero'
              ? 'Home'
              : section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <li key={section} style={{textAlign: 'center', width: '100%'}}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {label}
                </button>
              </li>
            );
          })}
          <li style={{textAlign: 'center', width: '100%'}}>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Kaushik_Chaturvedula_Resume.pdf"
              className="nav-link resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="section hero-section">
        <div className="hero-content">
          <div className="hero-icon-container">
            <FontAwesomeIcon icon={faLaptopCode} className="hero-icon" />
          </div>
          <h1 className="hero-name">KAUSHIK CHATURVEDULA</h1>
          <p className="hero-tagline">
            Innovative Software Engineer Crafting Solutions for Tomorrow
          </p>
          <p className="hero-intro">
            Welcome to my professional portfolio. Explore my work to learn more
            about my skills, projects, and the value I can bring to your team.
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
              href="https://leetcode.com/u/ArrayArtisan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faCode} />
            </a>
            <a href="mailto:kaushikchaturvedula@gmail.com" className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('about')}
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
              <h3 className="about-role">Hello, My name is <strong>Kaushik Chaturvedula</strong>. I'm <span key={roleIndex} className="dynamic-role fade-in">{roles[roleIndex]}</span></h3>
              <p>
                who loves solving hard problems spanning Machine Learning, Computer Vision, NLP, and scalable backend systems.
              </p>
              <p>
                I actively build solutions in generative AI, causal inference, retrieval-augmented generation (RAG), and vision-language modelling using techniques such as GANs, VAEs, CNNs, ViT, and transformer-based VLMs.
              </p>
              <p>
                My work combines prompt-engineering, synthetic-data pipelines, Ray-powered distributed training, and in-house model evaluation to deliver adaptive, production-ready AI systems.
              </p>
              <p>
                Away from code, I'm a polymath deeply curious about robotics, mechanical engineering, biology, and philosophy. I thrive on learning and fusing creativity with technical precision to craft solutions that elevate how we live, think, and connect.
              </p>
              <p>
                I recently graduated with a Master of Science in Computer Science
                from <strong>Purdue University Fort Wayne</strong> with a perfect GPA
                of 4.0/4.0. I completed the 30-credit-hour program in just three
                semesters, ranking among the top in several advanced courses.
              </p>
            </div>
          </div>
          
          <div className="education-section">
            <h3 className="subsection-title">🎓 Education</h3>
            <div className="education-grid">
              <div className="education-item">
                <h4>Master of Science in Computer Science</h4>
                <p className="institution">Purdue University Fort Wayne, Indiana</p>
                <p className="date">January 2024 – May 2025</p>
                <p className="gpa">GPA: 4.0/4.0</p>
                <p className="highlight">
                  <strong>Highlights:</strong> Completed 30-credit MS in 3 semesters. 
                  Top ranker in several courses with excellent understanding of AI, ML, 
                  HPC, and software engineering.
                </p>
              </div>
              <div className="education-item">
                <h4>Bachelor of Technology in Mechanical Engineering</h4>
                <p className="institution">National Institute of Technology Warangal, India</p>
                <p className="date">August 2018 – May 2022</p>
                <p className="achievement">
                  <strong>Achievement:</strong> Ranked <strong>#9227</strong> out
                  of 1.2 million in JEE Mains (2018) entrance test
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="section skills-section">
        <div className="container">
          <h2 className="section-title">🛠 Skills & Expertise</h2>
          <div className="skills-masonry-grid">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`skill-tile${index === 0 ? ' skill-tile-large' : ''}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="skill-icon-large">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h3 className="skill-title">{skill.category}</h3>
                {/* Render sub-containers for AI & ML tile, else normal list/desc */}
                {skill.subskills ? (
                  <div className="ai-subskills-grid">
                    {skill.subskills.map((sub, i) => (
                      <div className="ai-subskill-box" key={i}>
                        <div className="ai-subskill-title">{sub.title}</div>
                        <ul className="ai-subskill-list">
                          {sub.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : Array.isArray(skill.skills) ? (
                  <ul className="skill-list">
                    {skill.skills.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="skill-description">{skill.skills}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="section experience-section">
        <div className="container">
          <h2 className="section-title">🚀 Professional Experience</h2>
          <div className="experience-timeline">
            {experienceData.map((exp, index) => (
              <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="experience-logo">
                  <img src={exp.logo} alt={`${exp.company} Logo`} />
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">
                      <FontAwesomeIcon icon={faBriefcase} style={{marginRight: '5px'}}/>
                      {exp.title}
                    </h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-date">{exp.date}</p>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="experience-description-list">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="experience-description">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="section projects-section">
        <div className="container">
          <h2 className="section-title">💼 Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.logo} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-description">
                    {Array.isArray(project.description) ? (
                      <ul className="project-description-list">
                        {project.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section contact-section">
        <div className="container">
          <h2 className="section-title">💬 Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always excited to collaborate on projects that push boundaries
                and spark innovation. Let's connect, brainstorm, and bring fresh
                ideas to life.
              </p>
              <div className="contact-methods">
                <a href="mailto:kaushikchaturvedula@gmail.com" className="contact-method">
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
          <p>"The future belongs to those who turn curiosity into action and vision into reality."</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSPA; 