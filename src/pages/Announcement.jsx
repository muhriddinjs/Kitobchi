import { useState } from "react";
import { Upload, X } from "lucide-react";
import api from "../api/api";

export default function Announcement() {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageType, setImageType] = useState("file");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    type: "sell", // sell | donate
    price: "",
  });

  const categories = [
    "Badiiy adabiyotlar",
    "Bolalar adabiyoti",
    "O'quv adabiyotlar",
    "Biografik va memuar",
    "Biznes adabiyotlar",
    "Diniy adabiyotlar",
    "Ilmiy-ommabop",
    "Psixologiya",
    "Falsafa",
    "Tarixiy",
    "Biznesga oid kitoblar",
    "Shaxsiy rivojlanish",
  ];

  /* ================= IMAGE UPLOAD ================= */
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 2) {
      alert("Siz faqat 2 ta rasm yuklashingiz mumkin");
      return;
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]); // string
      };
      reader.readAsDataURL(file);
    });
  };

  const addImageByUrl = () => {
    if (!imageUrl) return;

    if (images.length >= 2) {
      alert("Siz faqat 2 ta rasm qo‘shishingiz mumkin");
      return;
    }

    setImages((prev) => [...prev, imageUrl]);
    setImageUrl("");
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!formData.title || !formData.author || !formData.category) {
      alert("Iltimos barcha majburiy maydonlarni to‘ldiring");
      return;
    }

    if (images.length === 0) {
      alert("Kamida 1 ta rasm qo‘shing");
      return;
    }

    if (formData.type === "sell" && !formData.price) {
      alert("Narxni kiriting");
      return;
    }

    const categoryIndex = categories.indexOf(formData.category);
    if (categoryIndex === -1) {
      alert("Kategoriya noto‘g‘ri tanlangan");
      return;
    }

    // 🔥 To‘g‘rilangan payload
    const payload = {
      title: formData.title,
      author: formData.author,
      description: "",
      images: images,
      category_id: categoryIndex + 1,
      language_id: 1,
      listing_type: formData.type,
      location: "Tashkent",
      ...(formData.type === "sell" && { price: Number(formData.price) }),
    };

    try {
      setLoading(true);
      await api.post("/books", payload);
      alert("Kitob eloningiz muvaffaqiyatli joylandi!");

      setFormData({
        title: "",
        author: "",
        category: "",
        type: "sell",
        price: "",
      });
      setImages([]);
      setImageUrl("");
    } catch (error) {
      console.error("Xatolik:", error.response?.data);
      alert("Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10 lg:py-12">
      <div className="max-w-[1250px] container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 lg:p-8 max-w-3xl">
          <div className="space-y-6">

            {/* IMAGES */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Kitob rasmlari
              </label>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt="book"
                      className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}

                {images.length < 2 && imageType === "file" && (
                  <label className="h-40 md:h-48 lg:h-56 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer">
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Rasm yuklash</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {images.length < 2 && (
                <div className="flex gap-6 mt-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={imageType === "file"}
                      onChange={() => setImageType("file")}
                    />
                    Kompyuterdan
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={imageType === "url"}
                      onChange={() => setImageType("url")}
                    />
                    URL orqali
                  </label>
                </div>
              )}

              {images.length < 2 && imageType === "url" && (
                <div className="flex gap-2 mt-3">
                  <input
                    type="text"
                    placeholder="Rasm URL kiriting"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={addImageByUrl}
                    className="px-4 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Qo‘shish
                  </button>
                </div>
              )}
            </div>

            {/* TITLE */}
            <input
              type="text"
              placeholder="Kitob nomi"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2.5 border rounded-lg"
            />

            {/* AUTHOR */}
            <input
              type="text"
              placeholder="Muallif"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="w-full px-4 py-2.5 border rounded-lg"
            />

            {/* CATEGORY */}
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-2.5 border rounded-lg"
            >
              <option value="">Kategoriya tanlang</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* TYPE */}
            <div className="grid grid-cols-2 gap-3">
              {["sell", "donate"].map((t) => (
                <label
                  key={t}
                  className={`border-2 rounded-lg py-3 text-center cursor-pointer ${
                    formData.type === t
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    value={t}
                    checked={formData.type === t}
                    onChange={() =>
                      setFormData({ ...formData, type: t })
                    }
                    className="hidden"
                  />
                  {t === "sell" ? "Sotish" : "Hadya qilish"}
                </label>
              ))}
            </div>

            {/* PRICE */}
            {formData.type === "sell" && (
              <input
                type="number"
                placeholder="Narx (so'm)"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full px-4 py-2.5 border rounded-lg"
              />
            )}

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Yuborilmoqda..." : "E'lon joylash"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
