import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import AddWidgetDrawer from "./AddWidgetDrawer";
import CategorySection from "./CategorySection";
import Navbar from "./Navbar";
import { useDashboardStore } from "../store/dashboardStore";

export default function Dashboard() {
  const {
    categories,
    searchQuery,
    isLoading,
    addWidget,
    removeWidget,
    toggleWidget,
    searchWidgets,
  } = useDashboardStore();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar
        searchQuery={searchQuery}
        onSearch={searchWidgets}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      <main className="px-4 py-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand">CNAPP Dashboard</p>
            <h1 className="mt-1 text-2xl font-bold text-ink">
              Cloud Security Posture Overview
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Monitor cloud accounts, workload protection, and registry scan
              signals from one configurable dashboard.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            <RefreshCw
              className={`h-4 w-4 ${isBooting || isLoading ? "animate-spin" : ""}`}
              aria-hidden="true"
            />
            <span>{isBooting || isLoading ? "Loading dashboard" : "Live data"}</span>
          </div>
        </div>

        {isBooting ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="min-h-[260px] animate-pulse rounded bg-white p-5 shadow-card"
              >
                <div className="h-4 w-2/3 rounded bg-slate-200" />
                <div className="mt-4 h-3 w-full rounded bg-slate-100" />
                <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
                <div className="mt-8 h-28 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                searchQuery={searchQuery}
                onRemoveWidget={removeWidget}
                onOpenDrawer={() => setIsDrawerOpen(true)}
              />
            ))}
          </div>
        )}
      </main>

      <AddWidgetDrawer
        isOpen={isDrawerOpen}
        categories={categories}
        onClose={() => setIsDrawerOpen(false)}
        onAddWidget={addWidget}
        onToggleWidget={toggleWidget}
      />
    </div>
  );
}
