import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [country, setCountry] = useState("us");
  const [query, setQuery] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar country={country} setCountry={setCountry} query={query} setQuery={setQuery} />
      <main className="flex-grow">
        <Home country={country} query={query} />
      </main>
      <Footer />
    </div>
  );
}

export default App;