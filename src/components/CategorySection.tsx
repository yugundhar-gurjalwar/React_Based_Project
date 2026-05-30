import WidgetCard from "./WidgetCard";
import type { DashboardCategory } from "../types/dashboard";

interface CategorySectionProps {
  category: DashboardCategory;
  searchQuery: string;
  onRemoveWidget: (categoryId: string, widgetId: string) => void;
  onOpenDrawer: () => void;
}

export default function CategorySection({
  category,
  searchQuery,
  onRemoveWidget,
  onOpenDrawer,
}: CategorySectionProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleWidgets = category.widgets.filter((widget) => {
    if (!widget.enabled) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      widget.title.toLowerCase().includes(normalizedQuery) ||
      widget.text.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-ink">{category.title}</h2>
        <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted">
          {visibleWidgets.length} visible
        </span>
      </div>

      {visibleWidgets.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleWidgets.map((widget) => (
            <WidgetCard
              key={widget.id}
              widget={widget}
              categoryId={category.id}
              onRemove={onRemoveWidget}
              onOpenDrawer={onOpenDrawer}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[180px] items-center justify-center rounded border border-dashed border-slate-300 bg-white px-6 text-center shadow-card">
          <div>
            <p className="text-sm font-semibold text-ink">No widgets to display</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Adjust the search query or add a widget to populate this dashboard
              category.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
