import moviesData from "@/data/movies.json";

export type Movie = {
  title: string;
  director: { name: string; region: string };
  year: number;
  genre: string[];
  rating: number;
  duration: number;
  region: string[];
  summary: string;
};

export type MovieWithId = Movie & { id: number };

export function getAllMovies(): MovieWithId[] {
  return (moviesData as { movies: Movie[] }).movies.map((m, i) => ({ ...m, id: i }));
}

export function getMovieById(id: number): MovieWithId | undefined {
  return getAllMovies().find((m) => m.id === id);
}

export function searchMovies(query: string): MovieWithId[] {
  const q = query.toLowerCase();
  return getAllMovies().filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.director.name.toLowerCase().includes(q) ||
      m.genre.some((g) => g.toLowerCase().includes(q))
  );
}
