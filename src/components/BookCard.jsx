import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function BookCard({ book }) {
  return (
    <Link
      to={`/books/${book?.id}`}
      className="bg-white rounded-[12px] shadow-xs hover:shadow-md transition-all duration-300 p-3 border border-gray-100 group"
    >
      {/* 2 ta rasm – hoverda almashadi */}
      <div className="relative w-full h-50 rounded-lg overflow-hidden">
        <img
          src={book?.images?.[0]}
          alt={book?.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src={book?.images?.[1]}
          alt={book?.title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
        />
      </div>

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
      <p className="text-indigo-700 font-bold mt-1 text-[15px]">{book?.price}</p>

      {/* Button */}
      <button
        className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg mt-3 hover:bg-indigo-700 transition-colors text-sm hover:cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        Ko‘rish
      </button>
    </Link>
  );
}

export default BookCard;
