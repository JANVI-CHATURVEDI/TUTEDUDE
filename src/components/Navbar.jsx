import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="relative flex items-center justify-between p-4 bg-[#967ee3] shadow-sm sticky top-0 z-50">
      {/* ☰ Menu Icon */}
      <div
        className="text-2xl font-bold text-[#2e2e2e] cursor-pointer"
        onClick={() => setShowMenu(true)}
      >
        ☰
      </div>

      {/* Logo */}
      <img src={logo} alt="Vendify Logo" className="h-12 object-contain" />

      {/* Right side */}
      <div className="flex gap-4 items-center">
        {/* Cart */}
        <Link to="/vendor/cart" className="relative text-[#2e2e2e] text-xl cursor-pointer">
          🛒
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </Link>

        {/* Profile */}
        <Link to="/vendor-profile">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-white cursor-pointer"
          />
        </Link>
      </div>

      {/* Slide Menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Slide-out Panel */}
          <div className="fixed top-0 left-0 h-full w-72 bg-[#9b65d0] shadow-lg z-50 p-6 transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              onClick={() => setShowMenu(false)}
              className="text-[#967ee3] text-xl absolute top-4 right-4 hover:text-[#5a4ac7]"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="mb-8">
              <img
                src={logo}
                alt="Vendify Logo"
                className="w-28 object-contain h-12 mx-auto"
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4">
              <Link
                to="/vendor/track"
                className="flex items-center gap-3 bg-[#e3e3e8] text-[#1C1E38] px-5 py-3 rounded-xl font-medium text-lg hover:bg-[#564280] hover:text-[#7455C6] transition transform hover:scale-[1.02]"
              >
                📍 <span>Track Order</span>
              </Link>
              <Link
                to="/payment"
                className="flex items-center gap-3 bg-[#e3e3e8] text-[#1C1E38] px-5 py-3 rounded-xl font-medium text-lg hover:bg-[#564280] hover:text-[#7455C6] transition transform hover:scale-[1.02]"
              >
                💳 <span>Payments</span>
              </Link>
              <Link
                to="/vendor/wallet"
                className="flex items-center gap-3 bg-[#e3e3e8] text-[#1C1E38] px-5 py-3 rounded-xl font-medium text-lg hover:bg-[#564280] hover:text-[#7455C6] transition transform hover:scale-[1.02]"
              >
                👛 <span>Wallet</span>
              </Link>
              <Link
                to="/vendor-profile"
                className="flex items-center gap-3 bg-[#e3e3e8] text-[#1C1E38] px-5 py-3 rounded-xl font-medium text-lg hover:bg-[#564280] hover:text-[#7455C6] transition transform hover:scale-[1.02]"
              >
                👤 <span>Profile</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
