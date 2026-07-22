'use client';

import { motion } from 'framer-motion';
import TechPill from './TechPill';
import type { TechCategory } from '@/data/projects';

interface TechStackPreviewProps {
  technologies: TechCategory;
}

export default function TechStackPreview({ technologies }: TechStackPreviewProps) {
  const allTechs = Object.values(technologies).flat();
  const showMore = allTechs.length > 8;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {allTechs.slice(0, 8).map((tech) => (
        <TechPill key={tech.name} name={tech.name} />
      ))}
      {showMore && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-text-dim bg-surface-border rounded-full">
          +{allTechs.length - 8} more
        </span>
      )}
    </div>
  );
}
