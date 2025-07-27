import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/search");
  };

  return (
    <>
    <div className="w-full flex flex-col items-center mt-6">
      {/* Search Input */}
      <div
        className="flex items-center gap-3 w-[90%] max-w-2xl bg-[#e8e8e8] rounded-xl px-4 py-2 shadow-md cursor-pointer"
        onClick={handleNavigate}
      >
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-[#2e2e2e] placeholder-[#7c7c7c] text-sm px-2 cursor-pointer"
          onFocus={handleNavigate}
        />
        <button
          className="bg-[#2e2e2e] text-[#e8e8e8] px-4 py-2 rounded-lg hover:bg-[#1e1e1e] transition duration-200 text-sm"
          onClick={handleNavigate}
        >
          Search
        </button>
      </div>
      </div>

      {/* Top 3 Products */}


       <div className=" pt-4 mt-5 pl-4 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold  mr-4 ">Top Products</h2>
       </div>
       
       <div className="w-full flex flex-col items-center ">

      <div className="w-full max-w-6xl px-4 mt-6 mb-4">
        <ProductCard limit={3} />
      </div>

      {/* Show More Button */}
      <button
        onClick={handleNavigate}
        className="mt-4 bg-[#2e2e2e] hover:bg-[#1e1e1e] text-white px-6 py-2 rounded-md text-sm font-medium transition duration-200"
        >
        Show More
      </button>
    
        </div>
        </>
  );
};

export default SearchBar;
