import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function FoodDetails() {
  const { id } = useParams();

  const [food, setFood] = useState(null);

  useEffect(() => {
    fetchFood();
  }, []);

  async function fetchFood() {
    try {
      const res = await api.get(`/foods/${id}`);
      setFood(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!food) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img
        src={food.image}
        alt={food.name}
      />

      <h1>{food.name}</h1>

      <p>{food.description}</p>

      <h3>Category</h3>
      <p>{food.category}</p>

      <h3>Price</h3>
      <p>₹ {food.price}</p>

      <h3>Rating</h3>
      <p>{food.rating}</p>

      <h3>Ingredients</h3>

      <ul>
        {food.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Recipe</h3>

      <ol>
        {food.recipe.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default FoodDetails;