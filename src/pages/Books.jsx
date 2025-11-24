import Search from "antd/es/input/Search";
import useFetch from "../hooks/useFetch";
import BookCard from "../components/BookCard";
import BooksData from "../api/books.json";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { Button, Checkbox, InputNumber, Slider } from "antd";
import { useState } from "react";

function Books() {
  const onSearch = (value) => console.log(value);
  const books = BooksData;

  // const {
  //   data: books,
  //   isPending,
  //   error,
  // } = useFetch("https://685555ac6a6ef0ed66322ac3.mockapi.io/products");

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [publisherOpen, setPublisherOpen] = useState(false);

  const [range, setRange] = useState([0, 200000]);

  const onChangeValue = (priceValue) => setRange(priceValue);

  const categories = [
    "Badiiy adabiyot",
    "Ilmiy-ommabop",
    "Tarix",
    "Biografiya",
    "Psixologiya",
    "Biznes va Menejment",
    "Texnologiya va IT",
    "Diniy adabiyot",
    "She’riyat",
    "Bolalar adabiyoti",
    "Detektiv",
    "Fantastika",
    "Sog‘liq va Sport",
    "Madaniyat va San’at",
    "Til o‘rganish",
  ];

  const publishers = [
    "Asaxiy books",
    "Gipatiya",
    "Mashxur press",
    "Nihol nashr",
    "Hilol nashr",
    "Boshqa nashriyotlar",
  ];

  return (
    <div className="max-w-[1350px] mx-auto px-5 py-10 flex flex-col md:flex-row gap-10">
      {/* FILTER SECTION */}
      <div className="md:w-1/4 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 space-y-7 border border-gray-100">
        <h3 className="text-xl font-extrabold text-[#1E1B4B] tracking-tight">
          Filtrni sozlang
        </h3>

        {[
          {
            title: "Bo'limlar",
            open: categoriesOpen,
            setOpen: setCategoriesOpen,
            content: categories.map((cat) => (
              <Checkbox key={cat} className="my-1">
                {cat}
              </Checkbox>
            )),
          },
          {
            title: "Narxi",
            open: priceOpen,
            setOpen: setPriceOpen,
            content: (
              <>
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">Dan</span>
                    <InputNumber
                      value={range[0]}
                      onChange={(val) => onChangeValue([val, range[1]])}
                    />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">Gacha</span>
                    <InputNumber
                      value={range[1]}
                      onChange={(val) => onChangeValue([range[0], val])}
                    />
                  </div>
                </div>

                <Slider
                  range
                  min={0}
                  max={1000000}
                  value={range}
                  onChange={onChangeValue}
                  className="mb-4"
                />

                <Button
                  type="primary"
                  block
                  className="rounded-xl !bg-[#1E1B4B] hover:!bg-[#2a2768] transition"
                >
                  Ok
                </Button>
              </>
            ),
          },
          {
            title: "Nashriyotlar",
            open: publisherOpen,
            setOpen: setPublisherOpen,
            content: publishers.map((pub) => (
              <Checkbox key={pub} className="my-1">
                {pub}
              </Checkbox>
            )),
          },
        ].map((filter, index) => (
          <div key={index} className="pb-4">
            {/* HEADER */}
            <div
              onClick={() => filter.setOpen(!filter.open)}
              className="
          flex justify-between items-center 
          py-3 px-3 rounded-xl cursor-pointer 
          bg-gradient-to-r from-gray-50 to-white 
          hover:from-gray-100 transition-all border border-gray-100 shadow-sm
        "
            >
              <h4 className="font-semibold text-[#1E1B4B]">{filter.title}</h4>
              {filter.open ? (
                <KeyboardArrowUpOutlined className="text-gray-500" />
              ) : (
                <KeyboardArrowDownOutlined className="text-gray-500" />
              )}
            </div>

            {/* CONTENT */}
            <div
              className={`
          transition-all duration-300 overflow-hidden 
          ${filter.open ? "max-h-80 mt-3" : "max-h-0"} 
        `}
            >
              <div
                className="
            p-4 rounded-xl bg-white shadow-sm 
            border border-gray-100 space-y-2
          "
              >
                {filter.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOOKS SECTION */}
      <div className="md:w-3/4 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h3 className="text-xl font-bold text-[#1E1B4B]">Kitoblar</h3>
            <p className="text-emerald-600 font-semibold">
              <span>5 467</span> ta mahsulot sotuvda bor
            </p>
          </div>
          <Search
            allowClear
            placeholder="Kitob qidirish"
            onSearch={onSearch}
            enterButton
            className="max-w-xs w-full mt-3 md:mt-0"
          />
        </div>
        {/* json fayl bulganligi uchun pastdagi 2 qator code yopib turiladi */}
        {/* {isPending && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>} */}

        {/* BETTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10 py-4">
          {books && books.map((book) => <BookCard key={book.id} item={book} />)}
        </div>
      </div>
    </div>
  );
}

export default Books;
