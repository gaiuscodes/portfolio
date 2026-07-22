'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <Image
                src="/images/timm.png"
                alt="Timothy Gaius"
                fill
                className="rounded-full object-cover border-4 border-accent/20"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">About Me</h2>
            <p className="text-text-dim text-lg leading-relaxed mb-6">
              I am a <strong className="text-text">Full Stack Software Engineer</strong> passionate about building reliable software that solves real business challenges. My experience spans enterprise web applications, business management systems, cloud infrastructure, DevOps automation, AI assistants, and e-commerce platforms.
            </p>
            <p className="text-text-dim text-lg leading-relaxed mb-8">
              I enjoy transforming ideas into scalable digital products while ensuring performance, security, and maintainability.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">12+</p>
                <p className="text-text-dim text-sm">Projects Shipped</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">3+</p>
                <p className="text-text-dim text-sm">Years Learning</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-text-dim text-sm">Tech Skills</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
