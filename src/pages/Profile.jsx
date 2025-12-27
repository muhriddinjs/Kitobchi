import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import MyList from "../components/MyList";
/* ================= MODAL ================= */
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        {children}
      </div>
    </div>
  );
}

/* ================= PROFILE ================= */
function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  /* ---- messages ---- */
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  /* ---- forms ---- */
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    telegram_username: "",
    avatar_url: "",
    bio: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [myListings, setMyListings] = useState([]);
  const [listingsLoading, setListingsLoading] = useState(true);

  /* ================= USER ================= */
  useEffect(() => {
    async function fetchMe() {
      try {
        const res = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setUser(res.data);
        setForm({
          first_name: res.data.first_name || "",
          last_name: res.data.last_name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          telegram_username: res.data.telegram_username || "",
          avatar_url: res.data.avatar_url || "",
          bio: res.data.bio || "",
        });
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    fetchMe();
  }, [navigate]);

  /* ================= LISTINGS ================= */

  /* ================= PROFILE UPDATE ================= */
  async function handleProfileUpdate(e) {
    e.preventDefault();
    setProfileMessage("");
    setProfileError(false);

    try {
      await api.put("/users/me", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser({ ...user, ...form });
      setOpenProfileModal(false);
      setProfileMessage("Profil muvaffaqiyatli yangilandi");
    } catch {
      setProfileError(true);
      setProfileMessage("Profilni yangilashda xatolik yuz berdi");
    }
  }

  /* ================= PASSWORD UPDATE ================= */
  async function handlePasswordChange(e) {
    e.preventDefault();
    setPasswordMessage("");
    setPasswordError(false);

    if (passwordForm.new_password !== passwordForm.confirm_password) {
      setPasswordError(true);
      setPasswordMessage("Yangi parollar mos kelmadi");
      return;
    }

    try {
      await api.put(
        "/users/change-password",
        {
          old_password: passwordForm.old_password,
          new_password: passwordForm.new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setOpenPasswordModal(false);
      setPasswordForm({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
      setPasswordMessage("Parol muvaffaqiyatli almashtirildi");
    } catch {
      setPasswordError(true);
      setPasswordMessage("Parolni almashtirishda xatolik");
    }
  }

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">Yuklanmoqda...</div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-5 py-10">
      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white rounded-2xl shadow-xl p-6 flex gap-6 flex-col md:flex-row">
        <div>
          {form.avatar_url ? (
            <img
              src={form.avatar_url}
              alt="avatar"
              className="w-32 h-32 rounded-full object-cover border"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700">
              {user.first_name?.[0] || "U"}
            </div>
          )}
        </div>

        <div className="flex-1 space-y-1 text-gray-700">
          <p>
            <b>Ism:</b> {user.first_name}
          </p>
          <p>
            <b>Familiya:</b> {user.last_name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Telefon:</b> {user.phone || "-"}
          </p>
          <p>
            <b>Telegram:</b> @{user.telegram_username || "-"}
          </p>
          {user.bio && (
            <p>
              <b>Bio:</b> {user.bio}
            </p>
          )}

          {profileMessage && (
            <p
              className={`mt-3 text-sm ${
                profileError ? "text-red-600" : "text-green-600"
              }`}
            >
              {profileMessage}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setProfileMessage("");
                setOpenProfileModal(true);
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Profilni tahrirlash
            </button>

            <button
              onClick={() => {
                setPasswordMessage("");
                setOpenPasswordModal(true);
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Parolni almashtirish
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Chiqish
            </button>
          </div>
        </div>
      </div>

      {/* ================= PROFILE MODAL ================= */}
      {openProfileModal && (
        <Modal
          title="Profilni tahrirlash"
          onClose={() => setOpenProfileModal(false)}
        >
          <form onSubmit={handleProfileUpdate} className="space-y-3">
            <input
              className="border rounded p-2 w-full"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Ism"
            />
            <input
              className="border rounded p-2 w-full"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Familiya"
            />
            <input
              className="border rounded p-2 w-full"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telefon"
            />
            <input
              className="border rounded p-2 w-full"
              name="telegram_username"
              value={form.telegram_username}
              onChange={handleChange}
              placeholder="Telegram username"
            />
            <textarea
              className="border rounded p-2 w-full"
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Bio"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Saqlash
            </button>
          </form>
        </Modal>
      )}

      {/* ================= PASSWORD MODAL ================= */}
      {openPasswordModal && (
        <Modal
          title="Parolni almashtirish"
          onClose={() => setOpenPasswordModal(false)}
        >
          <form onSubmit={handlePasswordChange} className="space-y-3">
            <input
              type="password"
              className="border rounded p-2 w-full"
              placeholder="Eski parol"
              value={passwordForm.old_password}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  old_password: e.target.value,
                })
              }
            />
            <input
              type="password"
              className="border rounded p-2 w-full"
              placeholder="Yangi parol"
              value={passwordForm.new_password}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  new_password: e.target.value,
                })
              }
            />
            <input
              type="password"
              className="border rounded p-2 w-full"
              placeholder="Yangi parolni qayta kiriting"
              value={passwordForm.confirm_password}
              onChange={(e) =>
                setPasswordForm({
                  ...passwordForm,
                  confirm_password: e.target.value,
                })
              }
            />

            {passwordMessage && (
              <p
                className={`text-sm ${
                  passwordError ? "text-red-600" : "text-green-600"
                }`}
              >
                {passwordMessage}
              </p>
            )}

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg">
              Parolni saqlash
            </button>
          </form>
        </Modal>
      )}

      {/* ================= MY LISTINGS ================= */}
      <MyList />
    </div>
  );
}

export default Profile;
