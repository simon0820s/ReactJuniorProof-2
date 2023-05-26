import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
import "./App.css";

function App() {
  const { movies: mappedMovies } = useMovies();

  return (
    <div className="page">
      <header className="head">
        <h1>Search Movies</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix... " />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="main">
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
