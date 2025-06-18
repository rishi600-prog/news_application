import React from "react";
import { Search } from "lucide-react";

const countries = [
  { code: "us", label: "USA" },
  { code: "in", label: "India" },
  { code: "gb", label: "UK" },
  { code: "au", label: "Australia" },
  { code: "ca", label: "Canada" },
];

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

export default function Navbar({
  country,
  setCountry,
  category,
  setCategory,
  query,
  setQuery,
  searchQuery,
  setSearchQuery,
  resetToHome,
}) {
  const handleSearchClick = () => {
    if (query.trim()) setSearchQuery(query);
  };

  const handleSearchEnter = (e) => {
    if (e.key === "Enter" && query.trim()) {
      setSearchQuery(query);
    }
  };

  const handleCategoryClick = (cat) => {
    setSearchQuery("");
    setCategory(cat);
  };

  const handleCountryChange = (val) => {
    setSearchQuery("");
    setCountry(val);
  };

  return (
    <header className="bg-[#1f1f1f] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer hover:text-blue-500 transition-colors"
          onClick={resetToHome}
        >
          NewsXpress
        </h1>

        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={searchQuery ? "" : country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="border rounded px-2 py-1 bg-[#2b2b2b] text-white border-gray-600 hover:border-blue-400 focus:outline-none"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>

          <nav className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-3 py-1 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${
                  category === cat && !searchQuery
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-blue-500 text-white"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center border border-gray-600 rounded-full px-2 py-1 w-64 bg-[#2b2b2b]">
            <input
              type="text"
              className="flex-grow px-2 outline-none bg-transparent text-white"
              placeholder="Search news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchEnter}
            />
            <Search
              size={20}
              className="cursor-pointer text-gray-400 hover:text-blue-400 active:text-blue-600 transition-colors"
              onClick={handleSearchClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

