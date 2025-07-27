import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [coupons, setCoupons] = useState([
    { id: 1, type: "cash", value: 30, used: false },
    { id: 2, type: "scratch", img: "https://i.imgur.com/B3vlnbd.png", text: "Free Delivery", used: false },
    { id: 3, type: "cash", value: 50, used: false },
    { id: 4, type: "scratch", img: "https://i.imgur.com/Mn8KQ6u.png", text: "20% OFF", used: false }
  ]);
  const [claimedBalance, setClaimedBalance] = useState(0);

  const handleUseCoupon = (id, value) => {
    setCoupons(prev =>
      prev.map(c =>
        c.id === id ? { ...c, used: true } : c
      )
    );
    setClaimedBalance(prev => prev + value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1edfb] to-[#eae6f9] px-4 py-8 text-[#262848]">
      <div className="max-w-xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-[#8A5AE3] mb-6">My Wallet</h1>
        <div className="bg-white rounded-xl shadow p-4 mb-6 text-lg font-semibold text-[#3A2D5F]">
          Claimed Balance: ₹{claimedBalance}
        </div>

        {coupons.map(coupon => (
          <div
            key={coupon.id}
            className="bg-gradient-to-br from-white to-[#f4f0fd] rounded-xl shadow-md p-4 mb-5 border-l-4 border-dashed border-[#8A5AE3] flex justify-between items-center relative"
          >
            {coupon.type === "cash" ? (
              <>
                <div>
                  <div className="text-xl font-bold text-[#262848]">₹{coupon.value} OFF</div>
                  <div className="text-sm text-gray-600">Valid on next food order</div>
                  <div className="text-xs italic text-gray-400">{coupon.used ? "Already Used" : "Active"}</div>
                </div>
                <button
                  disabled={coupon.used}
                  onClick={() => handleUseCoupon(coupon.id, coupon.value)}
                  className={`px-4 py-2 rounded-xl font-semibold transition ${
                    coupon.used
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-[#8A5AE3] hover:bg-[#7455C6] text-white"
                  }`}
                >
                  {coupon.used ? "Used" : "Use Now"}
                </button>
              </>
            ) : (
              <ScratchCard coupon={coupon} />
            )}
          </div>
        ))}

        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-[#9A68F8] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7455C6] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

// Separate ScratchCard component for reuse
const ScratchCard = ({ coupon }) => {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#c2b6e3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText("Scratch Here", 50, 45);

    const start = () => (isDrawingRef.current = true);
    const end = () => (isDrawingRef.current = false);
    const draw = (e) => {
      if (!isDrawingRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.fill();
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mouseup", end);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div className="relative w-[200px] h-[80px] rounded-lg overflow-hidden cursor-crosshair">
      <img
        src={coupon.img}
        alt={coupon.text}
        className="w-full h-full object-cover"
      />
      <canvas
        ref={canvasRef}
        width={200}
        height={80}
        className="absolute top-0 left-0 z-10"
      ></canvas>
    </div>
  );
};

export default Wallet;
