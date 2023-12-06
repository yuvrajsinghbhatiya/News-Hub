import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase'; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');

  };

  return (
    <nav className="bg-primary p-4 sm:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl sm:text-5xl font-extrabold text-dark uppercase"
        >
          News <span className="text-accent">Hub</span>
        </Link>

        { localStorage.getItem('token') ? (
          <>
            <Link
              to="/favorites"
              className="border-2 border-secondary text-secondary hover:bg-accent hover:text-primary hover:border-none font-semibold py-2 px-4 rounded ml-auto mr-8"
            >
              Favorites
            </Link>
            <button
              className="bg-accent hover:bg-accent-dark text-primary font-semibold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-accent hover:bg-accent-dark text-primary font-semibold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
