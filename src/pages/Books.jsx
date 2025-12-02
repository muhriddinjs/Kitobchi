import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, MapPin } from 'lucide-react';
import BookCard from '../components/BookCard';

// BookCard Component
// const BookCard = ({ book }) => {
//   return (
//     <div className="bg-white rounded-[12px] shadow-xs hover:shadow-md transition-all duration-300 p-3 border border-gray-100 group">
//       {/* 2 ta rasm – hoverda almashadi */}
//       <div className="relative w-full h-50 rounded-lg overflow-hidden">
//         <img
//           src={book?.images?.[0]}
//           alt={book.title}
//           className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
//         />
//         <img
//           src={book?.images?.[1]}
//           alt={book.title}
//           className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
//         />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-gray-900 mt-3 line-clamp-1">
//         {book.title}
//       </h3>

//       {/* Location */}
//       <div className="flex items-center gap-1 text-indigo-600 text-sm mt-1">
//         <MapPin size={17} />
//         <span className="line-clamp-1">{book.location}</span>
//       </div>

//       {/* Price */}
//       <p className="text-indigo-700 font-bold mt-1 text-[15px]">{book.price}</p>

//       {/* Button */}
//       <button
//         className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg mt-3 hover:bg-indigo-700 transition-colors text-sm"
//         onClick={(e) => {
//           e.preventDefault();
//           // Book details page ga o'tish
//           window.location.href = `/books/${book.id}`;
//         }}
//       >
//         Ko'rish
//       </button>
//     </div>
//   );
// };

// Filter Section Component
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
};

// Sample book data
const sampleBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "120,000 so'm",
    language: "English",
    location: "Toshkent, Chilonzor tumani",
    categories: ["Fiction", "Classic"],
    images: [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "140,000 so'm",
    language: "English",
    location: "Toshkent, Yunusobod tumani",
    categories: ["Fiction", "Classic"],
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: "130,000 so'm",
    language: "English",
    location: "Toshkent, Mirzo Ulug'bek tumani",
    categories: ["Fiction", "Dystopian"],
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "110,000 so'm",
    language: "English",
    location: "Toshkent, Yakkasaroy tumani",
    categories: ["Fiction", "Romance", "Classic"],
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "150,000 so'm",
    language: "English",
    location: "Toshkent, Olmazor tumani",
    categories: ["Fiction", "Fantasy"],
    images: [
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: "190,000 so'm",
    language: "English",
    location: "Toshkent, Shayxontohur tumani",
    categories: ["Fiction", "Fantasy"],
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    price: "160,000 so'm",
    language: "Spanish",
    location: "Toshkent, Sergeli tumani",
    categories: ["Fiction", "Classic"],
    images: [
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: "140,000 so'm",
    language: "Russian",
    location: "Toshkent, Bektemir tumani",
    categories: ["Fiction", "Classic", "Psychological"],
    images: [
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&h=600&fit=crop"
    ]
  }
];

const Books = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Extract unique values
  const allCategories = [...new Set(sampleBooks.flatMap(book => book.categories))];
  const allAuthors = [...new Set(sampleBooks.map(book => book.author))];
  const allLanguages = [...new Set(sampleBooks.map(book => book.language))];

  // Filter books
  const filteredBooks = sampleBooks.filter(book => {
    const categoryMatch = selectedCategories.length === 0 || 
      book.categories.some(cat => selectedCategories.includes(cat));
    
    // Price ni so'm formatidan raqamga aylantirish
    const bookPrice = parseInt(book.price.replace(/[^\d]/g, ''));
    const priceMatch = bookPrice >= priceRange.min && bookPrice <= priceRange.max;
    
    const authorMatch = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
    const languageMatch = selectedLanguages.length === 0 || selectedLanguages.includes(book.language);
    
    return categoryMatch && priceMatch && authorMatch && languageMatch;
  });

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleAuthor = (author) => {
    setSelectedAuthors(prev => 
      prev.includes(author) 
        ? prev.filter(a => a !== author)
        : [...prev, author]
    );
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedAuthors([]);
    setSelectedLanguages([]);
    setPriceRange({ min: 0, max: 200000 });
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedAuthors.length > 0 || 
    selectedLanguages.length > 0 ||
    priceRange.min > 0 || 
    priceRange.max < 200000;

  return (
    <div className=" min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1250px] px-5 container py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Kitoblar do'koni</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Filtrlar</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <X size={16} />
                    Tozalash
                  </button>
                )}
              </div>

              {/* Categories Filter */}
              <FilterSection title="Kategoriyalar">
                <div className="space-y-2">
                  {allCategories.map(category => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Price Filter */}
              <FilterSection title="Narxi">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                      min="0"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                      min="0"
                      placeholder="Max"
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    {priceRange.min.toLocaleString()} - {priceRange.max.toLocaleString()} so'm
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="10000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </FilterSection>

              {/* Author Filter */}
              <FilterSection title="Muallif">
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allAuthors.map(author => (
                    <label key={author} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAuthors.includes(author)}
                        onChange={() => toggleAuthor(author)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">{author}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Language Filter */}
              <FilterSection title="Til">
                <div className="space-y-2">
                  {allLanguages.map(language => (
                    <label key={language} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLanguages.includes(language)}
                        onChange={() => toggleLanguage(language)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">{language}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>

          {/* Books Grid */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-gray-600">
                <span className="font-semibold">{filteredBooks.length}</span> ta kitob topildi
              </p>
            </div>
            
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">Filtrlarga mos kitoblar topilmadi.</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Barcha filtrlarni tozalash
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;