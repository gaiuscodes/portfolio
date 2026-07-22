'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setStatus(result);
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Get In Touch</h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            Have a project, role, or collaboration in mind? Drop me a message and I'll get back to you.
          </p>
        </motion.div>

        <motion.form
          className="max-w-xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          {status && (
            <div
              className={`p-4 rounded-xl ${
                status.type === 'success'
                  ? 'bg-accent/10 text-accent border border-accent/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {status.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-text text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl text-text placeholder-text-dim focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-text text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl text-text placeholder-text-dim focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-text text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl text-text placeholder-text-dim focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-accent text-bg font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
