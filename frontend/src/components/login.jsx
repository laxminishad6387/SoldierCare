import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Mock user data
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "soldier1@example.com", password: "soldier123", role: "soldier" },
    { email: "soldier2@example.com", password: "soldier456", role: "soldier" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check for email and password match
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError(""); // Clear error if credentials match
      if (user.role === "admin") {
        navigate("/admin-dashbord"); // Redirect to Admin page
      } else if (user.role === "soldier") {
        navigate("/soldier"); // Redirect to Soldier page
      }
    } else {
      setError("Invalid email or password. Please try again!"); // Show error message
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/bcg _img.webp')`, // Replace with your army-related image.
      }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#2b1f11] mb-6">
          SoldierCare Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-800 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b1f11] focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
