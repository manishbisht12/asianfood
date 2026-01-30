// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaPlus } from "react-icons/fa6";
// import { IoFilter } from "react-icons/io5";
// import { AiOutlineHeart } from "react-icons/ai";

// const Food = () => {
//   const foods = [
//     {
//       img: "/shrimp_fried.png",
//       title: "Shrimp Fried Rice",
//       desc: "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
//       price: "2.30 USD",
//     },
//      {
//       img: "/pork satay,grilled pork.png",
//       title: "Pork Satay, Grilled Pork",
//       desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
//       price: "2.30 USD",
//     },
//     {
//       img: "/papaya salad.png",
//       title: "Papaya Salad",
//       desc: "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
//       price: "2.45 USD",
//     },
//      {
//       img: "/pork satay,grilled pork.png",
//       title: "Pork Satay, Grilled Pork",
//       desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
//       price: "2.30 USD",
//     },
//     {
//       img: "/shrimp_fried.png",
//       title: "Shrimp Fried Rice",
//       desc: "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
//       price: "2.30 USD",
//     },
   
//     {
//       img: "/pork satay,grilled pork.png",
//       title: "Pork Satay, Grilled Pork",
//       desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
//       price: "2.30 USD",
//     },
//     {
//       img: "/papaya salad.png",
//       title: "Papaya Salad",
//       desc: "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
//       price: "2.45 USD",
//     },
//     {
//       img: "/pork satay,grilled pork.png",
//       title: "Pork Satay, Grilled Pork",
//       desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
//       price: "2.30 USD",
//     },  
//   ];

//   return (
//     <section className="px-16 py-15">

//       {/* ================= TITLE ================= */}
//       <div className="text-center mb-15">
//         <h2 className="text-4xl font-bold">Popular Food</h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
//       </div>

//       {/* ================= CATEGORY BAR ================= */}
//         <div className="flex items-center gap-6 mx-14 mb-12">

//       {/* ================= CATEGORY BAR ================= */}
//       <div className="flex flex-1 items-center  justify-between border-2 border-gray-200 rounded-lg px-8 py-3">
//         <span className="bg-yellow-400 text-white    px-5 py-1.5 rounded-md text-sm">
//           All
//         </span>
//         <span className="text-md cursor-pointer">Soup</span>
//         <span className="text-md cursor-pointer">Drink</span>
//         <span className="text-md cursor-pointer">Spicy</span>
//         <span className="text-md cursor-pointer">Tradition</span>
//         <span className="text-md cursor-pointer">Sweet</span>
//         <span className="text-md cursor-pointer">Cake</span>
//       </div>

//       {/* ================= FILTER BUTTON ================= */}
//       <div className=" border-2 border-gray-200 rounded-lg py-4 px-3 cursor-pointer">
//         <IoFilter className="text-xl" />
//       </div>

//     </div>

//       {/* ================= FOOD GRID ================= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-15">
//         {foods.map((item, index) => (
//           <div
//             key={index}
//             className="border-2 border-gray-200 rounded-xl p-4 relative bg-white"
//           >
//             {/* Heart Icon */}
//             <AiOutlineHeart className="absolute top-4 right-4 text-xl cursor-pointer" />

//             {/* Image */}
//             <div className="flex justify-center">
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 width={220}
//                 height={220}
//               />
//             </div>

//             {/* Content */}
//             <h3 className="font-semibold mt-4 line-clamp-1 flex  justify-center">
//               {item.title}
//             </h3>

//             <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex justify-center mx-3">
//               {item.desc}
//             </p>

//             {/* Price + Add */}
//             <div className="flex items-center justify-between mt-4 mx-3">
//               <span className="font-semibold">{item.price}</span>
//               <button className="bg-yellow-400 p-2 rounded-full text-black">
//                 <FaPlus size={12} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Food;



//responsive
"use client";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";

const Food = () => {
  const foods = [
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665437/Baychha_wpfwy0",
      title: "Shrimp Fried Rice",
      desc: "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/f_auto,q_auto/pork_satay_grilled_pork_asd4xu",
      title: "Pork Satay, Grilled Pork",
      desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.30 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665323/papaya_salad_ftpvpc",
      title: "Papaya Salad",
      desc: "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.45 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/f_auto,q_auto/pork_satay_grilled_pork_asd4xu",
      title: "Pork Satay, Grilled Pork",
      desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.30 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665437/Baychha_wpfwy0",
      title: "Shrimp Fried Rice",
      desc: "shrimp fried rice, such as diced carrots, peas, onions, and bell peppers.",
      price: "2.30 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/f_auto,q_auto/pork_satay_grilled_pork_asd4xu",
      title: "Pork Satay, Grilled Pork",
      desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.30 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665323/papaya_salad_ftpvpc",
      title: "Papaya Salad",
      desc: "consists of a combination of lime juice, fish sauce, palm sugar, and chili peppers.",
      price: "2.45 USD",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/f_auto,q_auto/pork_satay_grilled_pork_asd4xu",
      title: "Pork Satay, Grilled Pork",
      desc: "It consists of marinated and skewered pork pieces that are grilled to perfection, resulting in tender, juicy, and flavorful meat.",
      price: "2.30 USD",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Popular Food
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
      </div>

      {/* ================= CATEGORY BAR ================= */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
        <div className="flex flex-wrap flex-1 items-center justify-between 
                        border-2 border-gray-200 rounded-lg px-6 py-3 gap-4">
          <span className="bg-yellow-400 text-white px-5 py-1.5 rounded-md text-sm">
            All
          </span>
          <span className="text-sm cursor-pointer">Soup</span>
          <span className="text-sm cursor-pointer">Drink</span>
          <span className="text-sm cursor-pointer">Spicy</span>
          <span className="text-sm cursor-pointer">Tradition</span>
          <span className="text-sm cursor-pointer">Sweet</span>
          <span className="text-sm cursor-pointer">Cake</span>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-3 cursor-pointer">
          <IoFilter className="text-xl" />
        </div>
      </div>

      {/* ================= FOOD GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-xl p-4 relative bg-white"
          >
            {/* Heart Icon */}
            <AiOutlineHeart className="absolute top-4 right-4 text-xl cursor-pointer" />

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={item.img}
                alt={item.title}
                width={220}
                height={220}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="font-semibold mt-4 text-center line-clamp-1">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 text-center line-clamp-3 px-2">
              {item.desc}
            </p>

            {/* Price + Add */}
            <div className="flex items-center justify-between mt-4 px-2">
              <span className="font-semibold">{item.price}</span>
              <button className="bg-yellow-400 p-2 rounded-full text-black">
                <FaPlus size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;

