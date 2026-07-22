'use client';

import { motion } from 'framer-motion';

const githubStats = [
  { icon: '📋', value: '847', label: 'Contributions' },
  { icon: '🔥', value: '23', label: 'Day Streak' },
  { icon: '💻', value: '52', label: 'Repositories' },
  { icon: '👥', value: '34', label: 'Followers' },
];

const languages = [
  { name: 'TypeScript', percent: 42 },
  { name: 'JavaScript', percent: 28 },
  { name: 'Python', percent: 15 },
  { name: 'Go', percent: 8 },
  { name: 'Rust', percent: 5 },
  { name: 'Other', percent: 2 },
];

export default function GitHubStats() {
  return (
    <section id="github-stats" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">GitHub Activity</h2>
          <p className="text-text-dim text-lg">Actively building and contributing to open source</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-surface border border-surface-border rounded-2xl p-6 text-center hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-3xl mb-2">{stat.icon}</p>
              <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-text-dim text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-surface border border-surface-border rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text mb-6">Top Languages</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-text text-sm">{lang.name}</span>
                    <span className="text-text-dim text-sm">{lang.percent}%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-700"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-surface border border-surface-border rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text mb-6">Activity (Last 90 Days)</h3>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 90 }).map((_, i) => {
                const intensity = Math.random();
                const isActive = intensity > 0.4;
                const opacity = isActive ? (0.4 + intensity * 0.6) : 0.1;
                return (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor: isActive ? 'var(--accent)' : 'var(--surface-border)',
                      opacity,
                    }}
                    title={`${Math.floor(intensity * 10)} contributions`}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
