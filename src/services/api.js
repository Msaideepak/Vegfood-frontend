import axios from "axios";

const api = axios.create({
  baseURL:
    "https://vegfood-backend.onrender.com/"
});

export default api;
