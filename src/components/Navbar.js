import countries from '../data/countries';

const categories = ['general', 'business', 'technology', 'sports', 'entertainment'];

function Navbar({ onCategoryChange, onCountryChange, onSearch }) {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">🌍 NewsFlash</h1>
      <div className="flex gap-4">
        <select onChange={(e) => onCountryChange(e.target.value)} className="text-black px-2 py-1 rounded">
          <option value="">All Countries</option>
          {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
        </select>

        <select onChange={(e) => onCategoryChange(e.target.value)} className="text-black px-2 py-1 rounded">
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search keywords..."
        onChange={(e) => onSearch(e.target.value)}
        className="text-black px-3 py-1 rounded w-full md:w-1/3"
      />
    </nav>
  );
}

export default Navbar;