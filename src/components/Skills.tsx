"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      skills: ["Reinforcement Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch"],
    },
    {
      title: "Full-Stack",
      skills: ["Next.js", "MongoDB", "TypeScript", "React", "Node.js", "FastAPI"],
    },
    {
      title: "DevOps/MLOps",
      skills: ["GitHub Actions", "Kafka", "CI/CD", "Docker", "MLflow"],
    },
    {
      title: "Languages & Tools",
      skills: ["Python", "JavaScript", "TypeScript", "Git", "OpenCV", "MediaPipe"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Skills and Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;