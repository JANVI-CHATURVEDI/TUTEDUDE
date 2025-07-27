import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("Supplier");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setErrorMsg("");
    alert(`Signed up as ${role}\nName: ${name}\nEmail: ${email}`);
    navigate("/"); // 👈 redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e8ff] p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <div className="mb-6">
          <img src="/vendify-logo.png" alt="Vendify Logo" className="w-24 mx-auto" />
        </div>

        <div className="flex mb-6 border border-gray-300 rounded-md overflow-hidden">
          <button
            className={`flex-1 py-2 text-lg transition ${
              role === "Supplier"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setRole("Supplier")}
          >
            Supplier
          </button>
          <button
            className={`flex-1 py-2 text-lg transition ${
              role === "Vendor"
                ? "bg-purple-600 text-white"
                : "bg-purple-200 text-purple-800"
            }`}
            onClick={() => setRole("Vendor")}
          >
            Vendor
          </button>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-3 border rounded-md text-sm"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 mb-3 border rounded-md text-sm"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-3 border rounded-md text-sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 mb-2 border rounded-md text-sm"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {errorMsg && (
            <div className="text-red-500 text-sm mb-3">{errorMsg}</div>
          )}

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md text-lg transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-700 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
