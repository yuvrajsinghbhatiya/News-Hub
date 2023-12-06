import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Home({ categories, topHeadlines }) {
  const categoryImageUrls = [
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://telugu.oneindia.com/img/600x90/2023/09/stock-market-high-33-1694440934.jpg",
    "https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/cyberwarfare-1.jpg",
    "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/315730045_3431184217110678_765725347193456354_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=173fa1&_nc_ohc=316x2MlvcigAX_CjpBj&_nc_ht=scontent.fagr1-4.fna&oh=00_AfAQmbSpqc4YqoBA6lsa7siY-QT11nI6EO8stUHBkAdGcQ&oe=65742244",
    "https://imgeng.jagran.com/images/2022/nov/Cirkus1669599578227.jpg",
    "https://media.post.rvohealth.io/wp-content/uploads/2023/11/male-doctor-talking-patient-732x549-thumbnail-732x549.jpg",
  ];

  const visibleCategories = categories.slice(0, 6);
  const visibleCategoryImageUrls = categoryImageUrls.slice(0, 6);

  const topHeadlinesTop = topHeadlines.slice(0, 4);
  const topHeadlinesBottom = topHeadlines.slice(4, 8);

  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const toggleFavorite = (index) => {
    const updatedFavoriteArticles = [...favoriteArticles];
    if (updatedFavoriteArticles.includes(index)) {
      const indexToRemove = updatedFavoriteArticles.indexOf(index);
      updatedFavoriteArticles.splice(indexToRemove, 1);
    } else {
      updatedFavoriteArticles.push(index);
    }
    setFavoriteArticles(updatedFavoriteArticles);
  };

  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

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

      {/* Burger menu (Visible on smaller screens) */}
      <div className="bg-secondary text-white p-4 mt-4 sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold uppercase">Categories</span>
          <button onClick={toggleBurgerMenu} className="text-lg">
            ☰
          </button>
        </div>

        {isBurgerMenuOpen && (
          <div className="mt-4 overflow-x-auto">
            {visibleCategories.map((category, index) => (
              // Use Link instead of div for navigation
              <Link
                to={`/category/${category}`} // Specify the path to the category page
                key={index}
                className="text-md capitalize hover:text-accent tracking-wider p-2"
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4 p-4 sm:p-8 lg:p-16 cursor-pointer">
        {visibleCategories.map((category, index) => (
          <Link to={`/category/${category}`}>
            <div
              key={index}
              className="h-40 sm:h-48 md:h-60 bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: `url(${visibleCategoryImageUrls[index]})`,
              }}
            >
              <div className="inset-0 bg-black opacity-50 absolute rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to={`/category/${category}`}
                  className="text-white text-lg font-semibold uppercase tracking-wider"
                >
                  {category}
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Top Headlines section */}

      <div className="breakingNews mt-40 text-left p-8">
        <h1 className="mb-0 text-5xl font-extrabold text-dark uppercase ">
          Top <span className="text-accent">Headlines</span>
        </h1>
      </div>

      <div className="p-4 sm:p-8 ">
        <div className="grid gap-12">
          {topHeadlinesTop.slice(0, 4).map((article, index) => (
            <div key={index} className="flex flex-col sm:flex-row shadow">
              {/* Left side: Image */}
              <div className="w-full sm:w-1/3 relative rounded overflow-hidden mb-4 sm:mb-0">
                <img
                  src={article.urlToImage || visibleCategoryImageUrls[index]}
                  alt="Article"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Right side: Details */}
              <div className="flex flex-col w-full  p-6 sm:p-4 gap-5 relative">
                <h3 className="text-xl font-bold mb-2">
                  {article.title || `Category ${index + 1}`}
                </h3>
                <p className="text-gray-500 mb-4">
                  {article.description || "No description available."}
                </p>

                {/* Heart icon */}
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                  <button className="flex">
                    <FaRegHeart size={24} className="text-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Breaking News section */}

        <div className="breakingNews mt-40 text-left p-8">
          <h1 className="mb-0 text-5xl font-extrabold text-dark uppercase ">
            BREAKING <span className="text-accent">NEWS</span>
          </h1>
        </div>

        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topHeadlinesBottom.slice(0, 4).map((article, index) => (
              <div key={index} className="relative flex flex-col shadow">
                {/* Left side: Image */}
                <div
                  className="w-full h-40 bg-cover bg-center relative rounded mb-4"
                  style={{
                    backgroundImage: `url(${
                      article.urlToImage || visibleCategoryImageUrls[index]
                    })`,
                  }}
                >
                </div>

                {/* Right side: Details */}
                <div className="flex-1 p-4 mb-16">
                  <h3 className="text-lg font-bold mb-2">
                    {article.title || `Headline ${index + 1}`}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {article.description || "No description available."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:font-bold"
                  >
                    Read more
                  </a>
                </div>

                {/* Author section */}
                <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                  <div className="flex items-center">
                    <img
                      src={
                        article.urlToImage || visibleCategoryImageUrls[index]
                      }
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
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
                    <div className="ml-auto">
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
      </div>
    </>
  );
}

export default Home;
