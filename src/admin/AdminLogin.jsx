import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ must be inside component

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      navigate("/admin/dashboard"); // ✅ redirect
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <div className="admin-header">
          <h2>Admin Portal</h2>
          <hr />
          <br />
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="admin-footer">
          <p>© 2026 Admin Dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;