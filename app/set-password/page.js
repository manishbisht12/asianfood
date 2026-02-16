"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function SetPasswordPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/set-password`, {
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      // Password set → go to login
      toast.success("Password set successfully");

      router.push("/login");

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

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-black">
            Set Password
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Create a strong password to secure your account
          </p>

         

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

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
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* BUTTON */}
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
                  <span>Saving...</span>
                </div>
              ) : (
                "Set Password"
              )}
            </button>
          </form>

          {/* LOGIN REDIRECT */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already set password?{" "}
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
