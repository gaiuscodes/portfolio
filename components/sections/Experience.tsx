'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Software Engineering',
    meta: 'Power Learn Project Africa · Present',
    description: 'Intensive full-stack engineering training — building real-world applications and engineering best practices.',
  },
  {
    title: 'Business & Information Technology',
    meta: 'St. Paul University · Graduated 2022',
    description: 'Foundations in IT systems, business analysis, and software fundamentals.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Education &amp; Journey</h2>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-surface-border space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_4px_rgba(45,212,191,0.18)]" />
              <div className="bg-surface border border-surface-border rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-text">{item.title}</h3>
                  <span className="text-accent text-sm font-semibold">{item.meta}</span>
                </div>
                <p className="text-text-dim leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
