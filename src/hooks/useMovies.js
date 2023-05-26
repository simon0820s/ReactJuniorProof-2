import withResults from "../mocks/withResults.json";
// eslint-disable-next-line no-unused-vars
import noResults from "../mocks/noResults.json";

export function useMovies() {
  const movies = withResults.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies:mappedMovies };
}
