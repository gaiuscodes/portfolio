'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Mtaani Gas — LPG Marketplace',
    problem: 'Households struggled to find nearby LPG suppliers quickly. Most ordering was done through phone calls, leading to delays, missed deliveries, and unreliable supply chains.',
    solution: 'Built a digital marketplace connecting customers with nearby gas suppliers using location-based discovery, real-time order tracking, and separate dashboards for customers and suppliers.',
    technologies: 'Next.js, TypeScript, PostgreSQL, Prisma, Google Maps, Docker, AWS',
    challenges: 'Geospatial query performance at scale, handling two distinct user types on one platform, real-time order status synchronization, and ensuring mobile-first UX for low-end devices.',
    outcome: 'Reduced supplier discovery time from hours to seconds. Enabled real-time order tracking and improved delivery reliability. Mobile-responsive design ensured accessibility across device types.',
  },
  {
    title: 'Kitali Connect — WhatsApp Team Inbox',
    problem: 'Teams struggled to manage high volumes of WhatsApp customer conversations. Shared inboxes lacked agent assignment, message history, and real-time collaboration features.',
    solution: 'Developed an enterprise-grade multi-agent WhatsApp inbox with real-time messaging, authentication, message synchronization, and team collaboration tools.',
    technologies: 'Next.js, Node.js, PostgreSQL, Redis, Docker, WebSockets',
    challenges: 'Scaling WebSocket connections for real-time messaging, managing message state across multiple agents, ensuring message delivery reliability, and handling WhatsApp API rate limits.',
    outcome: 'Enabled teams to manage customer conversations at scale with multi-agent support, real-time sync, and improved response times. Reduced message loss and improved team coordination.',
  },
  {
    title: 'MatSafy — Waste Management Platform',
    problem: 'Residents and waste management companies lacked a digital platform to schedule collections, manage payments, and track service quality. Communication was fragmented and inefficient.',
    solution: 'Created a smart waste management platform connecting residents with collection services, featuring scheduling, customer management, payment integration, and an admin analytics dashboard.',
    technologies: 'React, Node.js, PostgreSQL, Docker',
    challenges: 'Designing flexible scheduling logic for different collection zones, integrating secure payment gateways, and building an admin dashboard with meaningful analytics for operational decisions.',
    outcome: 'Streamlined waste collection scheduling, improved payment tracking, and gave admins visibility into operations through analytics. Enhanced service reliability for residents.',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Case Studies</h2>
          <p className="text-text-dim text-lg">Deep dives into how I solve real business problems</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-text mb-4">{study.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Problem</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Technologies</h4>
                  <p className="text-text-dim text-sm">{study.technologies}</p>
                </div>
                <div>
                  <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Challenges</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{study.challenges}</p>
                </div>
                <div>
                  <h4 className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Outcome</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
