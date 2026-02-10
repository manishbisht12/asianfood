"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import axios from "axios";

const categories = [
  "All",
  "Soup",
  "Drink",
  "Spicy",
  "Tradition",
  "Sweet",
  "Cake",
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  // ================= FETCH FOODS =================
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/foods");
        setFoods(res.data.foods);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  // ================= FILTER FOODS =================
  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((item) => item.category === activeCategory);

  const visibleFoods = filteredFoods.slice(0, visibleCount);

  // ================= RESET ON CATEGORY CHANGE =================
  useEffect(() => {
    setVisibleCount(6);
    setLoadingMore(false);
  }, [activeCategory]);

  // ================= INFINITE SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (
        nearBottom &&
        !loadingMore &&
        visibleCount < filteredFoods.length
      ) {
        setLoadingMore(true);

        setTimeout(() => {
          setVisibleCount((prev) => prev + 3);
          setLoadingMore(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredFoods.length, loadingMore]);

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16">
        {/* HEADER */}
        <div className="bg-[#FBF1D6] rounded-2xl p-10 sm:p-14 mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Discover Our Food
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Explore our carefully curated menu filled with authentic Asian
            flavors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* CATEGORY SIDEBAR */}
          <aside className="lg:w-1/4">
            <div className="border border-gray-200 rounded-xl p-6 sticky top-24 bg-white">
              <h3 className="font-semibold text-lg mb-6">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`cursor-pointer px-4 py-2 rounded-lg text-sm transition ${
                      activeCategory === cat
                        ? "bg-yellow-400 text-black font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* FOOD GRID */}
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && (
              <p className="col-span-full text-center text-gray-500">
                Loading foods...
              </p>
            )}

            {!loading &&
              visibleFoods.map((item) => {
                const cartItem = cart[item._id];

                return (
                  <div
                    key={item._id}
                    className="group border border-gray-200 rounded-2xl p-5 bg-white 
                    hover:shadow-xl transition flex flex-col h-full"
                  >
                    {/* IMAGE */}
                    <div className="relative flex justify-center items-center h-[200px] mb-4">
                      <AiOutlineHeart className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer" />
                      <Image
                        src={item.image || "/placeholder.png"}
                        alt={item.title}
                        width={180}
                        height={180}
                        className="object-contain h-[180px]"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 text-center">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* PRICE + CART */}
                    <div className="flex items-center justify-between mt-5">
                      <span className="font-semibold text-lg">
                        ₹{item.price}
                      </span>

                      {!cartItem ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition"
                        >
                          <FaPlus size={14} />
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 bg-yellow-400 px-4 py-1.5 rounded-full shadow-md">
                          <button
                            onClick={() => decreaseQty(item._id)}
                            className="font-bold text-lg"
                          >
                            -
                          </button>

                          <span className="font-bold text-sm min-w-[20px] text-center">
                            {cartItem.qty}
                          </span>

                          <button
                            onClick={() => increaseQty(item._id)}
                            className="font-bold text-lg"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

            {/* LOADER */}
            {loadingMore && (
              <div className="col-span-full flex justify-center py-10">
                <div
                  className="w-8 h-8 border-4 border-yellow-400 
                  border-t-transparent rounded-full animate-spin"
                ></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
