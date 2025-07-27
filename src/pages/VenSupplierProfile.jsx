import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { suppliers } from "../data/suppliers";

const VenSupplierProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const supplier = suppliers[id];

  if (!supplier) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600">
        <div className="text-center">
          <p className="text-lg">No supplier data found.</p>
          <button
            className="mt-4 px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            onClick={() => navigate(-1)}
          >
            ⬅️ Go Back
          </button>
        </div>
      </div>
    );
  }

  const { name, avatar, rating, category, city, products, delivery } = supplier;

  const generateProducts = () => {
    const keywords = name.split(" ")[0].toLowerCase();
    return [1, 2, 3].map((n) => ({
      title: `${keywords.charAt(0).toUpperCase() + keywords.slice(1)} Item ${n}`,
      price: 25 + n * 7,
      image: `/product${(n % 3) + 1}.png`,
      certified: n !== 2
    }));
  };

  const productList = generateProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8e0f0] to-[#f5efff] text-gray-800">
      <header className="bg-[#b499d4] text-white text-center py-5 text-2xl font-bold shadow">
        Supplier Profile
      </header>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 mt-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={avatar}
            alt={name}
            className="w-40 h-40 object-cover rounded-xl shadow"
          />
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p><span className="font-medium">Category:</span> {category}</p>
            <p><span className="font-medium">City:</span> {city}</p>
            <p><span className="font-medium">Top Products:</span> {products}</p>
            <p><span className="font-medium">Delivery Time:</span> {delivery}</p>
            <p><span className="font-medium">Rating:</span> ⭐ {rating}/5</p>
          </div>
        </div>

        <div className="my-8">
          <img
            src="/stall.PNG"
            alt="Stall"
            className="w-full rounded-xl shadow-md object-cover h-64"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Top Selling Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productList.map((product, index) => (
              <div
                key={index}
                className="bg-[#f9f5ff] p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="text-lg font-medium">{product.title}</h4>
                <p className="text-sm mb-1">Price: ₹{product.price}/kg</p>
                {product.certified && (
                  <span className="inline-block mt-2 px-3 py-1 text-xs text-white bg-[#b499d4] rounded-full">
                    FSSAI Certified
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenSupplierProfile;
