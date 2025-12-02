import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const featuredBooks = [
    {
        id: 1,
        title: "Alkimyogar",
        author: "Paulo Coelho",
        price: "35 000 so'm",
        location: "Toshkent, Chilonzor",
        img: [
            "https://arm.samdchti-al.uz/products/2021-06-20/60cf3ea10ba43.jpg",
            "https://assets.asaxiy.uz/product/items/desktop/d22e96bf1d9b45a82e424872d8397e452025050610592529328gTOzWaZF60.jpg.webp"
        ],
    },
    {
        id: 2,
        title: "Ufq",
        author: "O'tkir Hoshimov",
        price: "40 000 so'm",
        location: "Samarqand, Bulung'ur",
        img: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBiom6E9IsK9ww4nTTsEKDGehK-jh0SlFFNMzPdw0pDpIqcZ_75rVB-ap51qwH7w33kU&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrKv1g2gNx2XLRkwQCm53xl22pQEtBDcfjg&s"
        ],
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: "45 000 so'm",
        location: "Farg‘ona, Marg‘ilon",
        img: [
            "https://www.thebookbundle.com/cdn/shop/files/s-l1600_7244eb59-5596-4198-b06e-c1f4caa499fa_700x700.jpg?v=1696509943",
            "https://travismewhirter.com/wp-content/uploads/2020/04/IMG_3778-2.jpg"
        ],
    },
    {
        id: 4,
        title: "Sariq devni minib",
        author: "Xudoyberdi To‘xtaboyev",
        price: "25 000 so'm",
        location: "Namangan, Chust",
        img: [
            "https://backend.book.uz/user-api/img/img-file-97ca3fd770b72e6b3225e61dbc119e4e.jpg",
            "https://hilolnashr.uz/image/cache/catalog/bolalar/sariq-devni-minib-500x750.jpg"
        ],
    },
    {
        id: 5,
        title: "Yana bir kitob",
        author: "Muallif",
        price: "30 000 so'm",
        location: "Buxoro, Shofirkon",
        img: [
            "https://assets.asaxiy.uz/product/items/desktop/4470fa47679bba01503c66217b68f37c2025082012505896731aiqoHXdtIc.jpg",
            "https://images.uzum.uz/ckt3prlennt861inasp0/original.jpg"
        ],
    },
];

export default function FeaturedBooks() {
    return (
        <section className="py-2">
            <div className="max-w-[1320px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
                    Taklif qilinadigan kitoblar
                </h2>

                <p className="text-center text-gray-600 mt-3">
                    Aktiv foydalanuvchilar tomonidan qo'yilgan kitoblar
                </p>

                {/* 5 ta card uchun grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
                    {featuredBooks.map((book) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-3 border border-gray-100 group"
                        >
                            {/* 2 ta rasm — hoverda almashadi */}
                            <div className="overflow-hidden rounded-lg relative w-full h-56">
                                <img
                                    src={book.img[0]}
                                    alt={book.title}
                                    className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={book.img[1]}
                                    alt={book.title}
                                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                                />
                            </div>

                            <h3 className="text-lg font-semibold mt-2 text-gray-900">
                                {book.title}
                            </h3>
 
                            {/* <p className="text-sm text-gray-600">{book.author}</p> */}

                            <div className="flex items-center gap-1 text-indigo-600 text-sm font-medium mt-1">
                                <MapPin size={18} />
                                <span>{book.location}</span>
                            </div>

                            <p className="mt-1 text-indigo-600 font-bold">{book.price}</p>

                            <Link
                                to={`/books/${book.id}`}
                                className="block text-center mt-3 w-full py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all"
                            >
                                Ko‘rish
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
