import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 text-sm text-center py-6 border-t">
      <div className="max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} NewsXpress. All rights reserved.</p>
        <p className="mt-1">
          Powered by{" "}
          <a href="https://gnews.io" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GNews.io
          </a>
        </p>
      </div>
    </footer>
  );
}