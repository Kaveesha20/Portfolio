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
    id: "hospital-management",
    title: "Hospital Management System with MLOps Pipeline",
    description:
      "Final year project featuring a DDQN model for patient queue prioritization with complete MLOps pipeline.",
    techTags: ["Next.js", "MongoDB", "DDQN", "GitHub Actions", "Kafka"],
    githubUrl: "https://github.com/Kaveesha20/hospital-management",
    liveDemoUrl: "https://hospital-management-demo.vercel.app",
  },
  {
    id: "sinhala-asr",
    title: "Sinhala Automatic Speech Recognition System",
    description:
      "ASR system for Sinhala language developed during SLT internship.",
    techTags: ["Python", "TensorFlow", "ASR", "NLP"],
    githubUrl: "https://github.com/Kaveesha20/sinhala-asr",
    liveDemoUrl: "https://sinhala-asr-demo.vercel.app",
  },
  {
    id: "feature-request-analysis",
    title: "Feature Request Analysis Tool using NLP",
    description:
      "NLP-based tool to analyze and categorize feature requests from customer feedback.",
    techTags: ["Python", "NLP", "BERT", "FastAPI"],
    githubUrl: "https://github.com/Kaveesha20/feature-request-analysis",
    liveDemoUrl: "https://feature-request-analysis.vercel.app",
  },
  {
    id: "newslens",
    title: "NewsLens - Semantic News Search",
    description:
      "News search using T5 fine-tuning and Word2Vec for semantic search.",
    techTags: ["T5", "Word2Vec", "Python", "Next.js"],
    githubUrl: "https://github.com/Kaveesha20/newslens",
    liveDemoUrl: "https://newslens-demo.vercel.app",
  },
  {
    id: "gesture-mouse",
    title: "Gesture-Controlled Mouse",
    description:
      "Computer vision application using GestureNet MLP and MediaPipe.",
    techTags: ["Python", "MediaPipe", "OpenCV", "GestureNet"],
    githubUrl: "https://github.com/Kaveesha20/gesture-mouse",
    liveDemoUrl: "https://gesture-mouse-demo.vercel.app",
  },
];
