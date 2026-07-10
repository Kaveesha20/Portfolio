"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Trainee",
      company: "Sri Lanka Telecom PLC",
      period: "May 2025 - Nov 2025",
      description:
        "Worked on AI/ML projects including Natural Language Processing, Speech Recognition and building production ready ML systems. Developing and deploying AI solutions for real world business problems.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-green-500 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"></div>

                <div className="bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-400 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{experience.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{experience.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;