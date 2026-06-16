import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (
    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Foods
      </h1>

      {
        favorites.length === 0 ? (

          <h2>
            No Favorite Foods Added
          </h2>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(food => (

                <div
                  key={food.id}
                  className="favorite-card"
                >

                  <img
                    src={food.image}
                    alt={food.name}
                  />

                  <div className="favorite-content">

                    <h2>
                      {food.name}
                    </h2>

                    <p>
                      🍽 {food.category}
                    </p>

                    <p>
                      ⭐ {food.rating}
                    </p>

                    <p>
                      ₹ {food.price}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(
                            food.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}

export default Favorites;