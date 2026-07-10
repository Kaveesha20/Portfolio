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
    title: "RL Based Hospital Bed Allocation and Queue Management System",
    description:
      "Final year project designing RL based real time patient queue prioritization and bed allocation at Karapitiya Teaching Hospital, integrated into a Next.js hospital management system. Includes full CI/CD workflow using GitHub Actions for automated model retraining and deployment.",
    techTags: ["Next.js", "DDQN", "MARL", "PPO", "GitHub Actions", "MongoDB"],
    githubUrl: "",
    liveDemoUrl: "#",
  },
  {
    id: "food-delivery",
    title: "Tomato - Food Delivery Application",
    description:
      "Full stack web application using MERN stack with Stripe integration. Features user authentication, order placement with secure payment, shopping cart functionality, and admin panel for order tracking and product management.",
    techTags: ["MERN Stack", "Stripe", "Node.js", "React", "MongoDB"],
    githubUrl: "https://github.com/Kaveesha20/Food-Delivery",
    liveDemoUrl: "#",
  },
  {
    id: "newslens",
    title: "NewsLens - NLP News Summarization & Semantic Search Platform",
    description:
      "Built and evaluated multiple summarization approaches (T5-small fine-tuning, extractive baseline, prompt engineering with zero-shot/few-shot/chain-of-thought) benchmarked using ROUGE metrics. Implemented Word2Vec based semantic search for related news retrieval.",
    techTags: ["T5", "Word2Vec", "Python", "Next.js", "NLP", "ROUGE"],
    githubUrl: "https://github.com/Neshadi/Automated-News-Summarization",
    liveDemoUrl: "#",
  },
  {
    id: "gesture-mouse",
    title: "Hand Gesture Mouse Controller",
    description:
      "Webcam-based hand gesture mouse control system using MediaPipe and a PyTorch gesture classification model (GestureNet), supporting 7 distinct gestures. Developed a web-based control interface with real-time mode switching and WebSocket communication.",
    techTags: ["Python", "MediaPipe", "PyTorch", "WebSocket", "GestureNet"],
    githubUrl: "https://github.com/Kaveesha20/gesture-mouse",
    liveDemoUrl: "#",
  },
  {
    id: "secure-file-drop",
    title: "Secure Anonymous Drop",
    description:
      "Secure, anonymous file transfer application using AES-256-GCM and RSA-4096 encryption for end-to-end secure file sharing.",
    techTags: ["AES-256-GCM", "RSA-4096", "Encryption", "Python", "Security"],
    githubUrl: "https://github.com/Neshadi/secure-file-drop",
    liveDemoUrl: "#",
  },
  {
    id: "mapreduce-retail",
    title: "MapReduce Retail Analysis",
    description:
      "Implemented a MapReduce-based data pipeline to analyze large-scale retail transaction data for sales patterns and insights.",
    techTags: ["MapReduce", "Big Data", "Data Analysis", "Retail Analytics"],
    githubUrl: "https://github.com/Kaveesha20/mapreduce-retail-analysis",
    liveDemoUrl: "#",
  },
];
