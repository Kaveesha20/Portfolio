"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I am a Computer Engineering undergraduate at the University of Ruhuna, Sri Lanka, graduating in August 2026. My academic journey has equipped me with a strong foundation in both hardware and software systems, with a particular focus on artificial intelligence and machine learning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Currently, I am an AI Engineer Trainee intern at Sri Lanka Telecom (SLT), where I am gaining hands-on experience in developing and deploying AI solutions for real-world problems. This internship has deepened my expertise in natural language processing, speech recognition, and building production-ready ML systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
            My passion lies at the intersection of applied AI/ML and full-stack development. I enjoy creating end-to-end solutions that leverage cutting-edge AI technologies while maintaining robust, scalable software architecture. Whether it is building intelligent recommendation systems or deploying ML models with proper CI/CD pipelines, I strive to deliver impactful and efficient solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;