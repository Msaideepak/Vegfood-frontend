import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      user &&
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/foods");

      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;