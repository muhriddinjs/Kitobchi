import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validate() {
    if (!email) return "Email kiritilishi shart.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "To'g'ri email kiriting.";
    if (!password) return "Parol kiritilishi shart.";
    if (password.length < 6)
      return "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setLoading(false);
      if (onLogin) onLogin({ email });
      if (onClose) onClose();
    } catch (err) {
      setLoading(false);
      setError("Tizimga kirishda xatolik yuz berdi.");
    }
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {/* Chap burchakdagi yopish tugmasi */}
      <button
        onClick={() => navigate("/")}
        className="absolute cursor-pointer top-4 left-4 text-gray-700 hover:text-gray-900 font-bold text-5xl z-50"
      >
        ←
      </button>

      {/* Modal kontent */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Kirish</h2>
          <p className="text-gray-600 mt-2">
            Email va parolingiz bilan tizimga kiring.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="siz@misol.com"
              className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Parol</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </label>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#6366f1] cursor-pointer text-white hover:text-[#6366f1] font-semibold rounded-xl hover:bg-blue-50 disabled:opacity-60 transition-colors"
            disabled={loading}
          >
            {loading ? "Kirish..." : "Kirish"}
          </button>
        </form>

        {/* Register navigatsiyasi */}
        <div className="mt-4 text-center text-gray-600">
          Account yo‘qmi?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>
      </div>
    </div>
  );
}
