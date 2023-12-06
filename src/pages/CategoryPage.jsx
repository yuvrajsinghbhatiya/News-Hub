import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

function CategoryPage({ categories }) {
  const { categoryName } = useParams();

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [categoryHeadlines, setCategoryHeadlines] = useState([]);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const visibleCategories = categories.slice(0, 6);

  useEffect(() => {
    const fetchCategoryHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${categoryName}&country=us&apiKey=0e9aac360e1d4865a1412e4a7c2a10a3`
        );
        setCategoryHeadlines(response.data.articles);
      } catch (error) {
        console.error("Error fetching category headlines:", error);
      }
    };

    fetchCategoryHeadlines();
  }, [categoryName]);

  return (
    <>
      {/* Categories Section (Visible on larger screens) */}
      <div className={`bg-secondary text-white p-4 mt-4 hidden sm:block`}>
        <div className="flex justify-center space-x-12">
          {visibleCategories.map((category, index) => (
            // Use Link instead of span for navigation
            <Link
              to={`/category/${category}`} // Specify the path to the category page
              key={index}
              className="text-md capitalize hover:text-accent tracking-wider"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Section (Visible on larger screens) */}
      <div className="bg-secondary text-white p-4 mt-4 sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold uppercase">Categories</span>
          <button onClick={toggleBurgerMenu} className="text-lg mt-2">
            ☰
          </button>
        </div>

        {isBurgerMenuOpen && (
          <div className="mt-4 overflow-x-auto">
            {visibleCategories.map((category, index) => (
              <Link
                to={`/category/${category}`}
                key={index}
                className="text-md capitalize hover:text-accent tracking-wider p-2 block"
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="text-center mt-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-accent uppercase">
          {categoryName}
          <span className="text-secondary"> NEWS</span>
        </h1>

        <div className="p-8 sm:p-16 mt-6">
          {categoryHeadlines.map((article, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-white rounded shadow mb-8 p-4 sm:p-6"
            >
              {/* Image (on top for small screens, on the left for larger screens) */}
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <Link >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover rounded cursor-pointer"
                  />
                </Link>
              </div>

              {/* Details */}
              <div className="flex flex-col w-full sm:w-2/3 p-4 sm:p-6 gap-5 text-left">
                <h3 className="text-xl font-bold mb-2">
                  {article.title || `Category ${index + 1}`}
                </h3>
                <p className="text-gray-500 mb-4">
                  {article.description || "No description available."}
                </p>

                {/* Author, Date */}
                <div className="flex items-center text-left mt-2">
                  <img
                    src={article.urlToImage}
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-700">
                      {article.author || "Author"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {article.publishedAt
                        ? new Date(article.publishedAt).toLocaleString([], {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : "Date"}
                    </p>
                  </div>
                  {/* Heart icon */}
                  <div className="mt-auto ml-auto">
                    <button className="flex">
                      <FaRegHeart size={24} className="text-accent" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
