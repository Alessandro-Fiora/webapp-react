import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieShowPage() {
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.movie);
      });
  }, []);

  return (
    <div className="container">
      <h1>Movie detail</h1>
      <p>{movie && movie.title}</p>
    </div>
  );
}
