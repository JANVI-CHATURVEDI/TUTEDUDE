import { useState } from "react";

const UploadCertificate = () => {
  const [certificates, setCertificates] = useState([
    {
      name: "ISO Quality Certificate",
      date: "26 July 2025",
      src: "https://via.placeholder.com/80",
    },
    {
      name: "Product Authenticity",
      date: "15 July 2025",
      src: "https://via.placeholder.com/80",
    },
  ]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCertificates((prev) => [
          ...prev,
          {
            name: "Uploaded Certificate",
            date: new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            src: event.target.result,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-[#ECE8F9] py-10 flex justify-center text-[#2e2e2e] font-sans">
      <div className="bg-white w-full max-w-4xl p-6 rounded-xl shadow-lg">
        <h1 className="text-center text-3xl font-semibold text-[#8A5AE3] mb-6">
          My Certificates
        </h1>

        <div className="text-center mb-8">
          <input
            type="file"
            id="certUpload"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <label
            htmlFor="certUpload"
            className="cursor-pointer bg-[#8A5AE3] text-white py-2 px-4 rounded text-sm hover:bg-[#7455C6] transition-all"
          >
            Upload Certificates
          </label>
        </div>

        <div className="flex flex-col gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#9A68F8] text-white p-4 rounded-lg"
            >
              <img
                src={cert.src}
                alt="Certificate"
                className="w-20 h-20 object-cover rounded border-2 border-[#7455C6]"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium">{cert.name}</h3>
                <p className="text-sm mt-1">Uploaded: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadCertificate;
