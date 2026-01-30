// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";
// import { FaPlus } from "react-icons/fa6";
// import { AiOutlineHeart } from "react-icons/ai";
// import { useCart } from "@/context/CartContext";

// /* ===== CATEGORIES ===== */
// const categories = [
//   "All",
//   "Soup",
//   "Drink",
//   "Spicy",
//   "Tradition",
//   "Sweet",
//   "Cake",
// ];

// /* ===== FOODS ===== */
// const foods = [
//   {
//     id: 1,
//     title: "Shrimp Fried Rice",
//     desc: "Delicious fried rice with shrimp and fresh vegetables.",
//     price: 2.3,
//     category: "Tradition",
//     img: "/shrimp_fried.png",
//   },
//   {
//     id: 2,
//     title: "Hot Soup",
//     desc: "Hot and tasty soup.",
//     price: 1.8,
//     category: "Soup",
//     img: "/shrimp_fried.png",
//   },
//   {
//     id: 3,
//     title: "Mango Drink",
//     desc: "Fresh mango juice.",
//     price: 1.5,
//     category: "Drink",
//     img: "/shrimp_fried.png",
//   },
//   {
//     id: 4,
//     title: "Spicy Noodles",
//     desc: "Extra spicy noodles.",
//     price: 2.1,
//     category: "Spicy",
//     img: "/shrimp_fried.png",
//   },
// ];

// /* ===== PAGE ===== */
// export default function MenuPage() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const { cart, addToCart, increaseQty, decreaseQty } = useCart();

//   const filteredFoods =
//     activeCategory === "All"
//       ? foods
//       : foods.filter((item) => item.category === activeCategory);

//   return (
//     <>
//       <Navbar />

//       <section className="px-6 sm:px-10 lg:px-16 py-16">
//         {/* ===== HERO ===== */}
//         <div className="bg-[#FBF1D6] rounded-2xl p-10 sm:p-14 mb-16 text-center">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//             Discover Our Food
//           </h1>
//           <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
//             Explore our carefully curated menu filled with authentic Asian
//             flavors made from fresh ingredients.
//           </p>
//         </div>

//         {/* ===== MAIN ===== */}
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* ===== CATEGORY ===== */}
//           <aside className="lg:w-1/4">
//             <div className="border border-gray-200 rounded-xl p-6 sticky top-24 bg-white">
//               <h3 className="font-semibold text-lg mb-6">Categories</h3>

//               <ul className="space-y-3">
//                 {categories.map((cat) => (
//                   <li
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`cursor-pointer px-4 py-2 rounded-lg text-sm transition
//                       ${
//                         activeCategory === cat
//                           ? "bg-yellow-400 text-black font-medium"
//                           : "hover:bg-gray-100 text-gray-700"
//                       }`}
//                   >
//                     {cat}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* ===== FOOD GRID ===== */}
//           <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredFoods.map((item) => {
//               const cartItem = cart[item.id];

//               return (
//                 <div
//                   key={item.id}
//                   className="group border border-gray-200 rounded-2xl p-5 bg-white 
//                              hover:shadow-xl transition duration-300"
//                 >
//                   {/* Image */}
//                   <div className="relative flex justify-center">
//                     <AiOutlineHeart className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer" />

//                     <Image
//                       src={item.img}
//                       alt={item.title}
//                       width={220}
//                       height={220}
//                       className="object-contain group-hover:scale-105 transition"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="mt-5 text-center">
//                     <h3 className="font-semibold text-lg">{item.title}</h3>
//                     <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//                   </div>

//                   {/* Footer */}
//                   <div className="flex items-center justify-between mt-5">
//                     <span className="font-semibold text-lg">
//                       ${item.price}
//                     </span>

//                     {!cartItem ? (
//                       <button
//                         onClick={() => addToCart(item)}
//                         className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500"
//                       >
//                         <FaPlus size={14} />
//                       </button>
//                     ) : (
//                       <div className="flex items-center gap-3 bg-yellow-400 px-3 py-1 rounded-full">
//                         <button onClick={() => decreaseQty(item.id)}>-</button>
//                         <span className="font-semibold">
//                           {cartItem.qty}
//                         </span>
//                         <button onClick={() => increaseQty(item.id)}>+</button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ===== CTA ===== */}
//         <div className="mt-20 bg-black text-white rounded-2xl p-10 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold">
//             Hungry Already?
//           </h2>
//           <p className="mt-3 text-gray-300">
//             Order now and enjoy delicious Asian food at your doorstep.
//           </p>

//           <button className="mt-6 bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-500">
//             Order Now
//           </button>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "@/context/CartContext";

const categories = ["All", "Soup", "Drink", "Spicy", "Tradition", "Sweet", "Cake"];

const foods = [
  { id: 1, title: "Shrimp Fried Rice", desc: "Delicious fried rice with shrimp and fresh vegetables.", price: 2.3, category: "Tradition", img: "/shrimp_fried.png" },
  { id: 2, title: "Hot Soup", desc: "Hot and tasty soup.", price: 1.8, category: "Soup", img: "/shrimp_fried.png" },
  { id: 3, title: "Mango Drink", desc: "Fresh mango juice.", price: 1.5, category: "Drink", img: "/shrimp_fried.png" },
  { id: 4, title: "Spicy Noodles", desc: "Extra spicy noodles.", price: 2.1, category: "Spicy", img: "/shrimp_fried.png" },
];

// ✅ MUST be a function and MUST be 'export default'
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16">
        <div className="bg-[#FBF1D6] rounded-2xl p-10 sm:p-14 mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Discover Our Food</h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Explore our carefully curated menu filled with authentic Asian flavors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-1/4">
            <div className="border border-gray-200 rounded-xl p-6 sticky top-24 bg-white">
              <h3 className="font-semibold text-lg mb-6">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`cursor-pointer px-4 py-2 rounded-lg text-sm transition ${
                      activeCategory === cat ? "bg-yellow-400 text-black font-medium" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFoods.map((item) => {
              const cartItem = cart[item.id];

              return (
                <div key={item.id} className="group border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-xl transition duration-300">
                  <div className="relative flex justify-center">
                    <AiOutlineHeart className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer" />
                    <Image src={item.img} alt={item.title} width={220} height={220} className="object-contain group-hover:scale-105 transition" />
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <span className="font-semibold text-lg">${item.price}</span>

                    {!cartItem ? (
                      <button onClick={() => addToCart(item)} className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition">
                        <FaPlus size={14} />
                      </button>
                    ) : (
                      <div className="flex items-center gap-3 bg-yellow-400 px-4 py-1.5 rounded-full shadow-md">
                        <button onClick={() => decreaseQty(item.id)} className="font-bold text-lg px-1">-</button>
                        <span className="font-bold text-sm min-w-[20px] text-center">{cartItem.qty}</span>
                        <button onClick={() => increaseQty(item.id)} className="font-bold text-lg px-1">+</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      

      <Footer />
    </>
  );
}