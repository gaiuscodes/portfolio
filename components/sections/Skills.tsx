'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PHP', 'Java', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Figma', 'Canva', 'Photoshop'],
  },
  {
    title: 'IT Support',
    skills: ['Windows Server', 'Office 365', 'Networking', 'CCTV', 'Hardware Support'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills &amp; Technologies
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-surface border border-surface-border rounded-xl text-text text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
