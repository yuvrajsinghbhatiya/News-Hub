import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function NewsDetail() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=9c42440d595145f986d3701de15fee0d`
        );
        const selectedArticle = response.data.articles[articleId];
        setArticle(selectedArticle);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center mt-14">
      <div className="p-8 sm:p-16 mt-6">
        <div className="bg-white rounded shadow p-4 sm:p-6">
          {/* Image */}
          <div className="mb-4">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Details */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-500 mb-4">
              {article.description || "No description available."}
            </p>

            {/* Author, Date */}
            <div className="flex items-center">
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
              <div className="mt-2">
                <button className="flex">
                  {/* Adjust the heart icon as needed */}
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
