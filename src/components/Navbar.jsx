import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Heart, Bell, User, Plus } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const categories = [
    { name: "Badiiy", path: "/category/fiction" },
    { name: "Dasturlash", path: "/category/programming" },
    { name: "Psixologiya", path: "/category/psychology" },
    { name: "Biznes", path: "/category/business" },
    { name: "Bolalar", path: "/category/kids" },
  ];
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="bg-white/30 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1250px] mx-auto px-5 py-4 flex items-center justify-between gap-5">
        {/* LOGO */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-indigo-700">Kitobchi</h1>
        </Link>

        {/* SEARCH BAR (Desktop) */}
        <div className="hidden md:flex flex-1">
          <div className="w-full relative">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Kitob nomi, muallif yoki kategoriya..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center gap-4">
          {/* Categories Dropdown */}
          <div ref={menuRef} className="relative">
            <span
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-indigo-600 transition px-3 py-2 border border-transparent hover:border-indigo-300 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm hover:shadow cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Kategoriyalar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4 transition-transform ${
                  openMenu ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>

            <div
              className={`absolute bg-white/95 backdrop-blur-md shadow-xl rounded-lg mt-2 w-48 py-2 border border-indigo-100 transition-all duration-200 ease-out ${
                openMenu
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition rounded-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Add Listing Button */}
          <NavLink
            to="/announcement"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            <Plus size={20} /> E'lon berish
          </NavLink>

          {/* Icons */}
          <NavLink to="/saved" className="text-gray-700 hover:text-indigo-600">
            <Heart size={24} />
          </NavLink>

          <NavLink
            to="/notifications"
            className="text-gray-700 hover:text-indigo-600"
          >
            <Bell size={24} />
          </NavLink>

          <NavLink
            to="/profile"
            className="text-gray-700 hover:text-indigo-600"
          >
            <User size={26} />
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-indigo-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-white/70 backdrop-blur-sm border-t transition-all overflow-hidden 
        ${open ? "max-h-[500px] py-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-4 px-5">
          {/* SEARCH (mobile) */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Qidirish..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/60 border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Mobile nav links */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Bosh sahifa
          </NavLink>

          {/* Categories on mobile */}
          <details className="cursor-pointer">
            <summary className="text-gray-700 font-medium">
              Kategoriyalar
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </details>

          <NavLink
            to="/books"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Kitoblar
          </NavLink>

          <NavLink
            to="/announcement"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            E'lon berish
          </NavLink>

          <NavLink
            to="/saved"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Saqlanganlar
          </NavLink>

          <NavLink
            to="/notifications"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Bildirishnomalar
          </NavLink>

          <NavLink
            to="/profile"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-semibold"
          >
            Profil
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
