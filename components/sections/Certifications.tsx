'use client';

import { motion } from 'framer-motion';

const certifications = [
  { title: 'Docker', org: 'Docker Certified Associate', icon: '🐳' },
  { title: 'AWS', org: 'Amazon Web Services', icon: '☁️' },
  { title: 'Terraform', org: 'HashiCorp Certified', icon: '🏗️' },
  { title: 'Kubernetes', org: 'CNCF Certified', icon: '☸️' },
  { title: 'Google Cloud', org: 'Google Certified', icon: '🌐' },
  { title: 'Meta', org: 'Meta Certified', icon: '🔷' },
  { title: 'Microsoft', org: 'Microsoft Certified', icon: '💻' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Certifications</h2>
          <p className="text-text-dim text-lg">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-surface border border-surface-border rounded-2xl p-6 text-center hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <p className="text-4xl mb-4">{cert.icon}</p>
              <h3 className="text-lg font-bold text-text mb-2">{cert.title}</h3>
              <p className="text-text-dim text-sm">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
