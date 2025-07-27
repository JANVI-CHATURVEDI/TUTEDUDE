import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Login() {
  const [role, setRole] = useState("Supplier");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Save fake data to localStorage
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to homepage
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <div className="mb-4">
          <img
            src={logo} 
            alt="Vendify Logo"
            className="w-24 mx-auto "
          />
        </div>

        <div className="flex mb-6 border rounded-lg overflow-hidden">
          <button
            onClick={() => setRole("Supplier")}
            className={`flex-1 px-4 py-2 font-semibold transition ${
              role === "Supplier"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
          >
            Supplier
          </button>
          <button
            onClick={() => setRole("Vendor")}
            className={`flex-1 px-4 py-2 font-semibold transition ${
              role === "Vendor"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
          >
            Vendor
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-700 hover:underline">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
