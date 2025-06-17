import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}` // Fetching top headlines from the US
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Headlines</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : articles && articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news articles found.</p>
      )}
    </section>
  );
}

export default Home;
