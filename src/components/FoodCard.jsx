import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  addFavorite
} from "../features/favoriteSlice";

function FoodCard({ food }) {

  const dispatch = useDispatch();

  return (
    <div className="card">

      <img
        src={food.image}
        alt={food.name}
      />

      <h3>{food.name}</h3>

      <p>{food.category}</p>

      <p>⭐ {food.rating}</p>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/foods/${food.id}`}
        >
          View
        </Link>

        <button
          className="favorite-btn"
          onClick={() =>
            dispatch(addFavorite(food))
          }
        >
          ❤ Favorite
        </button>

      </div>

    </div>
  );
}

export default FoodCard;