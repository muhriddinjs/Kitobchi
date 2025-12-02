import { NavLink } from "react-router";
import Searching from "../components/Searching";
import RecentlyUplods from "../components/RecentlyUplods";
import BooksImage from "../../public/assets/books.png";
import TopBooks from "../components/TopBooks";
import { motion } from "framer-motion";
import FeaturedBooks from "../components/FeaturedBooks";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#b3d0f0] to-white py-10 h-[90vh]">
        <div className="max-w-[1250px] container mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Kitoblaringizni sotish, sotib olish va almashishning eng oson
              yo‘li
            </h1>

            <p className="mt-5 text-lg text-gray-600">
              Ortiqcha kitoblaringizni qo‘ying, kerakli kitoblarni toping va
              o‘quvchilar bilan to‘g‘ridan-to‘g‘ri savdo qiling. Hammasi bitta
              platformada.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/announcement"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
              >
                E’lon joylash
              </a>

              <a
                href="/books"
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
              >
                Kitoblarni ko‘rish
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <img
              src={BooksImage}
              alt="Books Illustration"
              className="w-80 md:w-128 drop-shadow-xl opacity-90"
            />
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="mx-auto px-5 py-16 space-y-16 bg-[#F9FAFB]">
        <div className="max-w-[1220px] mx-auto">
          <FeaturedBooks />
          <RecentlyUplods />
          <TopBooks />
        </div>
      </section>
    </>
  );
}
