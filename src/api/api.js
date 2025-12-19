import axios from "axios";

const api = axios.create({
  baseURL: "https://kitobchiback-1.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// HAR REQUESTDA TOKEN QO‘SHILADI
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
