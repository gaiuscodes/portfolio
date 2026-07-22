'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Timothy consistently delivered reliable software solutions while adapting quickly to complex business requirements. His ability to translate business needs into technical solutions made him invaluable to our team.",
    author: 'David Zebedi',
    role: 'Hardware & Software Engineer, Endeavor Group Ltd',
    initials: 'DZ',
  },
  {
    quote: "Working with Timothy was a game-changer for our platform. He didn't just write code — he understood our users, improved our architecture, and helped us scale without sacrificing performance.",
    author: 'Sarah Mwangi',
    role: 'Product Manager, Undika',
    initials: 'SM',
  },
  {
    quote: "Timothy's attention to detail and commitment to clean, maintainable code stood out immediately. He's the kind of engineer who thinks about long-term maintainability, not just quick fixes.",
    author: 'Michael Kariuki',
    role: 'Senior Developer, Power Learn Project',
    initials: 'MK',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Testimonials</h2>
          <p className="text-text-dim text-lg">What people say about working with me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-surface border border-surface-border rounded-2xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-text-dim italic leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-text font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-text-dim text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
