"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa6";

const categories = ["All", "Soup", "Drink", "Spicy", "Tradition", "Sweet", "Cake"];

const Food = () => {
  const { addToCart, cart, increaseQty, decreaseQty } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/foods");
        const data = await res.json();
        setFoods(data.foods || []);
      } catch (err) {
        console.error("Error fetching foods", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Popular Food
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
      </div>

      {/* CATEGORY BAR */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <div className="flex flex-wrap flex-1 items-center justify-between border-2 border-gray-200 rounded-lg px-6 py-3 gap-4">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-sm cursor-pointer px-4 py-1.5 rounded-md transition-all ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-white font-bold"
                  : "text-gray-600 hover:text-yellow-400"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition">
          <IoFilter className="text-xl" />
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">Loading foods...</p>
      )}

      {/* FOOD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {!loading &&
          filteredFoods.map((item) => {
            const cartItem = cart[item._id];

            // ✅ SAFE IMAGE
            const imageSrc =
              item.image && item.image.trim() !== ""
                ? item.image
                : "/placeholder.png";

            return (
              <div
                key={item._id}
                className="border-2 border-gray-200 rounded-xl p-4 relative bg-white transition-all hover:shadow-lg"
              >
                <AiOutlineHeart className="absolute top-4 right-4 text-xl cursor-pointer hover:text-red-500 transition-colors" />

                <div className="flex justify-center h-[160px] items-center">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-contain h-[150px] w-auto"
                  />
                </div>

                <h3 className="font-semibold mt-4 text-center line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 text-center line-clamp-3 px-2">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-4 px-2">
                  <span className="font-semibold">
                    ₹{Number(item.price).toFixed(2)}
                  </span>

                  {/* CART CONTROLS */}
                  {cartItem ? (
                    <div className="flex items-center bg-yellow-400 rounded-full overflow-hidden shadow-sm">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="p-2 text-black"
                      >
                        <FaMinus size={10} />
                      </button>

                      <span className="px-3 font-bold text-sm min-w-[30px] text-center">
                        {cartItem.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="p-2 text-black"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-yellow-400 p-2 rounded-full text-black"
                    >
                      <FaPlus size={12} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      {!loading && filteredFoods.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          No items found in this category.
        </div>
      )}
    </section>
  );
};

export default Food;
