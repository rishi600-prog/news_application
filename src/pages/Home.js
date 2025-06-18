import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

export default function Home({ country, category, query }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = process.env.REACT_APP_GNEWS_API_KEY;
    const params = new URLSearchParams({ token, lang: "en", max: "20" });

    let endpoint = "https://gnews.io/api/v4/top-headlines";
    if (query) {
      endpoint = "https://gnews.io/api/v4/search";
      params.set("q", query);
    } else {
      if (country) params.set("country", country);
      if (category) params.set("category", category);
    }

    fetch(`${endpoint}?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GNews fetch error:", err);
        setArticles([]);
        setLoading(false);
      });
  }, [country, category, query]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {query
          ? `Results for "${query}"`
          : `Top ${category.charAt(0).toUpperCase() + category.slice(1)} News ${
              country ? `(${country.toUpperCase()})` : "(Global)"
            }`}
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : articles.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((a, i) => (
            <NewsCard key={i} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No articles found.</p>
      )}
    </section>
  );
}