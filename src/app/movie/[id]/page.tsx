import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMovies } from "@/lib/movies";

export function generateStaticParams() {
  return getAllMovies().map((_, i) => ({ id: String(i) }));
}

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idStr } = await params;
  const movies = getAllMovies();
  const id = Number(idStr);
  const movie = movies[id];
  if (!movie) notFound();

  const hue = (id * 37) % 360;

  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-border bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
            ← 返回
          </Link>
          <span className="text-muted/30">/</span>
          <span className="text-sm text-muted">详情</span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div
            className="shrink-0 w-full md:w-64 h-80 md:h-96 rounded-2xl flex items-center justify-center text-8xl font-bold text-white/90 select-none"
            style={{ background: `hsl(${hue}, 55%, 55%)` }}
          >
            {movie.title.charAt(0)}
          </div>

          <div className="flex-1 min-w-0 space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted">
                <span>{movie.year}</span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  {movie.rating}
                </span>
                <span>{movie.duration} 分钟</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <span key={g} className="text-sm px-3 py-1 rounded-full bg-zinc-100 text-muted">
                  {g}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-sm leading-relaxed">
              <div>
                <span className="font-medium">导演</span>
                <p className="text-muted">{movie.director.name}</p>
              </div>
              <div>
                <span className="font-medium">制片地区</span>
                <p className="text-muted">{movie.region.join(" / ")}</p>
              </div>
              <div>
                <span className="font-medium">剧情简介</span>
                <p className="text-muted leading-relaxed">{movie.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
