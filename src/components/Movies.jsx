/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MoviesList = ({movies}) => {
  return (
      <ul className="movies">
        {movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={"movie of: " + movie.Poster} />
          </li>
        ))}
      </ul>
  );
};
// eslint-disable-next-line react/prop-types
export const Movies = ({movies}) => {
  console.log(movies)
  const hasmovies = movies;
  return hasmovies ? <MoviesList movies={movies} /> : <p className="notFound">Movies Not Found</p>;
};
