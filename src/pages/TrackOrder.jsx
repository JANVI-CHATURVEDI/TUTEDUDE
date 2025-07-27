import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const TrackOrder = () => {
  const truckRef = useRef(null);

  const deliverOrder = () => {
    if (truckRef.current) {
      truckRef.current.classList.add("animate-to-end");
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-[90vh] flex flex-col justify-between items-center bg-gradient-to-br from-[#f0ebfd] to-[#e8e0f8] font-sans px-4">
      
      <div className="mt-12 text-center w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-[#1C1E38]">Track Your Order</h2>

        {/* Step Progress Bar */}
        <div className="relative mt-16 mb-6 flex justify-between items-center px-4">
          {/* Background line */}
          <div className="absolute top-10 left-12 right-12 h-1 bg-gray-300 z-0"></div>

          {/* Truck icon */}
          <img
            ref={truckRef}
            src="https://img.icons8.com/ios-filled/100/1C1E38/delivery.png"
            alt="Truck"
            className="w-12 h-12 absolute top-2 left-0 z-10 animate-initial"
          />

          {/* Step labels */}
          <div className="w-24 text-[#3A2D5F] font-semibold">Placed</div>
          <div className="w-24 text-[#3A2D5F] font-semibold text-center">Dispatched</div>
          <div className="w-24 text-[#3A2D5F] font-semibold text-right">Delivered</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            onClick={() => alert("Payment Successful!")}
            className="bg-[#9A68F8] text-white px-5 py-3 rounded-lg text-base shadow hover:bg-[#8A5AE3] transition"
          >
            Pay
          </button>
          <button
            onClick={deliverOrder}
            className="bg-[#9A68F8] text-white px-5 py-3 rounded-lg text-base shadow hover:bg-[#8A5AE3] transition"
          >
            Delivered
          </button>
          <Link
            to="/"
            className="bg-[#7455C6] text-white px-5 py-3 rounded-lg text-base shadow hover:bg-[#5a4ac7] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-12 mb-6">
        Simulated 10-minute delivery animation. Click "Delivered" to complete.
      </p>
    </div>
    </>
  );
};

export default TrackOrder;
