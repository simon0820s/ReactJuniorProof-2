// eslint-disable-next-line react/prop-types
const MoviesList = ({movies}) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={"movie of: " + movie.Poster} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const MoviesNotFound = () => {
  <p>Movies not found</p>;
};

// eslint-disable-next-line react/prop-types
export const Movies = ({movies}) => {
  const hasmovies = movies?.length > 0;
  return hasmovies ? <MoviesList movies={movies} /> : <MoviesNotFound />;
};
