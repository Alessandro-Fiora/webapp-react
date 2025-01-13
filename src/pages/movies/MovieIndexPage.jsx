import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="h2">Movie List</h1>

      {/* MOVIE RESULTS SECTION */}
      <section className="pt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Director</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <Link to={"/movies/" + movie.id}>{movie.title}</Link>
                </td>
                <td>
                  <Link to={"/movies/" + movie.id}>{movie.director}</Link>
                </td>
                <td>
                  <Link to={"/movies/" + movie.id}>{movie.genre}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
