import { BarChart3, FileText, Plus, X } from "lucide-react";
import DonutChart from "./charts/DonutChart";
import ProgressChart from "./charts/ProgressChart";
import type { Widget } from "../types/dashboard";

interface WidgetCardProps {
  widget: Widget;
  categoryId: string;
  onRemove: (categoryId: string, widgetId: string) => void;
  onOpenDrawer: () => void;
}

export default function WidgetCard({
  widget,
  categoryId,
  onRemove,
  onOpenDrawer,
}: WidgetCardProps) {
  if (widget.type === "empty") {
    return (
      <button
        type="button"
        onClick={onOpenDrawer}
        className="flex min-h-[260px] w-full flex-col items-center justify-center rounded border border-dashed border-slate-300 bg-white text-center shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-lg"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-brand">
          <Plus className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="mt-4 text-sm font-semibold text-ink">{widget.title}</span>
        <span className="mt-1 max-w-[220px] text-xs leading-5 text-muted">
          {widget.text}
        </span>
      </button>
    );
  }

  return (
    <article className="group min-h-[260px] rounded bg-white p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {widget.type === "text" ? (
              <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
            ) : (
              <BarChart3 className="h-4 w-4 text-brand" aria-hidden="true" />
            )}
            <h3 className="truncate text-sm font-semibold text-ink">
              {widget.title}
            </h3>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted">{widget.text}</p>
        </div>
        <button
          type="button"
          onClick={() => onRemove(categoryId, widget.id)}
          className="rounded p-1.5 text-slate-400 opacity-70 transition hover:bg-slate-100 hover:text-slate-700 group-hover:opacity-100"
          aria-label={`Remove ${widget.title}`}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4">
        {widget.type === "donut" && widget.donutData ? (
          <DonutChart data={widget.donutData} />
        ) : null}
        {widget.type === "progress" && widget.progressData ? (
          <ProgressChart data={widget.progressData} />
        ) : null}
        {widget.type === "text" ? (
          <div className="flex min-h-[150px] items-center justify-center rounded border border-line bg-slate-50 px-6 text-center">
            <p className="text-sm font-medium leading-6 text-slate-500">
              {widget.text}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
