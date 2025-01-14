import { Link } from "react-router-dom";
export default function Card({ id, title, image }) {
  return (
    <div key={id} className="col">
      <Link to={"/movies/" + id}>
        <div className="card h-100 ">
          <img src={image} className="card-img-top h-100" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
