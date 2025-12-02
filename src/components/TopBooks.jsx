import { Box, Button } from "@mui/joy";
import { NavLink } from "react-router-dom";
import BookCard from "./BookCard";

// 10 ta kitob json
const topBooks = [
    {
        id: 1,
        title: "Alkimyogar",
        author: "Paulo Coelho",
        price: "35 000 so'm",
        location: "Toshkent, Chilonzor",
        images: [
            "https://arm.samdchti-al.uz/products/2021-06-20/60cf3ea10ba43.jpg",
            "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
        ],
    },
    {
        id: 2,
        title: "Ufq",
        author: "O'tkir Hoshimov",
        price: "40 000 so'm",
        location: "Samarqand, Bulung'ur",
        images: [
            "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/Boshqa-nashriyot-kitobi/ufq-3d-550x550h.jpg",
            "https://images.uzum.uz/ctf7nuk5j42dmkoiu7qg/original.jpg",
        ],
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: "45 000 so'm",
        location: "Farg‘ona, Marg‘ilon",
        images: [
            "https://www.thebookbundle.com/cdn/shop/files/s-l1600_7244eb59-5596-4198-b06e-c1f4caa499fa_700x700.jpg?v=1696509943",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5XaF4lK4rd3PWBFpxQo_XfGFhWTaTuF3BA&s",
        ],
    },
    {
        id: 4,
        title: "Sariq devni minib",
        author: "Xudoyberdi To‘xtaboyev",
        price: "25 000 so'm",
        location: "Namangan, Chust",
        images: [
            "https://frankfurt.apollo.olxcdn.com/v1/files/y21s2hxywztk2-UZ/image;s=1500x2000",
            "https://kitobxon.com/img_knigi/3552.jpg",
        ],
    },
    {
        id: 5,
        title: "O'tkan kunlar",
        author: "Abdulla Qodiriy",
        price: "32 000 so'm",
        location: "Buxoro, Shofirkon",
        images: [
            "https://kitobxon.com/img_knigi/1447.jpg",
            "https://upload.wikimedia.org/wikipedia/uz/8/81/O%CA%BBtgan_kunlar.jpg",
        ],
    },
    {
        id: 6,
        title: "Harry Potter",
        author: "J.K. Rowling",
        price: "50 000 so'm",
        location: "Toshkent, Sergeli",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGpv1ctGy0hjdg5Htgfh7PDosTEN5kkDNrw&s",
            "https://harrypottershop.co.uk/cdn/shop/products/Philosophers_Stone_Paperback.png?v=1610099834",
        ],
    },
    {
        id: 7,
        title: "Shum Bola",
        author: "G'ofur G'ulom",
        price: "22 000 so'm",
        location: "Andijon",
        images: [
            "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2025/Shum-bola-550x550h.jpg",
            "https://akbt.urspi.uz/storage/books/face/images/2_646def66a9c18_1684926310.jpg",
        ],
    },
    {
        id: 8,
        title: "Atomic Habits",
        author: "James Clear",
        price: "55 000 so'm",
        location: "Toshkent, Yunusobod",
        images: [
            "https://cdn.shopify.com/s/files/1/0194/2855/files/atomic-habits_600x600.jpg?v=1624825894",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcuR3rt91aA-gnHdAyrHAF9trbdN1bce8aw&s",
        ],
    },
    {
        id: 9,
        title: "Ikki eshik orasi",
        author: "O'tkir Hoshimov",
        price: "28 000 so'm",
        location: "Sirdaryo",
        images: [
            "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/cc8cbbc52f9b2cecc8fe02f1edd3bcae2025030420260719219aXkhMaQhnG.jpg",
            "https://frankfurt.apollo.olxcdn.com/v1/files/xucrbvig83u41-UZ/image;s=805x1000",
        ],
    },
    {
        id: 10,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: "60 000 so'm",
        location: "Toshkent, Olmazor",
        images: [
            "https://backend.book.uz/user-api/img/img-file-a7af21f6f9b6da14fbecd1d3aabcdcdb.jpg",
            "https://olcha.uz/image/700x700/products/2022-09-27/pul-psikhologiyasi-123741-0.jpeg",
        ],
    },
];


function TopBooks() {
    return (
        <section className="py-10 bg-[#F9FAFB]">
            <div className="mx-auto max-w-[1300px] px-5 text-center">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-[#1E1B4B]">
                        Yaqinda qo'yilgan kitoblar
                    </h1>

                </div>

                {/* Book Grid */}
                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)",
                            xl: "repeat(5, 1fr)",
                        },
                    }}
                >
                    {topBooks.map((item) => (
                        <BookCard key={item.id} item={item} />
                    ))}
                </Box>
                <div className="pt-[50px]">
                    <NavLink to="/books">
                        <Button variant="solid" color="primary">
                            Ko'proq kitoblar bu yerda
                        </Button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default TopBooks;
