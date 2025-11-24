import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import booksData from "../api/books.json"; // local JSON import qilindi
import BookCard from "../components/BookCard"; // card component

// Category nomlarini uzbekchaga mapping
const categoryNames = {
  "fiction-literature": "Adabiy-badiiy",
  "history": "Tarixiy",
  "religion": "Diniy",
  "business-entrepreneurship": "Biznes va tadbirkorlik",
  "psychology": "Psixologiya",
  "childrens-literature": "Bolalar adabiyoti",
  "science": "Ilm-fan",
};

const CategoryPage = () => {
  const { categoryPath } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const filteredBooks = booksData.filter(
      (book) => book.category === categoryPath
    );
    setBooks(filteredBooks);
  }, [categoryPath]);

  if (!books.length) return <p>Bu kategoriyada kitoblar yo‘q</p>;

  return (
    <div className="p-4 max-w-[1250px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Kategoriya: {categoryNames[categoryPath] || categoryPath}
      </h1>

      <div className="grid grid-cols-2 min-[470px]:grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-y-5 gap-x-1 min-[470px]:gap-x-4">
        {books.map((book) => (
          <BookCard key={book.id} item={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
