import { motion } from 'framer-motion';

interface PortfolioSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PortfolioSection({ title, subtitle, children }: PortfolioSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-maxw mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
          {subtitle && <p className="text-text-dim text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
