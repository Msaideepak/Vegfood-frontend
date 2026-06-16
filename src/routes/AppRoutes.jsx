import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Foods from "../pages/Foods";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import EditFood from "../pages/EditFood";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Favorites from "../pages/Favorites";
function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/foods"
        element={<Foods />}
      />

      <Route
        path="/foods/:id"
        element={<FoodDetails />}
      />

      <Route
        path="/add-food"
        element={<AddFood />}
      />

      <Route
        path="/edit-food/:id"
        element={<EditFood />}
      />

    <Route
 path="/login"
 element={<Login />}
/>

<Route
 path="/register"
 element={<Register />}
/>

<Route
  path="/logout"
  element={<Logout />}
/>

<Route
  path="/favorites"
  element={<Favorites />}
/>
    </Routes>
  );
}

export default AppRoutes;