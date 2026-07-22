'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blog';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <section id="blog" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Latest Articles</h2>
          <p className="text-text-dim text-lg">Technical writing and insights from my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-accent-2 text-sm font-semibold mb-3">{post.date}</span>
              <h3 className="text-xl font-bold text-text mb-3">{post.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Read Article <span>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
