// import React from "react";
// import Image from "next/image";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdStar } from "react-icons/io";

// const Feedback = () => {
//   return (
//     <section className="px-16 py-15">

//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold">
//           Review Form Our Customers Say
//         </h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* ================= REVIEWS ================= */}
//       <div className="flex gap-12">

//         {/* ===== Review Card 1 ===== */}
//         <div className="border-2 border-gray-200 rounded-xl p-6 w-1/2">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               src="/andia.png"
//               alt="Andia Jorida"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <h3 className="font-semibold text-lg">Andia Jorida</h3>
//           </div>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             My experience at your restaurant was truly excellent. The food was
//             absolutely delicious - every dish was perfectly cooked and bursting
//             with flavor. But what really impressed me was the service. Your
//             staff was attentive, friendly which make me feel want to be there
//             again.
//           </p>

//           <div className="flex items-center gap-2 text-yellow-400">
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22}/>
//             <IoMdStar size={22}/>
//             <IoMdStar size={22}/>
//             <span className="text-gray-700 ml-2">5 stars</span>
//           </div>
//         </div>

//         {/* ===== Review Card 2 ===== */}
//         <div className="border-2 border-gray-200 rounded-xl p-6 w-1/2">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               src="/william.png"
//               alt="William Henry"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <h3 className="font-semibold text-lg">William Henry</h3>
//           </div>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             Living in Canada, I hadn't ventured much into Asian cuisine until
//             recently. But wow, what a delicious world I've been missing! Khmer
//             food, in particular, has captured my heart, and Bok Loh Hong holds
//             a special place in my memory as the dish that first made me say,
//             "Asian food is so yummy!"
//           </p>

//           <div className="flex items-center gap-2 text-yellow-400">
//             <IoMdStar size={22}/>
//             <IoMdStar size={22}/>
//             <IoMdStar size={22}/>
//             <IoMdStar size={22}/>
//             <span className="text-gray-700 ml-2">4 stars</span>
//           </div>
//         </div>
//       </div>

//       {/* ================= ADD REVIEW ================= */}
//       <div className="mt-10 flex items-center gap-3 cursor-pointer">
//         <span className="text-gray-800 font-medium">Add A review</span>
//         <FaPlus className="text-lg" />
//       </div>

//     </section>
//   );
// };

// export default Feedback;




//responsive

import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const Feedback = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Review From Our Customers Say
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* ================= REVIEWS ================= */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* ===== Review Card 1 ===== */}
        <div className="border-2 border-gray-200 rounded-xl p-6 w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/andia.png"
              alt="Andia Jorida"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h3 className="font-semibold text-base sm:text-lg">
              Andia Jorida
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
            My experience at your restaurant was truly excellent. The food was
            absolutely delicious - every dish was perfectly cooked and bursting
            with flavor. But what really impressed me was the service. Your
            staff was attentive, friendly which make me feel want to be there
            again.
          </p>

          <div className="flex items-center gap-2 text-yellow-400">
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <span className="text-gray-700 ml-2 text-sm sm:text-base">
              5 stars
            </span>
          </div>
        </div>

        {/* ===== Review Card 2 ===== */}
        <div className="border-2 border-gray-200 rounded-xl p-6 w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/william.png"
              alt="William Henry"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h3 className="font-semibold text-base sm:text-lg">
              William Henry
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
            Living in Canada, I hadn't ventured much into Asian cuisine until
            recently. But wow, what a delicious world I've been missing! Khmer
            food, in particular, has captured my heart, and Bok Loh Hong holds
            a special place in my memory as the dish that first made me say,
            "Asian food is so yummy!"
          </p>

          <div className="flex items-center gap-2 text-yellow-400">
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <IoMdStar size={22} />
            <span className="text-gray-700 ml-2 text-sm sm:text-base">
              4 stars
            </span>
          </div>
        </div>
      </div>

      {/* ================= ADD REVIEW ================= */}
      <div className="mt-10 flex items-center justify-center lg:justify-start gap-3 cursor-pointer">
        <span className="text-gray-800 font-medium">
          Add A Review
        </span>
        <FaPlus className="text-lg" />
      </div>

    </section>
  );
};

export default Feedback;
