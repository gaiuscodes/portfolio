interface MetricOverlayProps {
  metric: string;
  metricLabel: string;
}

export default function MetricOverlay({ metric, metricLabel }: MetricOverlayProps) {
  return (
    <div className="absolute bottom-4 right-4 glass rounded-xl px-4 py-3 min-w-[140px]">
      <p className="text-2xl font-bold text-accent">{metric}</p>
      <p className="text-xs text-text-dim">{metricLabel}</p>
    </div>
  );
}
