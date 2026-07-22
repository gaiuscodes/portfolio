'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-3/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-maxw mx-auto px-6 text-center">
        <motion.p
          className="text-accent font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-text mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Timothy <span className="text-accent">Gaius</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-text-dim mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer crafting fast, accessible, and scalable web applications
        </motion.h2>
        <motion.p
          className="text-text-dim text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From clean frontends to robust backend systems, I build digital products that solve real business challenges.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-bg font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="/downloads/TimothyGaius_CV.pdf"
            download
            className="px-8 py-3 border border-surface-border text-text font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
        <motion.div
          className="flex gap-6 justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener" className="text-text-dim hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/timothy-gaius-odhiambo-a36011346" target="_blank" rel="noopener" className="text-text-dim hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="text-text-dim hover:text-accent transition-colors">
            Email
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim animate-bounce"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.a>
    </header>
  );
}
