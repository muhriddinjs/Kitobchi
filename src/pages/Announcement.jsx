import { useState } from 'react';
import { Upload, X } from 'lucide-react';

export default function Announcement() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    type: 'sell',
    price: '',
    delivery: false
  });

  const categories = [
    'Badiiy adabiyotlar',
    'Bolalar adabiyoti',
    'O\'quv adabiyotlar',
    'Biografik va memuar',
    'Biznes adabiyotlar',
    'Diniy adabiyotlar',
    'Ilmiy-ommabop',
    'Psixologiya',
    'Falsafa',
    'Tarixiy',
    'Biznesga oid kitoblar',
    'Shaxsiy rivojlanish'
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 2) {
      alert('Siz faqat 2 ta rasm yuklashingiz mumkin');
      return;
    }

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Elonlar taxtasiga yuborildi:', { images, ...formData });
    alert('Kitob eloningiz muvaffaqiyatli joylandi!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10 lg:py-12">
      <div className="max-w-[1250px] container mx-auto px-6">

        {/* Header */}
        <div className="mb-6 md:mb-8 lg:mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
            E'lon joylash
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Sotish yoki hadya qilish uchun kitobingizni joylang
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 lg:p-8 max-w-3xl">
          <div className="space-y-5 md:space-y-6">

            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Kitob rasmlari
              </label>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {images.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`Book ${index + 1}`}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-white text-gray-700 p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}

                {images.length < 2 && (
                  <label className="h-40 md:h-48 lg:h-56 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <Upload className="text-gray-400 mb-2" size={24} />
                    <span className="text-xs md:text-sm text-gray-500">Rasm yuklash</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      multiple
                    />
                  </label>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">Faqat 2 ta rasm kiritish mumkin</p>
            </div>

            {/* Book Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kitob nomi
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 md:px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base"
                placeholder="Kitob nomini kiriting"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Muallif
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-3 md:px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base"
                placeholder="Kitob muallifini kiriting"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategoriya
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 md:px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base bg-white"
              >
                <option value="">Kitob kategoriyasini tanlang</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Type Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                E'lon turi
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`relative flex items-center justify-center px-4 py-3 md:py-3.5 rounded-lg border-2 cursor-pointer transition-all ${formData.type === 'sell'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <input
                    type="radio"
                    value="sell"
                    checked={formData.type === 'sell'}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value, price: '' })}
                    className="sr-only"
                  />
                  <span className={`text-sm md:text-base font-medium ${formData.type === 'sell' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                    Sotish
                  </span>
                </label>
                <label className={`relative flex items-center justify-center px-4 py-3 md:py-3.5 rounded-lg border-2 cursor-pointer transition-all ${formData.type === 'donate'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                  }`}>
                  <input
                    type="radio"
                    value="donate"
                    checked={formData.type === 'donate'}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value, price: '0' })}
                    className="sr-only"
                  />
                  <span className={`text-sm md:text-base font-medium ${formData.type === 'donate' ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                    Hadya qilish
                  </span>
                </label>
              </div>
            </div>

            {/* Price */}
            {formData.type === 'sell' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kitobingizni necha so'mga sotmoqchisiz
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 md:px-4 py-2.5 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base"
                    placeholder="0"
                    min="0"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    so'm
                  </span>
                </div>
              </div>
            )}

            {/* Delivery Option */}
            <div>
              <label className="flex items-start md:items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5 md:mt-0">
                  <input
                    type="checkbox"
                    checked={formData.delivery}
                    onChange={(e) => setFormData({ ...formData, delivery: e.target.checked })}
                    className="w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <span className="text-sm md:text-base text-gray-700 select-none">
                  Yetkazib berishni tashkil qila olaman
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto md:px-8 bg-blue-600 text-white py-3 rounded-lg font-medium text-sm md:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                E'lon joylash
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}