import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="bg-primary p-4 sm:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl sm:text-5xl font-extrabold text-dark uppercase"
        >
          News <span className="text-accent">Hub</span>
        </Link>

          {
            isAuthenticated && (
              <Link
                to="/favorites"
                className="border-2 border-secondary text-secondary hover:bg-accent hover:text-primary hover:border-none font-semibold py-2 px-4 rounded ml-auto mr-8"
              >
                Favorites
              </Link>
            )
          }

        {isAuthenticated ? (
          <button
            className="bg-accent hover:bg-accent-dark text-primary font-semibold py-2 px-4 rounded"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-accent hover:bg-accent-dark text-primary font-semibold py-2 px-4 rounded"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
