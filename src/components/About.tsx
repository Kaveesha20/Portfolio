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
I am a Computer Engineering undergraduate at the University of Ruhuna (2026) with a passion for Artificial Intelligence, Machine Learning, and Full Stack Development. During my AI Engineer internship at Sri Lanka Telecom PLC, I gained hands on experience building AI solutions for real world applications. I enjoy developing scalable, intelligent software that creates meaningful impact.            </motion.p>

          

           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;