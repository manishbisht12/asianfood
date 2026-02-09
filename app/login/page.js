// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import axios from "axios";



// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
  

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//      await axios.post(
//   "http://localhost:4000/auth/login",
//   {
//     email: form.email,
//     password: form.password,
//   },
//   {
//     withCredentials: true, 
//   }
// );


//       toast.success("Login successfully");
//       router.push("/menu");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
//           {/* ===== TITLE ===== */}
//           <h1 className="text-3xl font-bold text-center text-black">
//             Welcome Back
//           </h1>
//           <p className="text-gray-600 text-center mt-2">
//             Login to continue ordering delicious food
//           </p>

//           {/* ===== FORM ===== */}
//           <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 
//                            focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 
//                            focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             {/* Forgot Password */}
//             <div className="flex justify-end">
//               <Link
//                 href="#"
//                 className="text-sm text-yellow-500 hover:underline"
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-yellow-400 text-black py-3 rounded-lg 
//                          font-semibold hover:bg-yellow-500 transition"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                   <span>Logging in...</span>
//                 </div>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="my-6 flex items-center gap-3">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="text-sm text-gray-500">OR</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//           {/* Signup */}
//           <p className="text-center text-sm text-gray-600">
//             Don’t have an account?{" "}
//             <Link
//               href="/signup"
//               className="text-yellow-500 font-medium hover:underline"
//             >
//               Create one
//             </Link>
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


//google
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  /* ================= GOOGLE LOGIN ================= */
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:4000/auth/login",
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );

      toast.success("Login successfully");
      router.push("/menu");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">

          {/* ===== TITLE ===== */}
          <h1 className="text-3xl font-bold text-center text-black">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Login to continue ordering delicious food
          </p>

          {/* ===== GOOGLE LOGIN ===== */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-8 border border-gray-300 py-3 rounded-lg
                       flex items-center justify-center gap-3
                       hover:bg-gray-50 transition"
          >
            <img src="/google.png" alt="Google" className="w-5 h-5" />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* ===== DIVIDER ===== */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* ===== FORM ===== */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg
                         font-semibold hover:bg-yellow-500 transition
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Signup */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-yellow-500 font-medium hover:underline"
            >
              Create one
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
