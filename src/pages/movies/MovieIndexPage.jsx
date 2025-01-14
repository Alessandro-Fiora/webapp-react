import { useState, useEffect } from "react";

import Card from "../../components/Card";

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
      <h1 className="h2">All movies</h1>

      {/* MOVIE RESULTS SECTION */}
      <section id="movie-results" className="pt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 ">
          {movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
