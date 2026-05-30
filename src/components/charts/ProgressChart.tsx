import type { ProgressMetric } from "../../types/dashboard";

interface ProgressChartProps {
  data: ProgressMetric[];
}

export default function ProgressChart({ data }: ProgressChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-5 py-3">
      <div className="flex h-5 overflow-hidden rounded bg-slate-100">
        {data.map((item) => (
          <div
            key={item.label}
            className="h-full transition-all duration-300"
            style={{
              width: `${item.value}%`,
              backgroundColor: item.color,
            }}
            title={`${item.label}: ${item.value}%`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div
            key={item.label}
            className="rounded border border-line bg-slate-50 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs font-medium text-slate-600">
                {item.label}
              </span>
            </div>
            <p className="mt-1 text-lg font-semibold text-ink">
              {item.value}%
            </p>
          </div>
        ))}
      </div>

      <div className="text-xs font-medium text-muted">
        Combined signal strength: {total} points
      </div>
    </div>
  );
}
