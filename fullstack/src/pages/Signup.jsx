import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users", form);

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container singUp">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signUp-inputs">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="inputs-form"
          required
        />
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
          Signup
        </button>
      </form>
      <p
        onClick={() => navigate("/login")}
        style={{ fontWeight: "bold", cursor: "pointer" }}
      >
        Already have an account? Login
      </p>
    </div>
  );
}
