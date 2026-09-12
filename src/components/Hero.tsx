"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background illustration with slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <Image
          src="/hero-coffee-desk.jpg"
          alt="Illustration of a developer working at a desk with coffee"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient scrim for text legibility */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, rgba(251,246,238,0.55) 22%, rgba(251,246,238,0.15) 45%, rgba(43,27,18,0.15) 75%, rgba(43,27,18,0.55) 100%)",
        }}
      />

      {/* Animated steam wisps positioned over the coffee cup (right side of image) */}
      <div className="absolute z-10 pointer-events-none" style={{ right: "9%", top: "52%" }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block absolute rounded-full bg-background/60 blur-[2px]"
            style={{ width: 6, height: 6, left: i * 10 - 8 }}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-4, -70],
              x: [0, i % 2 === 0 ? 12 : -10, 0],
              scale: [0.8, 1.6, 1.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-background/70 backdrop-blur-md rounded-3xl px-6 py-10 sm:px-12 sm:py-12 max-w-3xl mx-auto shadow-xl"
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
            className="text-lg sm:text-xl text-foreground-muted mb-8 max-w-2xl mx-auto"
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
