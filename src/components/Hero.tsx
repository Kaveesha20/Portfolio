"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-background">
      {/* 3D robot scene as full background, loaded via Spline's hosted iframe */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-uXeG2I56c6dI1L8UBntarLp0/"
        className="absolute inset-0 z-0 w-full h-full border-0"
        title="Interactive 3D robot background"
        allow="autoplay; fullscreen"
        loading="lazy"
      />

      {/* Soft gradient at the very bottom so this section blends into the next one */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(251,246,238,0) 0%, var(--background) 100%)",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left bg-background/70 backdrop-blur-md rounded-3xl px-6 py-10 sm:px-10 sm:py-12 max-w-xl shadow-xl pointer-events-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Kaveesha Nirmani
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-accent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Computer Engineering Undergraduate
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-foreground-muted mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building intelligent systems and full stack applications.
            Specializing in applied AI/ML and modern web technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/Kaveesha%20Nirmani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 bg-surface-alt hover:bg-border-strong rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>

            <motion.a
              href="https://github.com/Kaveesha20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border-strong hover:border-accent rounded-lg font-semibold transition-colors"
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