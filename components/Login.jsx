// import React from "react";

// const Login = () => {
//   return (
//     <section className="px-16 py-10">

//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold">Stay In Touch</h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* ================= LOGIN CARD ================= */}
//       <div className="flex justify-center">
//         <div className="w-full max-w-xl border-2 border-gray-200 rounded-xl p-10">

//           <h3 className="text-2xl font-semibold text-center mb-8">
//             Login To Our Channel
//           </h3>

//           {/* Email */}
//           <div className="mb-6">
//             <label className="block text-lg font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Button */}
//           <button className="w-full bg-[#ebbc2e] text-black py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
//             Login Now
//           </button>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Login;




//responsive 
import React from "react";

const Login = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Stay In Touch
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* ================= LOGIN CARD ================= */}
      <div className="flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg border-2 border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10">

          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
            Login To Our Channel
          </h3>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-base sm:text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 rounded-lg 
                         px-4 py-3 text-sm sm:text-base
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Button */}
          <button
            className="w-full bg-[#ebbc2e] text-black 
                       py-3 rounded-lg font-medium
                       hover:bg-yellow-500 transition" >
            Login Now
          </button>

        </div>
      </div>

    </section>
  );
};

export default Login;
