// "use client";

// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function SignupPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const toastId = toast.loading("Sending OTP...");

//     try {
//       setLoading(true);

//       await axios.post("http://localhost:4000/auth/signup", {
//         name: form.name,
//         email: form.email,
//         mobile: form.mobile,
//       });

//       toast.success("OTP sent to your email", { id: toastId });
//       router.push("/verify-otp");

//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Something went wrong",
//         { id: toastId }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">

//           <h1 className="text-3xl font-bold text-center text-black">
//             Create Account
//           </h1>
//           <p className="text-gray-600 text-center mt-2">
//             Enter your email and mobile number to receive OTP
//           </p>

//           <form onSubmit={handleSubmit} className="mt-8 space-y-5">

//             {/*Name */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3
//                            focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

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

//             {/* Mobile */}
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={form.mobile}
//                 onChange={handleChange}
//                 placeholder="Enter your mobile number"
//                 required
//                 maxLength={10}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3
//                            focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-yellow-400 text-black py-3 rounded-lg
//                          font-semibold hover:bg-yellow-500 transition
//                          disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                   <span>Sending OTP...</span>
//                 </div>
//               ) : (
//                 "Send OTP"
//               )}
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="text-yellow-500 font-medium hover:underline"
//             >
//               Login
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
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= NORMAL SIGNUP (OTP) ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending OTP...");

    try {
      setLoading(true);

      await axios.post("http://localhost:4000/auth/signup", {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
      });

      toast.success("OTP sent to your email", { id: toastId });
      router.push("/verify-otp");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong",
        { id: toastId }
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= GOOGLE SIGNUP ================= */
  const handleGoogleSignup = () => {
    // 🔥 Direct redirect to backend Google OAuth
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">

          <h1 className="text-3xl font-bold text-center text-black">
            Create Account
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Signup to continue ordering delicious food
          </p>

          {/* ===== GOOGLE SIGNUP ===== */}
          <button
            onClick={handleGoogleSignup}
            className="w-full mt-6 flex items-center justify-center gap-3 border
                       border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* ===== OTP SIGNUP FORM ===== */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

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

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
                maxLength={10}
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg
                         font-semibold hover:bg-yellow-500 transition
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-yellow-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
