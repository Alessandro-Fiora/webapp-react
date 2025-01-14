import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieShowPage() {
  const printStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={i < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
        />
      );
    }

    return stars;
  };

  let navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          if (res.status == 404) navigate("/404");
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);

        setMovie(data.movie);
      });
  }, []);

  return (
    <div id="movie-detail" className="container">
      {movie && (
        <div className="card h-100 mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={movie.image} className="img-fluid mb-3" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body h-100 d-flex flex-column justify-content-between py-0">
                <div>
                  <div className="title-field d-flex justify-content-between">
                    <h2 className="h1 card-title fw-bold">{movie.title}</h2>

                    <Link className="btn btn-primary mb-3" to="/movies">
                      Back to movies
                    </Link>
                  </div>

                  <h6 className="card-subtitle mb-3 text-body-secondary">
                    {movie.director}
                  </h6>
                  <p className="card-text mt-4">{movie.abstract}</p>
                </div>

                {/* REVIEW SECTION */}
                <div className="">
                  {movie.reviews.map((review) => {
                    return (
                      <div key={review.id} className="py-3">
                        <div>{printStars(review.vote).map((star) => star)}</div>
                        <p className="mb-1">"{review.text}"</p>
                        <small className="ms-2"> - {review.name}</small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
