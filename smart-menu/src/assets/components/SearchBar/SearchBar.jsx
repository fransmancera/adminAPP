import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--color-muted))]" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for food..."
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[rgb(var(--color-surface))] 
                 border border-[rgb(var(--color-border))] text-[rgb(var(--color-text))]
                 placeholder-[rgb(var(--color-muted))] focus:outline-none 
                 focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
      />
    </div>
  );
}