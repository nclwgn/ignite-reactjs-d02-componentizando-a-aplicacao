import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: {
    Source: string;
    Value: string;
  }[]
}

interface Genre {
  title: string;
}

interface ContentProps {
  selectedGenre: Genre;
  movies: Movie[];
}

export function Content({
  selectedGenre,
  movies
}: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}