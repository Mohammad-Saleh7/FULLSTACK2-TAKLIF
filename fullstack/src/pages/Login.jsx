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
      // مسیر درست برای لاگین
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        form
      );

      // ذخیره توکن در localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/"); // بعد از لاگین به صفحه اصلی تسک‌ها
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate("/signup")}>Don't have an account? Signup</p>
    </div>
  );
}
