import { Link } from "react-router-dom";
import { products as allProducts } from "../data/products.js";

const ProductCard = ({ data, limit }) => {
  // Decide what products to show: from props or all
  let itemsToShow = data || allProducts;

  // Apply limit if passed
  if (limit) {
    itemsToShow = itemsToShow.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-6">
      {itemsToShow.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="relative bg-[#9b83e3] rounded-xl shadow-md p-4 transition-transform hover:scale-105 hover:shadow-xl duration-200"
        >
          {/* Verified Badge */}
          {item.verified && (
            <div className="absolute top-2 right-2 bg-white text-blue-600 border border-blue-500 px-2 py-[2px] text-[11px] font-semibold rounded-full shadow flex items-center gap-1 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Verified
            </div>
          )}

          <img
            src={`${item.img}?w=300&h=200&fit=crop`}
            alt={item.name}
            className="rounded-lg w-full h-40 object-cover"
          />
          <h2 className="text-lg font-bold mt-3 text-gray-900">{item.name}</h2>
          <p className="text-black font-semibold text-lg">₹{item.price}</p>

          <div className="flex items-center gap-1 text-sm text-gray-800 mt-1">
            ⭐ {item.rating}
          </div>

          <div className="flex gap-2 mt-2 text-xs text-[#3e3e3e] flex-wrap">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#f2f2f2] px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-4 bg-[#2e2e2e] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-md w-full font-medium">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
