import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products as allProducts } from "../data/products";
import Navbar from "../components/Navbar";

const SearchAllProducts = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    verified: false,
    supplier: "",
    minPrice: 0,
    maxPrice: 10000,
    rating: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClearFilters = () => {
    setSearchText("");
    setFilters({
      verified: false,
      supplier: "",
      minPrice: 0,
      maxPrice: 10000,
      rating: 0,
    });
  };

  const filteredProducts = allProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (!filters.verified || product.verified) &&
      (!filters.supplier || product.vendor === filters.supplier) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      product.rating >= filters.rating
    );
  });

  return (
    <div className="bg-[#c0a7e5] min-h-screen">
      <Navbar />
    <div className="p-6 max-w-7xl mx-auto ">
      {/* 🔍 Search Bar */}
      <div className="bg-purple-100 p-4 rounded-xl shadow mb-6">
        <input
          type="text"
          placeholder="Search by product name..."
          className="w-full px-4 py-2 rounded-lg outline-none bg-white shadow-sm border border-purple-200"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* 🧰 Filters Panel */}
      <div className="bg-purple-50 p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold text-purple-900 mb-4">Filter Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
          {/* ✅ Verified */}
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <input
              type="checkbox"
              name="verified"
              checked={filters.verified}
              onChange={handleFilterChange}
              className="accent-purple-600 w-4 h-4"
            />
            <label htmlFor="verified" className="text-purple-800 font-medium">
              Verified Only
            </label>
          </div>

          {/* 👤 Supplier */}
          <div className="flex flex-col">
            <label className="text-purple-800 font-medium mb-1">Supplier</label>
            <select
              name="supplier"
              value={filters.supplier}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded-lg bg-white shadow-sm border border-purple-200"
            >
              <option value="">All Suppliers</option>
              {[...new Set(allProducts.map((p) => p.vendor))].map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* 💰 Price Range */}
          <div className="flex flex-col">
            <label className="text-purple-800 font-medium mb-1">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded-lg bg-white shadow-sm border border-purple-200"
              placeholder="e.g. 10"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-purple-800 font-medium mb-1">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="px-3 py-2 rounded-lg bg-white shadow-sm border border-purple-200"
              placeholder="e.g. 500"
            />
          </div>

          {/* ⭐ Rating */}
          <div className="flex flex-col">
            <label className="text-purple-800 font-medium mb-1">Minimum Rating</label>
            <input
              type="number"
              name="rating"
              value={filters.rating}
              onChange={handleFilterChange}
              min={0}
              max={5}
              step={0.1}
              className="px-3 py-2 rounded-lg bg-white shadow-sm border border-purple-200"
              placeholder="e.g. 4.0"
            />
          </div>
        </div>
      </div>

      {/* 🧹 Clear Filters */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleClearFilters}
          className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>

      {/* 📦 Products */}
      {filteredProducts.length > 0 ? (
        <ProductCard data={filteredProducts} />
      ) : (
        <div className="text-center text-gray-600 mt-10 text-lg">
          😕 No products found matching your criteria.
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchAllProducts;
