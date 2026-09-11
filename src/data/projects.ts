export interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

export const projects: Project[] = [
  {
    id: "hospital-bed-allocation",
    title: "Hospital Bed Allocation and Queue Management System (FYP)",
    description:
      "Designed and implemented a Multi-Agent PPO (MAPPO) model using a CTDE architecture for fairness-aware bed allocation and patient queueing across 4 hospital wards, benchmarked against a real-world dataset from Karapitiya Teaching Hospital. Built and fine-tuned five RL approaches against an FCFS baseline, and independently built the production MLOps retraining pipeline.",
    techTags: ["PyTorch", "Reinforcement Learning", "Multi-Agent RL", "Azure Cosmos DB", "Next.js", "FastAPI"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "agentic-rag-system",
    title: "AI/ML Research Assistant: Agentic RAG System",
    description:
      "Built an end-to-end agentic RAG system that answers AI/ML research questions by retrieving and grounding responses in real arXiv papers. Exposed the research tools through a Model Context Protocol (MCP) server tested live with Claude Desktop, backed by FastAPI and containerized with a full CI/CD pipeline.",
    techTags: ["RAG", "MCP", "ChromaDB", "FastAPI", "Docker", "GitHub Actions"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "fleet-operations-pipeline",
    title: "Fleet Operations Data Pipeline (Lambda Architecture)",
    description:
      "Engineered a Lambda architecture pipeline for a simulated ride-hailing fleet, separating a real-time Spark Structured Streaming speed layer from a daily Airflow batch layer. Built a FastAPI dashboard with heartbeat-based health monitoring and automated alerts, fully containerized with Docker Compose.",
    techTags: ["Kafka", "Spark Structured Streaming", "Airflow", "PostgreSQL", "FastAPI", "Docker"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "kafka-order-pipeline",
    title: "Kafka Order Processing Pipeline (Avro + DLQ)",
    description:
      "Built a Kafka producer-consumer system for order processing using Avro schema serialization for structured, evolvable message contracts, with running average aggregation, retry logic, and a Dead Letter Queue for failed message inspection.",
    techTags: ["Kafka", "Avro", "Dead Letter Queue", "Python"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "newslens",
    title: "NewsLens: Automated News Summarization",
    description:
      "Fine-tuned a T5-small transformer for abstractive news summarization on the BBC News dataset, achieving a validation ROUGE-L of 0.449. Added Word2Vec-based semantic search over the article corpus, served through a FastAPI backend.",
    techTags: ["T5", "Word2Vec", "Python", "NLP", "FastAPI"],
    githubUrl: "https://github.com/Neshadi/Automated-News-Summarization",
    liveDemoUrl: "#",
  },
  {
    id: "ceylon-compass",
    title: "Ceylon Compass: AI Sri Lanka Travel Guide",
    description:
      "Built a full-stack AI travel chatbot that answers Sri Lanka travel queries and generates itinerary diagrams on request, using two purpose-tuned LLM calls behind a Flask backend with keyword and regex intent detection.",
    techTags: ["LLM Prompt Engineering", "Flask", "Mermaid.js", "Groq API"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "mapreduce-retail",
    title: "Large Scale Retail Sales Analysis (MapReduce)",
    description:
      "Built a Hadoop 3.3.6 Streaming MapReduce job to compute total revenue and transaction counts per city across 1,000,000 retail transaction records, using a memory-efficient key-change flush pattern for constant memory use.",
    techTags: ["Hadoop", "MapReduce", "Docker", "Distributed Data Processing"],
    githubUrl: "https://github.com/Kaveesha20/mapreduce-retail-analysis",
    liveDemoUrl: "#",
  },
  {
    id: "event-ticket-platform",
    title: "Event Ticket Booking Platform",
    description:
      "Co-built a cloud-native microservices platform (auth, events, booking, notification) with JWT authentication, Redis caching, and PostgreSQL persistence. Designed service boundaries using C4 modeling and event-driven communication via RabbitMQ, deployed with Kubernetes HPA autoscaling.",
    techTags: ["Microservices", "Kubernetes", "Docker", "RabbitMQ", "CI/CD"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
];
