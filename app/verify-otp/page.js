// "use client";

// import { useState, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function VerifyOtpPage() {
//   const router = useRouter();

//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const inputsRef = useRef([]);

//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError("");

//     if (value && index < 3) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const pasteData = e.clipboardData.getData("text").slice(0, 4);
//     if (!/^\d+$/.test(pasteData)) return;

//     const newOtp = pasteData.split("");
//     setOtp([...newOtp, "", "", "", ""].slice(0, 4));
//     inputsRef.current[3].focus();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const finalOtp = otp.join("");

//     if (finalOtp.length !== 4) {
//       setError("Please enter complete 4-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       await axios.post("http://localhost:4000/auth/verify-otp", {
//         otp: finalOtp,
//       });

//       router.push("/set-password");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid or expired OTP");
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
//             Verify OTP
//           </h1>
//           <p className="text-gray-600 text-center mt-2">
//             Enter the 4-digit OTP sent to your email
//           </p>

//           {error && (
//             <p className="text-red-500 text-sm text-center mt-4">
//               {error}
//             </p>
//           )}

//           <form onSubmit={handleSubmit} className="mt-8 space-y-6">

//             {/* OTP BOXES */}
//             <div
//               className="flex justify-center gap-4"
//               onPaste={handlePaste}
//             >
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   ref={(el) => (inputsRef.current[index] = el)}
//                   type="text"
//                   value={digit}
//                   maxLength={1}
//                   onChange={(e) =>
//                     handleChange(e.target.value, index)
//                   }
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   className="w-14 h-14 text-center text-xl font-bold
//                              border border-gray-300 rounded-lg
//                              focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//               ))}
//             </div>

//             {/* BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold
//                          hover:bg-yellow-500 transition disabled:opacity-70"
//             >
//               {loading ? (
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                   <span>Verifying...</span>
//                 </div>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
//           </form>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyOtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pasteData)) return;

    setOtp(pasteData.split(""));
    inputsRef.current[3].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 4) {
      toast.error("Please enter complete 4-digit OTP");
      return;
    }

    const toastId = toast.loading("Verifying OTP...");

    try {
      setLoading(true);

      await axios.post("http://localhost:4000/auth/verify-otp", {
        otp: finalOtp,
      });

      toast.success("OTP verified successfully", { id: toastId });
      router.push("/set-password");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid or expired OTP",
        { id: toastId }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">

          <h1 className="text-3xl font-bold text-center text-black">
            Verify OTP
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Enter the 4-digit OTP sent to your email
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {/* OTP BOXES */}
            <div className="flex justify-center gap-4" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-14 h-14 text-center text-xl font-bold
                             border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ))}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold
                         hover:bg-yellow-500 transition disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </div>
              ) : (
                "Verify OTP"
              )}
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}
