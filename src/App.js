import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import { fetchNews } from './api/news';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(country, category, query);
      setArticles(data);
    };
    getNews();
  }, [category, country, query]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar
        onCategoryChange={setCategory}
        onCountryChange={setCountry}
        onSearch={(value) => {
          setQuery(value);
          if (value.length > 0) {
            setCategory('');
            setCountry('');
          }
        }}
      />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;