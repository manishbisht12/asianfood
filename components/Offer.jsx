// import React from "react";
// import Image from "next/image";
// import { IoCartOutline } from "react-icons/io5";

// const Offer = () => {
//   return (
//     <section className="px-16 py-10 mx-14">

//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold">Special Offer</h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
//       </div>

//       {/* ================= OFFER CONTENT ================= */}
//       <div className="flex items-center justify-between">

//         {/* LEFT IMAGE BOX */}
//         <div className="relative">
          
//           {/* Background Card (reduced height + shadow) */}
//           <div className="w-[340px] h-[320px] bg-[#707B6A] shadow-2xl shadow-[30px_30px_0px_0px_#c4c4c4ae]"></div>

//           {/* Food Image */}
//           <Image
//             src="/offer.png"
//             alt="Special Curry Offer"
//             width={260}
//             height={260}
//             className="absolute top-1/2 left-1/2 
//                        -translate-x-1/2 -translate-y-1/2"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="max-w-xl">

//           <h3 className="text-5xl font-bold leading-tight">
//             Get <span className="text-yellow-400">50%</span> Off On Curry
//           </h3>

//           <p className="mt-6 font-lg text-gray-600 leading-relaxed">
//             We offer 50% off on this food, we want you all to try Khmer food
//             which has a good taste that everyone should try.
//           </p>

//           <button className="mt-8 flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
//             Order Now <IoCartOutline size={18} />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Offer;




import React from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

const Offer = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-25 py-16">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Special Offer
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
      </div>

      {/* ================= OFFER CONTENT ================= */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT IMAGE BOX */}
        <div className="relative">

          {/* Background Card */}
          <div
            className="w-[260px] h-[240px] 
               sm:w-[300px] sm:h-[280px] 
               lg:w-[340px] lg:h-[320px] 
               bg-[#707B6A] 
               /* 30px 30px = Offset | 10px = Subtle Blur | 0px = Spread | Color */
               shadow-[30px_30px_3px_0px_rgba(0,0,0,0.15)]"
          ></div>

          {/* Food Image */}
          <Image
            src="/offer.png"
            alt="Special Curry Offer"
            width={240}
            height={240}
            className="absolute top-1/2 left-1/2
                       -translate-x-1/2 -translate-y-1/2
                       sm:w-[260px] sm:h-[260px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Get <span className="text-yellow-400">50%</span> Off On Curry
          </h3>

          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            We offer 50% off on this food, we want you all to try Khmer food
            which has a good taste that everyone should try.
          </p>

          <div className="flex justify-center lg:justify-start">
           <Link href="/menu"> <button
              className="mt-8 flex items-center gap-2
                         bg-yellow-400 text-black
                         px-6 py-3 rounded-lg font-medium
                         hover:bg-yellow-500 transition"
            >
              Order Now <IoCartOutline size={18} />
            </button></Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;

