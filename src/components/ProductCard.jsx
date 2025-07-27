import { Link } from "react-router-dom";
import { products } from "../data/products.js";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-6">
      {products.map((item) => (
        <Link
          to={`/product/${item.id}`}  // use product.id instead of index
          key={item.id}
          className="bg-[#9b83e3] rounded-xl shadow-md p-4 transition-transform hover:scale-105 hover:shadow-xl duration-200"
        >
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
