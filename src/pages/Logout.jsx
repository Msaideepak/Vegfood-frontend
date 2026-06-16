import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  }, []);

  return <h2>Logging Out...</h2>;
}

export default Logout;