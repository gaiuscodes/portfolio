'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TechPill from './TechPill';
import AnimatedButton from './AnimatedButton';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative bg-bg border border-surface-border rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-surface-border text-text hover:bg-accent hover:text-bg transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="p-6 md:p-10 pt-16 md:pt-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-bg bg-accent rounded-full mb-4">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{project.title}</h2>
              <p className="text-text-dim text-lg leading-relaxed mb-8">{project.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-text mb-3">Gallery</h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-surface-border">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Business Problem</h3>
                  <p className="text-text-dim text-sm leading-relaxed">
                    Users struggled with inefficiencies in the {project.category.toLowerCase()} space. Existing solutions were fragmented, slow, or lacked the features needed for modern operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Solution</h3>
                  <p className="text-text-dim text-sm leading-relaxed">
                    Built a modern, scalable platform that streamlines workflows, improves user experience, and provides real-time insights for better decision-making.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-text mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-text-dim text-sm">
                      <span className="text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-text mb-3">Business Impact</h3>
                <div className="glass rounded-xl p-6">
                  <p className="text-3xl font-bold text-accent mb-1">{project.metric}</p>
                  <p className="text-text-dim text-sm">{project.metricLabel}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-text mb-3">Technology Stack</h3>
                <div className="space-y-4">
                  {Object.entries(project.technologies).map(([category, techs]) =>
                    techs && techs.length > 0 ? (
                      <div key={category}>
                        <p className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-2">{category}</p>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech: import('@/data/projects').Technology) => (
                            <TechPill key={tech.name} name={tech.name} />
                          ))}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-text mb-3">Architecture</h3>
                <div className="glass rounded-xl p-8 flex items-center justify-center min-h-[200px]">
                  <p className="text-text-dim text-sm">Architecture diagram placeholder</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <AnimatedButton href={project.demo} linkTarget="_blank" linkRel="noopener" variant="primary">
                    Live Demo <span>↗</span>
                  </AnimatedButton>
                )}
                {project.github && (
                  <AnimatedButton href={project.github} linkTarget="_blank" linkRel="noopener" variant="ghost">
                    GitHub <span>↗</span>
                  </AnimatedButton>
                )}
                {project.caseStudy && project.caseStudy !== '#' && (
                  <AnimatedButton href={project.caseStudy} variant="ghost">
                    Case Study <span>→</span>
                  </AnimatedButton>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
