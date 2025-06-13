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
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import DynamicBackground from '../DynamicBackground/DynamicBackground';
import FloatingObject from '../FloatingObject/FloatingObject';
import './PortfolioSPA.scss';

// Import images
import profileImage from "../../assets/images/purdue.jpeg";
import purdueLogo from "../../assets/images/purdue.jpeg";
import wibmoLogo from "../../assets/images/wibmo.jpg";
import freechargeLogo from "../../assets/images/freecharge.png";
import ravginsLogo from "../../assets/images/ravgins.webp";
import mieLogo from "../../assets/images/MIE_logo.webp";

// Project images
import lexiPhylaxLogo from "../../assets/images/img1.jpg";
import swiftNetLogo from "../../assets/images/swiftnet.webp";
import planPulseLogo from "../../assets/images/planpulse.webp";
import semanticQueryEngineLogo from "../../assets/images/semantic-query-engine.webp";
import medicalChatbotLogo from "../../assets/images/medical-chatbot.webp";
import insightAILogo from "../../assets/images/insightAI.png";

const PortfolioSPA = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
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
      title: "Medical Chatbot (Agentic RAG)",
      logo: medicalChatbotLogo,
      description: [
        "Built a powerful agentic conversational AI assistant enabling natural language queries on structured and unstructured EHR and clinical documents.",
        "Integrated Agentic Retrieval-Augmented Generation (Agentic RAG) using an LLM-based planner → executor loop to reason, retrieve, and synthesize responses over semantically indexed OpenSearch data.",
        "Initially built a traditional RAG engine and then replaced traditional intent + NER pipelines with GPT-4o-based semantic understanding, enabling self-refining retrieval loops, dynamic tool usage, and clarification-driven conversation.",
        "Deployed via FastAPI and Next.js with memory-augmented chat, metadata filtering, and hybrid semantic search for real-time physician-facing medical assistance.",
      ],
      technologies: [
        "Python", "Next.js", "FastAPI", "PostgreSQL", "OpenSearch", "PyTorch", "Transformers (Hugging Face)", "Docker", "WebSockets", "Agentic RAG", "ReAct", "Agentic AI", "LLMs (OpenAI, Azure, Hugging Face)", "BlueHiveAI", "Semantic Search", "Metadata Filtering"
      ],
    },
    {
      title: "Semantic Query Engine (LLM Planner + Hybrid Search)",
      logo: semanticQueryEngineLogo,
      description: [
        "Designed a scalable, context-aware semantic query system tailored for EHR documents, integrating Agentic RAG with hybrid retrieval pipelines.",
        "Used DistilBERT for intent classification and LLMs for dynamic tool routing between vector similarity, keyword filters, and structured OpenSearch lookups.",
        "Introduced planner-executor logic with memory-enhanced reasoning, enabling multi-hop medical query decomposition and accurate result synthesis.",
        "Optimized query speed and precision using embedding tuning, OpenSearch ANN indexing, and dynamic retrieval strategies with BlueHiveAI and Ollama models.",
      ],
      technologies: [
        "Python", "FastAPI", "PyTorch", "Transformers (Hugging Face)", "OpenSearch", "Ollama", "BlueHiveAI", "Redis (legacy)", "Semantic Search", "Hybrid Search", "Agentic AI", "LLM Planner-Executor", "Docker"
      ],
    },
    {
      title: "Lexi-Phylax",
      logo: lexiPhylaxLogo,
      description: [
        "Developed an AI-powered hate speech classification engine leveraging transformer-based models.",
        "Initially trained a BERT-based model from Hugging Face on custom datasets and deployed it for inference.",
        "Currently building a custom transformer model with ~400M parameters, fine-tuned specifically for nuanced hate speech detection and classification.",
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
      description: "At Medical Informatics Engineering, I designed and developed a powerful Agentic Medical Chatbot and a Semantic Query Engine for electronic health records (EHR), leveraging Agentic Retrieval-Augmented Generation (Agentic RAG), advanced NLP, and LLM-based planner–executor (ReAct) architectures."
    },
    {
      title: "Teaching Assistant & Research Assistant",
      company: "Purdue University",
      logo: purdueLogo,
      date: "September 2024 - Jan 2025",
      description: "As a Teaching Assistant for Programming Language Design, I work closely with professors to deliver course material, grade assignments, and provide academic support. In my Research Assistant role, I contribute to the CosmoSim project on high-performance computational cosmological simulations."
    },
    {
      title: "Associate Software Engineer",
      company: "Wibmo (a PayU company)",
      logo: wibmoLogo,
      date: "July 2022 - April 2023",
      description: "At Wibmo, I developed and optimized backend services for a Risk-based Authentication Engine, enhancing fraud detection and prevention measures. By designing and implementing a microservices architecture, I improved scalability and system reliability under high-traffic conditions."
    },
    {
      title: "Full Stack Developer Intern",
      company: "Freecharge",
      logo: freechargeLogo,
      date: "May 2021 - July 2021",
      description: "During my internship at Freecharge, I focused on optimizing the microservices architecture to improve system efficiency and scalability. I led memory caching initiatives, reducing database load and enhancing response times."
    },
    {
      title: "Front-end Developer Intern",
      company: "Ravgins",
      logo: ravginsLogo,
      date: "June 2020 - August 2020",
      description: "As a Front-End Developer Intern at Ravgins, I built responsive web and mobile applications from the ground up using Angular, Ionic, and other front-end tools, significantly improving user experience and engagement."
    }
  ], []);

  // Skills data - memoized for performance
  const skillsData = useMemo(() => [
    {
      category: "AI & Machine Learning",
      icon: faBrain,
      skills: "AI/ML, Natural Language Processing (NLP), Retrieval Augmented Generation (RAG), Computer Vision, Machine Learning, Deep Learning (PyTorch, TensorFlow), Agentic AI & AI agents, Model Context Protocol"
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
    setTimeout(() => setIsScrolling(false), 1000);
  };

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

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">
          <FontAwesomeIcon icon={faRocket} />
          <span>Kaushik</span>
        </div>
        <ul className="nav-links">
          {Object.keys(sectionRefs).map((section) => {
            const label = section === 'hero'
              ? 'Home'
              : section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {label}
                </button>
              </li>
            );
          })}
          <li>
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
              <p>
                Hello! My name is <strong>Kaushik Chaturvedula</strong>. I'm a
                passionate Software Engineer with strong experience building
                high-performance, scalable software systems across microservices,
                AI/ML architectures & solutions, LLMs, Agentic AI & AI agents, and
                full-stack architectures.
              </p>
              <p>
                I recently graduated with a Master of Science in Computer Science
                from <strong>Purdue University Fort Wayne</strong> with a perfect GPA
                of 4.0/4.0. I completed the 30-credit-hour program in just three
                semesters, ranking among the top in several advanced courses.
              </p>
              <p>
                My experience spans AI/ML solutions, full-stack development, 
                cloud-native services, database design, and scalable agentic AI pipelines.
                I'm excited to bring this experience to future opportunities where I can 
                innovate, collaborate, and drive meaningful impact.
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
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h3 className="skill-title">{skill.category}</h3>
                <p className="skill-description">{skill.skills}</p>
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
                      <FontAwesomeIcon icon={faBriefcase} />
                      {exp.title}
                    </h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-date">{exp.date}</p>
                  </div>
                  <p className="experience-description">{exp.description}</p>
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
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
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