import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddFood() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
    rating: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/foods", formData);

      navigate("/foods");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Add New Food</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="submit-btn"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

export default AddFood;