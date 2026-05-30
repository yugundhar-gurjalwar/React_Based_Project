import { create } from "zustand";
import { dashboardData } from "../data/dashboardData";
import type { DashboardCategory, NewWidgetInput, Widget } from "../types/dashboard";

interface DashboardStore {
  categories: DashboardCategory[];
  searchQuery: string;
  isLoading: boolean;
  addWidget: (input: NewWidgetInput) => void;
  removeWidget: (categoryId: string, widgetId: string) => void;
  toggleWidget: (categoryId: string, widgetId: string) => void;
  searchWidgets: (query: string) => void;
}

const createWidget = (input: NewWidgetInput): Widget => {
  const timestamp = Date.now();

  if (input.type === "donut") {
    return {
      id: `widget-${timestamp}`,
      title: input.title,
      text: input.text,
      type: "donut",
      enabled: true,
      donutData: [
        { name: "Healthy", value: 64, color: "#2563eb" },
        { name: "Review", value: 24, color: "#f59e0b" },
        { name: "Critical", value: 12, color: "#ef4444" },
      ],
    };
  }

  if (input.type === "progress") {
    return {
      id: `widget-${timestamp}`,
      title: input.title,
      text: input.text,
      type: "progress",
      enabled: true,
      progressData: [
        { label: "Critical", value: 16, color: "#ef4444" },
        { label: "High", value: 26, color: "#f97316" },
        { label: "Medium", value: 33, color: "#f59e0b" },
        { label: "Low", value: 25, color: "#22c55e" },
      ],
    };
  }

  return {
    id: `widget-${timestamp}`,
    title: input.title,
    text: input.text,
    type: "text",
    enabled: true,
  };
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  categories: dashboardData.categories,
  searchQuery: "",
  isLoading: false,
  addWidget: (input) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === input.categoryId
          ? { ...category, widgets: [createWidget(input), ...category.widgets] }
          : category,
      ),
    })),
  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter((widget) => widget.id !== widgetId),
            }
          : category,
      ),
    })),
  toggleWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.map((widget) =>
                widget.id === widgetId
                  ? { ...widget, enabled: !widget.enabled }
                  : widget,
              ),
            }
          : category,
      ),
    })),
  searchWidgets: (query) => set({ searchQuery: query }),
}));
