"use client";

import { useState, useMemo } from "react";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { getAllMovies } from "@/lib/movies";

export default function Home() {
  const [query, setQuery] = useState("");
  const movies = useMemo(() => getAllMovies(), []);

  const filtered = useMemo(
    () =>
      query
        ? movies.filter(
            (m) =>
              m.title.includes(query) ||
              m.director.name.includes(query) ||
              m.genre.some((g) => g.includes(query))
          )
        : movies,
    [query, movies]
  );

  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">经典电影</h1>
            <p className="text-sm text-muted mt-0.5">历久弥新的银幕佳作</p>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-8 w-full">
        {query && (
          <p className="text-sm text-muted mb-4">
            搜索 &ldquo;{query}&rdquo;，共 {filtered.length} 部电影
          </p>
        )}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted">
            <p className="text-lg">未找到匹配的电影</p>
            <p className="text-sm mt-1">试试其他关键词</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filtered.map((movie) => (
              <MovieCard key={movie.id} movie={movie} id={movie.id} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
