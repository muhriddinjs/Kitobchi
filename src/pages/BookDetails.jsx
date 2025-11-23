import React, { useState } from "react";
import { useParams } from "react-router";
import BooksData from "../api/books.json";

const BookDetails = () => {
  const { id } = useParams();
  const book = BooksData.find((b) => b.id === Number(id));

  // Tanlangan rasm uchun state
  const [selectedImage, setSelectedImage] = useState(
    book?.images?.[0] || ""
  );

  if (!book)
    return <h2 className="text-center mt-10 text-gray-500">Kitob topilmadi</h2>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Rasmlar */}
        <div>
          <img
            src={selectedImage}
            alt={book.title}
            className="rounded-xl shadow-md w-full h-[400px] object-cover mb-4"
          />

          {book.images && book.images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto">
              {book.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`preview-${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-32 object-cover rounded-lg cursor-pointer border transition
                    ${selectedImage === img ? "ring-2 ring-indigo-500" : ""}
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* Kitob haqida */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
            <p className="text-indigo-700 font-semibold text-2xl mt-2">
              {book.price?.toLocaleString()} so‘m
            </p>
            {book.author && <p className="text-gray-500 mt-1">Muallif: {book.author}</p>}
            {book.category && (
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Toifa:</span> {book.category}
              </p>
            )}

            <div className="mt-4 flex gap-4">
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                Savatchaga qo‘shish
              </button>
              <button className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300 transition">
                Xabar yuborish
              </button>
            </div>
          </div>

          {/* Sotuvchi info */}
          {book.seller && (
            <div className="mt-8 p-4 bg-gray-50 border rounded-lg flex items-center gap-4">
              <img
                src={book.seller.avatar}
                alt={book.seller.name}
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <h3 className="font-semibold">{book.seller.name}</h3>
                <p className="text-sm text-gray-500">
                  Platformada: {book.seller.memberSince}
                </p>
                {book.seller.idVerified && (
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded mt-1 inline-block">
                    ID tasdiqlangan
                  </span>
                )}
              </div>
              <button className="ml-auto bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                Obuna bo‘lish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tavsif */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Tavsif</h2>
        <p className="text-gray-700 leading-relaxed">
          {book.description || "Tavsif mavjud emas"}
        </p>
      </div>

      {/* Bitim joyi */}
      {book.location && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Bitim joyi</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <p className="text-gray-700">{book.location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
