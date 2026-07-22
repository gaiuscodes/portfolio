'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  linkTarget?: string;
  linkRel?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  linkTarget,
  linkRel,
}: AnimatedButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-accent text-bg hover:shadow-lg hover:shadow-accent/30',
    ghost: 'border border-surface-border text-text hover:border-accent hover:text-accent',
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={linkTarget} rel={linkRel} className="contents">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="contents" type="button">
      {content}
    </button>
  );
}
