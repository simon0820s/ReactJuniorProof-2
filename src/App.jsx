import { useEffect, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/Movies";
import "./App.css";

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new window.FormData(event.target);
    const inputQuery = data.get("inputQuery");
    console.log(inputQuery);
  };

  const handleSearch = (event) => {
    updateSearch(event.target.value);
  };
  return (
    <div className="page">
      <header className="head">
        <h1>Search Movies</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            onChange={handleSearch}
            value={search}
            name="inputQuery"
            placeholder="Avengers, Star Wars, The Matrix... "
          />
          <button type="submit">Search</button>
        </form>
        <p style={{ color: "red" }}>{error}</p>
      </header>

      <main className="main">
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
