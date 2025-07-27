import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";




export default function SupplierDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const goToProfile = () => window.location.href = "/sprofile";

    return (
        <div className="min-h-screen bg-[#f3e9ff] text-[#333] font-sans">
            {/* Top Bar */}
            <div className="bg-[#9d6bdc] p-4 flex justify-between items-center">
                <button onClick={toggleSidebar} className="bg-[#6b2dbd] text-white py-2 px-4 rounded text-sm">☰</button>
                <h1 className="text-white text-base text-center flex-grow">
                    <img src={logo} alt="Logo" className="inline-block h-9" />
                </h1>
                <button
                    onClick={() => navigate("/supplier/profile")}
                    className="bg-[#6b2dbd] text-white py-2 px-4 rounded text-sm"
                >
                    Profile
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-[#e5d1f2] p-6 shadow-lg z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={toggleSidebar} className="text-[#6b2dbd] text-lg mb-6">← Back</button>

                <h3 className="text-[#4b0074] text-xl font-semibold mb-6">Menu</h3>

                <Link to="/supplier/orders" className="block mb-4 font-medium text-[#333] hover:text-[#6b2dbd]">
                    Orders
                </Link>

                <Link to="/supplier/products" className="block mb-4 font-medium text-[#333] hover:text-[#6b2dbd]">
                    My Products
                </Link>

                <Link to="/supplier/add-product" className="block mb-4 font-medium text-[#333] hover:text-[#6b2dbd]">
                    Add Product
                </Link>

                <Link to="/supplier/upload-certificate" className="block mb-4 font-medium text-[#333] hover:text-[#6b2dbd]">
                    Upload Certificate
                </Link>

                <Link to="/logout" className="block mt-6 font-medium text-[#333] hover:text-[#6b2dbd]">
                    Logout
                </Link>
            </div>


            {/* Supplier Info */}
            <section className="bg-gradient-to-br from-[#d3bdf0] to-[#f0e6fc] p-8 m-6 rounded-xl shadow flex gap-8 items-center flex-wrap sm:flex-nowrap">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Supplier" className="w-24 h-24 rounded-full object-cover border-4 border-[#9d6bdc]" />
                <div>
                    <h2 className="text-[#4b0074] text-xl mb-2">Fresh & Tasty Foods Pvt Ltd</h2>
                    <p className="text-sm mb-1">Email: freshfoods@supplier.com</p>
                    <p className="text-sm mb-1">Location: Mumbai, India</p>
                    <p className="text-sm mb-1">Status: ✅ Verified Supplier</p>
                    <p className="text-sm">Rating: ⭐⭐⭐⭐☆ (4.2)</p>
                </div>
            </section>

            {/* Orders Section */}
            <section id="order-section" className="p-8 grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {[{
                    id: '001',
                    product: 'Organic Apple Juice',
                    image: 'https://images.unsplash.com/photo-1604908177222-3f3bd79fd4fd'
                }, {
                    id: '002',
                    product: 'Almond Cookies',
                    image: 'https://images.unsplash.com/photo-1589987607627-f8229f0f4e5a'
                }].map(order => (
                    <div key={order.id} className="bg-white text-[#333] rounded-xl shadow hover:-translate-y-1 transition duration-300">
                        <img src={order.image} alt={order.product} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-sm font-semibold mb-1">Order #{order.id}</h3>
                            <p className="text-sm text-[#666] mb-2">Product: {order.product}</p>
                            <button className="bg-[#6b2dbd] text-white text-sm py-1 px-3 rounded hover:bg-[#4a1c99]" onClick={() => alert(`Order #${order.id} details`)}>View Order</button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Upload Certificate */}
            <section id="upload-section" className="p-6">
                <h3 className="text-[#4b0074] text-lg mb-3">Upload Certificate</h3>
                <input type="file" accept="application/pdf,image/*" className="mt-2" />
            </section>

            {/* Footer */}
            <footer className="bg-[#9d6bdc] text-white text-center p-4 mt-8">
                &copy; 2025 Supplier Dashboard. All rights reserved.
            </footer>
        </div>
    );
}
