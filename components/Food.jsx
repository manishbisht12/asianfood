"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Soup",
  "Drink",
  "Spicy",
  "Tradition",
  "Sweet",
  "Cake",
  "Rice"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Food = () => {
  const { addToCart, cart, increaseQty, decreaseQty } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH FOODS
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

  // FILTER BY CATEGORY
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  // SHOW ONLY 8 ITEMS
  const visibleFoods = filteredFoods.slice(0, 8);

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">
      {/* TITLE */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold"
        >
          Popular Food
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 bg-yellow-400 mx-auto mt-3 rounded"
        ></motion.div>
      </div>

      {/* CATEGORY BAR */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <div className="flex flex-wrap flex-1 items-center justify-between border-2 border-gray-200 rounded-lg px-6 py-3 gap-4">
          {categories.map((cat) => (
            <motion.span
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05, color: "#FACC15" }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm cursor-pointer px-4 py-1.5 rounded-md transition-all ${selectedCategory === cat
                  ? "bg-yellow-400 text-white font-bold"
                  : "text-gray-600"
                }`}
            >
              {cat}
            </motion.span>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border-2 border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition"
        >
          <IoFilter className="text-xl" />
        </motion.div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">Loading foods...</p>
      )}

      {/* FOOD GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {!loading &&
            visibleFoods.map((item) => {
              const cartItem = cart[item._id];

              const imageSrc =
                item.image && item.image.trim() !== ""
                  ? item.image
                  : "/placeholder.png";

              return (
                <motion.div
                  key={item._id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="border-2 border-gray-200 rounded-xl p-4 relative bg-white"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <AiOutlineHeart className="absolute top-4 right-4 text-xl cursor-pointer hover:text-red-500 transition-colors" />
                  </motion.div>

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

                    {cartItem ? (
                      <div className="flex items-center bg-yellow-400 rounded-full overflow-hidden shadow-sm">
                        <button
                          onClick={() => decreaseQty(item._id)}
                          className="p-2 text-black hover:bg-yellow-500 transition"
                        >
                          <FaMinus size={10} />
                        </button>

                        <span className="px-3 font-bold text-sm min-w-[30px] text-center">
                          {cartItem.qty}
                        </span>

                        <button
                          onClick={() => increaseQty(item._id)}
                          className="p-2 text-black hover:bg-yellow-500 transition"
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                    ) : (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(item)}
                        className="bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500 transition"
                      >
                        <FaPlus size={12} />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>

      {!loading && visibleFoods.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          No items found in this category.
        </div>
      )}
    </section>
  );
};

export default Food;
