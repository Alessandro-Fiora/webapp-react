import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieShowPage() {
  const printStars = (rating) => {
    let resultStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        resultStars.push(true);
      } else resultStars.push(false);
    }

    return resultStars;
  };

  let navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movieId;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
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
    <div className="container">
      <h1 className="h2">Movie detail</h1>

      {movie && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={movie.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="h1 card-title mt-2">{movie.title}</h2>
                <h6 className="card-subtitle mb-3 text-body-secondary">
                  {movie.director}
                </h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  repellendus ex autem facere et tempore eaque sed magnam
                  nostrum incidunt inventore ullam dolores, odit cumque
                  asperiores dignissimos nihil debitis? Consequatur. Quos
                  laborum, obcaecati vero vel quo dolor! Cupiditate ad voluptate
                  exercitationem odio necessitatibus. Alias placeat maiores, in
                  deleniti quam cum doloremque? Nesciunt cum totam non corporis
                  explicabo eum dicta doloribus.
                </p>
                {/* REVIEW SECTION */}
                <div className="">
                  {movie.reviews.map((review) => {
                    return (
                      <div className="py-3">
                        <div>
                          {printStars(review.vote).map((star, index) =>
                            star ? (
                              <i key={index} className="fa-solid fa-star" />
                            ) : (
                              <i key={index} className="fa-regular fa-star" />
                            )
                          )}
                        </div>
                        <p className="mb-1">"{review.text}"</p>
                        <small>- {review.name}</small>
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
