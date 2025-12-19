import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMe() {
      try {
        const res = await api.get("/users/me");
        setUser(res.data);
      } catch (err) {
        console.log(err);
        // Token yo‘q yoki yaroqsiz bo‘lsa
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    fetchMe();
  }, [navigate]);

  if (loading) {
    return <div className="text-center mt-20">Yuklanmoqda...</div>;
  }

  return (
    <div className="mx-auto max-w-[1220px] px-5 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Profil</h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Ism:</span>{" "}
            {user.first_name}
          </p>
          <p>
            <span className="font-semibold">Familiya:</span>{" "}
            {user.last_name}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {user.email}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-6 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}

export default Profile;
