import { useEffect, useRef } from "react";
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
import semanticQueryEngineLogo from "../../assets/images/semantic-query-engine.webp";
import medicalChatbotLogo from "../../assets/images/medical-chatbot.webp";
import insightAILogo from "../../assets/images/insightAI.png";

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
      title: "InSightAI (Multimodal Agentic VQA)",
      logo: insightAILogo,
      description: [
        "Built a real-time Visual Question Answering (VQA) system combining vision transformers with LLM-based reasoning over general-purpose images and clinical visual content.",
        "Integrated an Agentic RAG loop with dynamic GPT-4o planning, enabling the system to reason over multimodal inputs and perform self-refining document + image retrieval across OpenSearch.",
        "Utilized CLIP ViT-L/14 for visual embeddings and LLaMA-3 8B for response synthesis, fine-tuned for vision-language alignment over the VQAv2 dataset.",
        "Deployed using FastAPI and GPU-optimized backends, delivering high-throughput VQA inference with support for memory-augmented query refinement and multimodal grounding.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PyTorch",
        "Transformers (Hugging Face)",
        "OpenSearch",
        "CLIP ViT-L/14",
        "LLaMA-3 8B",
        "VQAv2",
        "Agentic RAG",
        "ReAct",
        "Agentic AI",
        "Vision-Language Models",
        "Multimodal Fusion",
        "LLM Planner",
        "GPU Inference",
        "Docker",
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
        "Python",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "OpenSearch",
        "PyTorch",
        "Transformers (Hugging Face)",
        "Docker",
        "WebSockets",
        "Agentic RAG",
        "ReAct",
        "Agentic AI",
        "LLMs (OpenAI, Azure, Hugging Face)",
        "BlueHiveAI",
        "Semantic Search",
        "Metadata Filtering",
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
        "Python",
        "FastAPI",
        "PyTorch",
        "Transformers (Hugging Face)",
        "OpenSearch",
        "Ollama",
        "BlueHiveAI",
        "Redis (legacy)",
        "Semantic Search",
        "Hybrid Search",
        "Agentic AI",
        "LLM Planner-Executor",
        "Docker",
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
        "Python",
        "PyTorch",
        "Transformers (Hugging Face)",
        "Custom Transformer Model",
        "Deep Learning",
        "Scikit-learn",
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
        "React",
        "Spring Boot",
        "MongoDB",
        "Redis",
        "Google Cloud Run",
        "Docker",
        "JWT",
        "Gradle",
        "Postman",
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
