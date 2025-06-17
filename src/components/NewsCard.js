export default function NewsCard({ article }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col hover:shadow-lg transition-all duration-200">
      <img src={article.urlToImage || 'https://via.placeholder.com/400'} alt="news" className="w-full h-48 object-cover rounded" />
      <h2 className="font-bold text-lg mt-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-600 hover:underline pt-2">Read More →</a>
    </div>
  );
}