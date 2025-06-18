import React from "react";

export default function NewsCard({ article }) {
  const { title, description, url, image, source, publishedAt } = article;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>
        <div className="text-xs text-gray-400 mt-auto">
          <span>{source.name || source}</span> ·{" "}
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}