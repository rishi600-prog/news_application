import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=YOUR_API_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Headlines</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;