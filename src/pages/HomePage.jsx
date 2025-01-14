import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
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
    <>
      <div className="container">
        <h1>Homepage</h1>
      </div>
    </>
  );
}
