import React from 'react';
import Navbar from '../components/Navbar';

const SingleProductPage = ({ product }) => {
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f3e8ff] text-xl font-semibold text-gray-700">
                Product not found 😢
            </div>
        );
    }

    return (

        <>
        <Navbar />
        <div className="min-h-screen bg-[#c0a7e5] p-6 flex flex-col items-center">

            
            {/* Product Image */}
            <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-lg">
                <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-lg"
                    />
            </div>

            {/* Product Details */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-md w-full max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-700 text-base">
                    {product.description || "This is a fresh and high-quality product just for you!"}
                </p>
                <div className="mt-3 text-yellow-700 text-lg font-semibold">
                    ⭐ Rating: {product.rating}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md">
                    Buy Now
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md">
                    Add to Cart
                </button>
            </div>

            {/* Seller Info */}
            <div className="w-full max-w-lg bg-white px-5 py-4 mt-6 rounded-xl shadow-md flex items-center gap-4">
                <img
                    src="https://api.dicebear.com/7.x/thumbs/svg?seed=Vinod"
                    alt="seller"
                    className="w-14 h-14 rounded-full border border-gray-300"
                />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">Vinod Kumar</span>
                    <span className="text-sm text-gray-600">Fresh Mart - Gwalior</span>
                    <span className="text-sm text-yellow-700 mt-1">⭐ 4.6 (143 reviews)</span>
                    <span className="text-sm text-gray-500">📍 Near Dussehra Maidan, Gwalior</span>
                </div>
            </div>




            {/* Reviews Section */}
            <div className="mt-6 bg-white w-full max-w-2xl p-5 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Reviews</h3>
                <p className="text-gray-600 italic">“Amazing quality and fresh! Loved it.”</p>
            </div>

            {/* Comment Section */}
            <div className="mt-6 bg-white w-full max-w-2xl p-5 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Leave a Comment</h3>
                <textarea
                    className="w-full p-3 rounded-lg border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                    rows="5"
                    placeholder="Write your thoughts..."
                ></textarea>
            </div>
        </div>
     </>
    );
};

export default SingleProductPage;
