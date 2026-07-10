"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Kaveesha Nirmani
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-green-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Computer Engineering Undergraduate 
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building intelligent systems and full stack applications.
            Specializing in applied AI/ML and modern web technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/Kaveesha%20Nirmani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>

            <motion.a
              href="https://github.com/Kaveesha20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;