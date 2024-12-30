import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleLogin from "./login";
import "./login.css";

function Login() {
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "soldier1@example.com", password: "soldier123", role: "soldier" },
    { email: "soldier2@example.com", password: "soldier456", role: "soldier" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    
 
    <div className="grid grid-cols-2 ">
      {/* left side  */}
      
      <div className="h-[100vh] bg-login ">
       
      </div>

      {/* right side */}
     
      <div className="flex items-center justify-center ">
      <div className=" relative flex flex-col justify-center p-8  h-[80vh] w-[40rem] shadow-2xl rounded-lg">
      <div id="soldierCare-logo" className="absolute right-0 top-[-1.5rem]"></div>
          <h1 className="mb-8 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">SoldierCare Login</span>
          </h1>
          <form
          onSubmit={(e) =>
            handleLogin(e, users, email, password, setError, navigate)
          }
        >
          <div className="mb-4">
          
            <label
              className="block mb-2 text-sm font-bold text-gray-800"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 focus:shadow"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-800"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 focus:shadow"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full text-white bg-[#0284c7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>

    
    </div>
  
  );
}

export default Login;
