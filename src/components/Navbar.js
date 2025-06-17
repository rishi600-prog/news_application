import React from "react";
import { Search } from "lucide-react";

const categories = ["General", "Technology", "Health", "Business", "Sports", "Science", "Entertainment"];

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">NewsXpress</h1>

        <nav className="hidden md:flex space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-gray-600 hover:text-blue-500 transition font-medium"
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="text-gray-500" size={20} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;