import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full mt-20">
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 sm:mt-8">
          <input
            className="w-full p-2 mb-4 border-2 rounded"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-2 mb-4 border-2 rounded"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-accent text-white p-2 rounded hover:bg-accent-dark mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-6 sm:mt-8 tracking-wide">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-accent font-medium text-xl ml-1 sm:ml-4 tracking-wide"
          >
            Register here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
