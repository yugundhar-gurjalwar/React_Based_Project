import { Bell, ChevronDown, Home, Plus, UserRound } from "lucide-react";
import SearchBar from "./SearchBar";

interface NavbarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  onOpenDrawer: () => void;
}

export default function Navbar({
  searchQuery,
  onSearch,
  onOpenDrawer,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="flex min-h-[72px] flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-blue-50 text-brand">
            <Home className="h-4 w-4" aria-hidden="true" />
          </div>
          <nav className="min-w-0 text-sm font-medium text-slate-500">
            <span>Home</span>
            <span className="px-2 text-slate-300">&gt;</span>
            <span className="font-semibold text-ink">Dashboard V2</span>
          </nav>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
          <div className="w-full lg:w-[330px]">
            <SearchBar value={searchQuery} onChange={onSearch} />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded border border-line bg-white text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button
              type="button"
              className="flex h-10 min-w-0 items-center gap-2 rounded border border-line bg-white px-3 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-slate-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded bg-slate-900 text-white">
                <UserRound className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="hidden sm:inline">Jane Cooper</span>
              <ChevronDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenDrawer}
              className="flex h-10 items-center gap-2 rounded bg-brand px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Add Widget</span>
            </button>

            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded border border-line bg-white px-3 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-slate-50"
            >
              <span>Last 2 Days</span>
              <ChevronDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
