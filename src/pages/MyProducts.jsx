import React, { useState } from "react";

const MyProducts = () => {
  const [products, setProducts] = useState([
    {
      name: "Running Shoes",
      price: 1299,
      image: "https://via.placeholder.com/250x180",
    },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const newProduct = {
        name: "New Product",
        price: 0.0,
        image: e.target.result,
      };
      setProducts([...products, newProduct]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#f5f3fa] flex justify-center py-8 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-[#8A5AE3] mb-8">
          My Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#f0ebff] p-4 rounded-xl shadow-sm hover:-translate-y-1 transition-all"
            >
              <img
                src={product.image}
                alt="Product"
                className="w-full h-44 object-cover rounded-md mb-4"
              />
              <div className="flex justify-between text-sm">
                <p>{product.name}</p>
                <span className="font-semibold">₹{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <label
            htmlFor="upload"
            className="bg-[#9A68F8] hover:bg-[#7455C6] text-white font-medium py-2 px-6 rounded-lg cursor-pointer"
          >
            + Add Product
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
