'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string; whatsappUrl?: string } | null>(null);

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
      if (result.status === 'success') {
        form.reset();
      }
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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-text mb-4">Contact Information</h3>
              <p className="text-text-dim mb-6">
                Feel free to reach out through the form or contact me directly via phone or WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-text-dim text-sm">Email</p>
                  <a href="mailto:mrtimothyodhiambo@gmail.com" className="text-text hover:text-accent transition-colors font-medium">
                    mrtimothyodhiambo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <p className="text-text-dim text-sm">Phone</p>
                  <a href="tel:+254746058590" className="text-text hover:text-accent transition-colors font-medium">
                    +254 746 058 590
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/254746058590"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <p className="text-text font-semibold">Chat on WhatsApp</p>
                  <p className="text-text-dim text-sm">Click to start a conversation</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.form
              className="space-y-6"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
