import { Link } from "react-router-dom";
import { MapPin, Trash, Edit } from "lucide-react";

function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-[12px] shadow-xs hover:shadow-md transition-all duration-300 p-3 border border-gray-100 group relative">
      {/* 2 ta rasm – hoverda almashadi */}
      <Link to={`/books/${book?.id}`} className="block">
        <div className="relative w-full h-50 rounded-lg overflow-hidden">
          <img
            src={book?.images?.[0]}
            alt={book?.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
          />
          {book?.images?.[1] && (
            <img
              src={book?.images?.[1]}
              alt={book?.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
            />
          )}
        </div>
      </Link>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mt-3 line-clamp-1">
        {book?.title}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-indigo-600 text-sm mt-1">
        <MapPin size={17} />
        <span className="line-clamp-1">{book?.location}</span>
      </div>

      {/* Price */}
      <p className="text-indigo-700 font-bold mt-1 text-[15px]">{book?.price} so‘m</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button
          className="flex-1 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
          onClick={() => onEdit(book)}
        >
          Tahrirlash
        </button>
        <button
          className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
          onClick={() => onDelete(book.id)}
        >
          O‘chirish
        </button>
      </div>
    </div>
  );
}

export default BookCard;
