// import React from "react";
// import Image from "next/image";

// const Restro = () => {
//   return (
//     <section className="px-16 py-24">

//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-20">
//         <h2 className="text-4xl font-bold">Place Of Our Restaurant</h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="flex items-center justify-between px-17 py-5">

//         {/* LEFT TEXT */}
//         <div className="max-w-xl">
//           <h3 className="text-4xl font-bold mb-6">
//             Clean And Comfortable
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             We provide the best service and good food for our lovely <br/>customers
//           </p>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div>
//           <Image
//             src="/restro.png"
//             alt="Restaurant place"
//             width={420}
//             height={280}
//             className="rounded-md"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Restro;



//responsive

import React from "react";
import Image from "next/image";

const Restro = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Place Of Our Restaurant
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Clean And Comfortable
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We provide the best service and good food for our lovely customers
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/restro.png"
            alt="Restaurant place"
            width={420}
            height={280}
            className="rounded-md w-[300px] sm:w-[360px] lg:w-[420px] h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Restro;
