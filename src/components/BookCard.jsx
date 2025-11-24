import { Link } from "react-router-dom";

function BookCard({ item }) {
  return (
    <Link
      to={`/books/${item.id}`}
      className="relative flex flex-col bg-white rounded-lg shadow-md p-1 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 w-full max-w-64 mx-auto border border-gray-100"
    >
      {/* Delivery Badge */}
      <div className="absolute top-2 left-2 z-10">
        <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
          Yetkazib berish
        </span>
      </div>

      {/* Book Image */}
      <div className="w-full flex justify-center">
        <img
          src={item?.images?.[0]}
          alt={item.title}
          className="rounded-sm h-45 min-[470px]:h-60 w-full object-cover mb-3 shadow-sm border border-gray-200"
        />
      </div>

      {/* Title, Author, Price */}
      <div className="p-2">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-sm font-bold text-gray-900 truncate">
            {item.title}
          </h3>
          <p className="text-indigo-600 text-md  truncate">
            {item.author}
          </p>

          <div className="flex items-center justify-between my-1">
            <p className="text-indigo-800 font-semibold text-md">
              {item.price} so'm
            </p>

            {/* Rating */}
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Number(String(item.price)[0])
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.072 9.387c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.96z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg mt-auto hover:bg-indigo-700 transition-colors text-sm shadow"
          onClick={(e) => e.preventDefault()}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default BookCard;
