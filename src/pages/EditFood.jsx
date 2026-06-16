import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditFood() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
    rating: ""
  });

  useEffect(() => {
    getFood();
  }, []);

  async function getFood() {
    try {
      const response =
        await api.get(`/foods/${id}`);

      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(
        `/foods/${id}`,
        formData
      );

      navigate("/foods");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Edit Food</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Update Food
        </button>
      </form>
    </div>
  );
}

export default EditFood;