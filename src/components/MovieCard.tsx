import Link from "next/link";
import type { Movie } from "@/lib/movies";

export default function MovieCard({ movie, id }: { movie: Movie; id: number }) {
  const initial = movie.title.charAt(0);
  const hue = (id * 37) % 360;

  return (
    <Link
      href={`/movie/${id}`}
      className="block bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
    >
      <div
        className="h-48 flex items-center justify-center text-6xl font-bold text-white/90 select-none"
        style={{ background: `hsl(${hue}, 55%, 55%)` }}
      >
        {initial}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-base leading-snug line-clamp-1">{movie.title}</h3>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>{movie.year}</span>
          <span className="flex items-center gap-1">
            <span className="text-amber-500">★</span>
            {movie.rating}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {movie.genre.slice(0, 3).map((g) => (
            <span key={g} className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-muted">
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
