interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold text-bg bg-accent rounded-full">
      {category}
    </span>
  );
}
