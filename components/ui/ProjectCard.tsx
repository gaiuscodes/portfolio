'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CategoryBadge from './CategoryBadge';
import MetricOverlay from './MetricOverlay';
import TechStackPreview from './TechStackPreview';
import AnimatedButton from './AnimatedButton';
import ProjectModal from './ProjectModal';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.article
        className="group bg-surface border border-surface-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
        whileHover={{ y: -4 }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={project.category} />
          </div>
          <MetricOverlay metric={project.metric} metricLabel={project.metricLabel} />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
          <p className="text-text-dim text-sm leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          <TechStackPreview technologies={project.technologies} />

          <AnimatedButton onClick={() => setIsModalOpen(true)} variant="ghost">
            View Project
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </AnimatedButton>
        </div>
      </motion.article>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
