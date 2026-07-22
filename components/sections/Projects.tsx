'use client';

import { motion } from 'framer-motion';
import ProjectGrid from '@/components/ui/ProjectGrid';
import { getAllProjects } from '@/data/projects';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Real Results, <span className="text-accent">Real Impact</span>.
          </h2>
          <p className="text-text-dim text-lg max-w-2xl mx-auto leading-relaxed">
            Software solutions that solve real-world business problems. From enterprise WhatsApp platforms to logistics systems, every project is built to deliver measurable outcomes.
          </p>
        </motion.div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
