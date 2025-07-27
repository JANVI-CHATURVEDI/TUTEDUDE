// SupplierProfile.jsx
import React, { useState } from "react";

const SupplierProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/300?img=12");

  const [formData, setFormData] = useState({
    name: "Mansi Gupta",
    company: "Fresh & Tasty Foods Pvt Ltd",
    gst: "27ABCDE1234F1Z5",
    email: "freshfoods@supplier.com",
    location: "Mumbai, India",
    phone: "+91-9876543210",
    address: "Plot 23, MIDC Area, Mumbai - 400001",
    info: "Supplier of premium food and snacks across India."
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    setIsEditable(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-5">

        {/* Logo */}
        <div className="text-center mb-3">
          <img src="https://via.placeholder.com/150x40?text=My+Logo" alt="Logo" className="mx-auto h-10" />
        </div>

        {/* Profile Image */}
        <div className="text-center relative mb-4">
          <label htmlFor="profile-pic-upload" className="relative inline-block cursor-pointer">
            <img
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover shadow-md"
            />
            <span className="absolute bottom-0 right-0 bg-purple-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
              +
            </span>
            <input
              type="file"
              id="profile-pic-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <h2 className="text-lg text-purple-800 font-semibold mt-2">Supplier Profile</h2>
        </div>

        {/* Form */}
        <div className="space-y-3">
          {[
            { label: "Supplier Name", id: "name" },
            { label: "Company Name", id: "company" },
            { label: "GST Number", id: "gst" },
            { label: "Email", id: "email" },
            { label: "Location", id: "location" },
            { label: "Phone", id: "phone" },
            { label: "Address", id: "address", type: "textarea" },
            { label: "Additional Info", id: "info", type: "textarea" },
          ].map(({ label, id, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-semibold text-purple-700">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  rows={2}
                  className="w-full p-2 border rounded-md text-sm"
                  value={formData[id]}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              ) : (
                <input
                  type="text"
                  id={id}
                  className="w-full p-2 border rounded-md text-sm"
                  value={formData[id]}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                />
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-4 space-x-2">
          {!isEditable ? (
            <button
              onClick={() => setIsEditable(true)}
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={saveChanges}
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900"
            >
              Save
            </button>
          )}
        </div>

        <button
          onClick={() => (window.location.href = "s.html")}
          className="mt-4 w-full bg-purple-500 hover:bg-purple-800 text-white py-2 rounded"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default SupplierProfile;
