import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        form
      );
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-inputs">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="inputs-form"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="inputs-form"
          required
        />
        <button type="submit" style={{ borderRadius: "10px" }}>
          Login
        </button>
      </form>
      <p
        onClick={() => navigate("/signup")}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        Don't have an account? Signup
      </p>
    </div>
  );
}
