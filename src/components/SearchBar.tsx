import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="relative block w-full">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search anything..."
        className="h-10 w-full rounded border border-line bg-white pl-10 pr-3 text-sm font-medium text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}
