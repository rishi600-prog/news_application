import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    if (!query) {
      setSearchQuery("");
      setResetTrigger((prev) => prev + 1);
    }
  }, [country, category, query]);

  const resetToHome = () => {
    setCountry("in");
    setCategory("general");
    setQuery("");
    setSearchQuery("");
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col text-white">
      <Navbar
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        resetToHome={resetToHome}
      />
      <main className="flex-grow">
        <Home
          country={country}
          category={category}
          query={searchQuery}
          resetTrigger={resetTrigger}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;