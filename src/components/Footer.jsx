import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 ">
      <div className="max-w-[1220px] mx-auto px-5 flex flex-col md:flex-row justify-between gap-10">

        {/* About / Brand */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Kitobchi</h2>
          <p className="text-gray-400 mb-4">
            Kitoblarni oson sotish va sotib olish platformasi.
            Sizning kitoblaringiz endi qo‘lingizda!
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-[#6366F1]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#6366F1]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#6366F1]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#6366F1]"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-[#6366F1]">Bosh sahifa</NavLink></li>
            <li><NavLink to="/books" className="hover:text-[#6366F1]">Kitoblar</NavLink></li>
            <li><NavLink to="/announcement" className="hover:text-[#6366F1]">E'lon berish</NavLink></li>
            <li><NavLink to="/profile" className="hover:text-[#6366F1]">Profile</NavLink></li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
          <p className="text-gray-400">Email: support@kitobchi.com</p>
          <p className="text-gray-400">Tel: +998 90 123 45 67</p>
          <p className="text-gray-400">Manzil: Toshkent, O‘zbekiston</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kitobchi. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}

export default Footer;
