import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieShowPage() {
  let navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          //   console.log(res);

          throw new Error(res.status);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovie(data.movie);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message == 404) navigate("/404");
      });
  }, []);

  return (
    <div className="container pt-5">
      <h1>Movie detail</h1>
      <p>{movie && movie.title}</p>
    </div>
  );
}
