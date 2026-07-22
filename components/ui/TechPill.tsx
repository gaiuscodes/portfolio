interface TechPillProps {
  name: string;
}

export default function TechPill({ name }: TechPillProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full">
      {name}
    </span>
  );
}
