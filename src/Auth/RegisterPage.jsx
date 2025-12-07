import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage({ onRegister, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("fiction");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validate() {
    if (!name) return "Ism kiritilishi shart.";
    if (!email) return "Email kiritilishi shart.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "To'g'ri email kiriting.";
    if (!password) return "Parol kiritilishi shart.";
    if (password.length < 6)
      return "Parol kamida 6 belgidan iborat bo'lishi kerak.";
    if (password !== confirm) return "Parollar mos emas.";
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
      if (onRegister) onRegister({ name, email, favoriteGenre });
      if (onClose) onClose();
    } catch (err) {
      setLoading(false);
      setError("Ro'yxatdan o'tishda xatolik yuz berdi.");
    }
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {/* Chap burchakdagi yopish tugmasi */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 cursor-pointer left-4 text-gray-700 hover:text-gray-900 font-bold text-5xl z-50"
      >
        ←
      </button>

      {/* Modal kontent */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 animate-fadeIn">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Ro'yxatdan o'tish
          </h2>
          <p className="text-gray-600 mt-2">
            Kutubxona yoki kitob sotib olish uchun akkaunt yarating
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Ism</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingiz"
              className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-yellow-200 focus:border-yellow-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="siz@misol.com"
              className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-yellow-200 focus:border-yellow-500"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700 font-medium">Parol</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-yellow-200 focus:border-yellow-500"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium">
                Parolni tasdiqlash
              </span>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="********"
                className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-yellow-200 focus:border-yellow-500"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-gray-700 font-medium">Sevimli janr</span>
            <select
              value={favoriteGenre}
              onChange={(e) => setFavoriteGenre(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring focus:ring-yellow-200 focus:border-yellow-500"
            >
              <option value="fiction">Badiiy adabiyot</option>
              <option value="nonfiction">Badiiy bo'lmagan</option>
              <option value="kids">Bolalar kitoblari</option>
              <option value="edu">Ta'lim</option>
            </select>
          </label>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#6366f1] cursor-pointer text-white hover:text-[#6366f1] font-semibold rounded-xl hover:bg-blue-50 disabled:opacity-60 transition-colors"
            disabled={loading}
          >
            {loading ? "Yaratilmoqda..." : "Ro'yxatdan o'tish"}
          </button>
        </form>

        {/* Login tugmasi */}
        <div className="mt-4 text-center text-gray-600">
          Akkauntingiz bormi?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-medium hover:underline"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
