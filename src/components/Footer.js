import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-500 text-sm text-center py-6 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-semibold">NewsXpress</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Powered by <a href="https://newsapi.org" className="text-blue-500 hover:underline">NewsAPI.org</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;