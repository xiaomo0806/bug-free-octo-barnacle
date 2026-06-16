"use client";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg pointer-events-none">⌕</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜索片名、导演或类型…"
        className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm text-foreground placeholder:text-muted/60 outline-none focus:border-zinc-400 transition-colors"
      />
    </div>
  );
}
