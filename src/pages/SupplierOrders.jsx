import React, { useState } from "react";

const SupplierOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#12345",
      product: "Purple Sneakers",
      quantity: 2,
      price: 4000,
      vendor: "Mansi Traders",
      deliveryDate: "28 July 2025",
      status: "Pending",
    },
    // Add more orders here if needed
  ]);

  const markDelivered = (index) => {
    const updated = [...orders];
    updated[index].status = "Delivered";
    setOrders(updated);
  };

  return (
    <div className="min-h-screen bg-[#f5f3fa] flex justify-center p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#8A5AE3] mb-8">
          Supplier Orders
        </h1>

        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-[#f1ecfc] border-l-[6px] border-[#9A68F8] rounded-xl p-6 mb-6 hover:bg-[#ede3ff] transition"
          >
            <div className="flex flex-wrap justify-between gap-4 mb-4 text-sm sm:text-base">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Product:</strong> {order.product}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>Vendor:</strong> {order.vendor}</p>
              <p><strong>Expected Delivery:</strong> {order.deliveryDate}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                Status: <span className={`status-text ${order.status === "Delivered" ? "text-green-600" : ""}`}>{order.status}</span>
              </span>
              <button
                onClick={() => markDelivered(index)}
                disabled={order.status === "Delivered"}
                className={`px-4 py-2 rounded font-medium transition ${
                  order.status === "Delivered"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#9A68F8] hover:bg-[#7455C6] text-white"
                }`}
              >
                {order.status === "Delivered" ? "Delivered" : "Mark as Delivered"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierOrders;
