import { FormEvent, useMemo, useState } from "react";
import { Check, PanelRightClose, Plus, X } from "lucide-react";
import type { DashboardCategory, NewWidgetInput, WidgetType } from "../types/dashboard";

interface AddWidgetDrawerProps {
  isOpen: boolean;
  categories: DashboardCategory[];
  onClose: () => void;
  onAddWidget: (widget: NewWidgetInput) => void;
  onToggleWidget: (categoryId: string, widgetId: string) => void;
}

const widgetTypes: Array<{
  value: Exclude<WidgetType, "empty">;
  label: string;
}> = [
  { value: "text", label: "Text" },
  { value: "donut", label: "Donut Chart" },
  { value: "progress", label: "Progress Widget" },
];

export default function AddWidgetDrawer({
  isOpen,
  categories,
  onClose,
  onAddWidget,
  onToggleWidget,
}: AddWidgetDrawerProps) {
  const firstCategory = categories[0]?.id ?? "";
  const [categoryId, setCategoryId] = useState(firstCategory);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<Exclude<WidgetType, "empty">>("text");

  const selectedCategory = useMemo(
    () => categories.find((category) => category.id === categoryId),
    [categories, categoryId],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle || !cleanDescription || !categoryId) {
      return;
    }

    onAddWidget({
      categoryId,
      title: cleanTitle,
      text: cleanDescription,
      type,
    });
    setTitle("");
    setDescription("");
    setType("text");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[460px] flex-col bg-white shadow-drawer transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">
              Dashboard builder
            </p>
            <h2 className="mt-1 text-lg font-bold text-ink">Add Widget</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-2 text-slate-500 transition hover:bg-slate-100 hover:text-ink"
            aria-label="Close drawer"
          >
            <PanelRightClose className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Category</span>
              <select
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                className="mt-2 h-11 w-full rounded border border-line bg-white px-3 text-sm font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Widget Name</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 h-11 w-full rounded border border-line bg-white px-3 text-sm font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
                placeholder="Exposure summary"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">
                Widget Description
              </span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded border border-line bg-white px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
                placeholder="Summarize the signal this widget should show."
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Widget Type</span>
              <select
                value={type}
                onChange={(event) =>
                  setType(event.target.value as Exclude<WidgetType, "empty">)
                }
                className="mt-2 h-11 w-full rounded border border-line bg-white px-3 text-sm font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
              >
                {widgetTypes.map((widgetType) => (
                  <option key={widgetType.value} value={widgetType.value}>
                    {widgetType.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              disabled={!title.trim() || !description.trim()}
              className="flex h-11 w-full items-center justify-center gap-2 rounded bg-brand text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add Widget
            </button>
          </form>

          <div className="mt-7 border-t border-line pt-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-ink">Visible Widgets</h3>
              <span className="text-xs font-semibold text-muted">
                {selectedCategory?.widgets.length ?? 0} total
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {selectedCategory?.widgets.map((widget) => (
                <label
                  key={widget.id}
                  className="flex items-center gap-3 rounded border border-line px-3 py-3 transition hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    checked={widget.enabled}
                    onChange={() => onToggleWidget(selectedCategory.id, widget.id)}
                    className="sr-only"
                  />
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      widget.enabled
                        ? "border-brand bg-brand text-white"
                        : "border-slate-300 bg-white text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {widget.title}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {widget.text}
                    </span>
                  </span>
                  {!widget.enabled ? (
                    <X className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  ) : null}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
