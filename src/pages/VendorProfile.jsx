import { useRef, useState } from "react";

export default function VendorProfile() {
  const [photo, setPhoto] = useState("https://i.pravatar.cc/100?img=4");
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Ayush");
  const [vendorId, setVendorId] = useState("VNDR1088");

  const [fields, setFields] = useState({
    phone: "+91 98765 43210",
    city: "Kanpur, UP",
    address: "32-A, ABC Nagar",
  });

  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setPhoto(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleFieldChange = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const enableEdit = () => setIsEditing(true);

  const saveProfile = () => setIsEditing(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9A68F8] to-[#9d8eb9] text-white px-4">
      <div className="bg-white/10 backdrop-blur border border-[#dcd7ea] shadow-xl rounded-2xl p-4 max-w-sm w-full flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2">Profile</h2>

        <div className="flex gap-4 items-center w-full">
          <div className="relative w-[70px] h-[70px]">
            <label>
              <img
                src={photo}
                alt="Vendor"
                className="w-full h-full rounded-full border-2 border-[#777189] object-cover cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              />
              <div className="absolute bottom-0 right-0 bg-[#777189] text-white text-xs p-1 rounded-full border-2 border-white cursor-pointer">
                +
              </div>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>

          <div className="flex-1">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#777189] text-white text-sm w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="bg-transparent border-b border-[#777189] text-xs w-full mt-1"
                  value={vendorId}
                  onChange={(e) => setVendorId(e.target.value)}
                />
              </>
            ) : (
              <>
                <h2 className="text-base font-semibold">{name}</h2>
                <p className="text-xs text-[#e3d9ff] mt-1">Vendor ID: {vendorId}</p>
              </>
            )}

            <div className="mt-2">
              {isEditing ? (
                <button
                  className="bg-[#7455C6] text-white text-xs px-3 py-1 rounded"
                  onClick={saveProfile}
                >
                  Save
                </button>
              ) : (
                <button
                  className="border border-[#dcd7ea] text-[#e3d9ff] text-xs px-3 py-1 rounded hover:bg-[#dcd7ea] hover:text-white"
                  onClick={enableEdit}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          {Object.entries(fields).map(([key, value]) => (
            <div className="mb-4" key={key}>
              <div className="text-sm font-semibold capitalize">{key.replace("_", " ")}</div>
              {isEditing ? (
                <input
                  type="text"
                  className="w-full text-sm bg-white/10 border border-[#dcd7ea] rounded px-2 py-1 mt-1 text-white"
                  value={value}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                />
              ) : (
                <div className="text-sm text-[#e3d9ff] mt-1">{value}</div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => alert("Going back to Home Page...")}
          className="mt-2 text-sm px-4 py-1 border border-[#dcd7ea] rounded hover:bg-[#dcd7ea] hover:text-white"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
