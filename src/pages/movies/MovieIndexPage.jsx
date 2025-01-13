import { useState, useEffect } from "react";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.movies);
      });
  }, []);

  return (
    <div className="container">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
