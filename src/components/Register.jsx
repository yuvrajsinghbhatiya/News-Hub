import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full mt-20">
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide text-center">
          Registration
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 sm:mt-12">
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
            Register
          </button>
        </form>
        <p className="text-center mt-6 sm:mt-12 tracking-wide">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-accent font-medium text-xl ml-4 tracking-wide"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Registration;
