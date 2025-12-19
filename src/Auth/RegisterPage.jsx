import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function validate() {
    if (!firstName) return "Ism kiritilishi shart.";
    if (!lastName) return "Familiya kiritilishi shart.";
    if (!email) return "Email kiritilishi shart.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "To‘g‘ri email kiriting.";
    if (!password) return "Parol kiritilishi shart.";
    if (password.length < 6)
      return "Parol kamida 6 belgidan iborat bo‘lishi kerak.";
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
      await api.post("/auth/register", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
      });

      setLoading(false);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      console.log("BACKEND ERROR:", err.response?.data);

      setError(
        err.response?.data?.detail?.[0]?.msg ||
          err.response?.data?.message ||
          "Ma’lumotlar noto‘g‘ri kiritilgan"
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-gray-700 hover:text-gray-900 font-bold text-5xl"
      >
        ←
      </button>

      {/* Modal */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Ro‘yxatdan o‘tish
          </h2>
          <p className="text-gray-600 mt-2">
            Hisob yaratib kitoblar olamini kashf eting
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <label>
              <span className="text-gray-700 font-medium">Ism</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full rounded-lg border p-2"
              />
            </label>

            <label>
              <span className="text-gray-700 font-medium">Familiya</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full rounded-lg border p-2"
              />
            </label>
          </div>

          <label>
            <span className="text-gray-700 font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label>
              <span className="text-gray-700 font-medium">Parol</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border p-2"
              />
            </label>

            <label>
              <span className="text-gray-700 font-medium">
                Parolni tasdiqlash
              </span>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 w-full rounded-lg border p-2"
              />
            </label>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-blue-600 transition"
          >
            {loading ? "Yuborilmoqda..." : "Ro‘yxatdan o‘tish"}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600">
          Akkauntingiz bormi?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium hover:underline"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
