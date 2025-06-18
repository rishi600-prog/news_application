import React from "react";

export default function NewsCard({ article }) {
  const { title, description, url, image, source, publishedAt } = article;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-4 p-4 bg-[#1f1f1f] rounded-xl shadow transition-transform hover:scale-[1.02] hover:backdrop-blur-md hover:bg-white/10 hover:shadow-lg hover:border hover:border-white/20"
    >
      <div className="md:w-2/3 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 mb-2 line-clamp-3">{description}</p>
        <div className="text-xs text-gray-400 mt-auto">
          <span>{source.name || source}</span> · {" "}
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="md:w-1/3 h-40 object-cover rounded-lg"
        />
      )}
    </a>
  );
}
