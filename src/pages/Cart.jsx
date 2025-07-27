import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 1999,
      quantity: 1,
      img: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      quantity: 1,
      img: "https://via.placeholder.com/60",
    },
  ]);

  const changeQuantity = (id, change) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#262848] text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold text-[#9A68F8] mb-6">🛒 Your Cart</h1>
      
      <div className="w-full max-w-3xl bg-[#3A2D5F]/70 p-6 rounded-xl shadow-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#1C1E38] p-4 rounded-lg mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-300">₹{item.price}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="bg-[#8A5AE3] text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="bg-[#8A5AE3] text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="text-right text-lg font-semibold text-[#9A68F8] mt-6">
          Total: ₹{total}
        </div>
      </div>
    </div>
  );
};

export default Cart;
