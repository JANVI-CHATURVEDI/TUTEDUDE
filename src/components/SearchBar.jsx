const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 w-[90%] max-w-2xl mx-auto mt-6 bg-[#e8e8e8] rounded-xl px-4 py-2 shadow-md">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 bg-transparent outline-none text-[#2e2e2e] placeholder-[#7c7c7c] text-sm px-2"
      />
      <button className="bg-[#2e2e2e] text-[#e8e8e8] px-4 py-2 rounded-lg hover:bg-[#1e1e1e] transition duration-200 text-sm">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
