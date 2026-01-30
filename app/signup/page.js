"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", form);
    // 🔗 connect API later
  };

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-20 min-h-[80vh] flex items-center justify-center bg-[#FBF1D6]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">

          {/* ===== TITLE ===== */}
          <h1 className="text-3xl font-bold text-center text-black">
            Create Account 
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Join us and start ordering delicious food
          </p>

          {/* ===== FORM ===== */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

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
                placeholder="Enter your name"
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
                placeholder="Create a password"
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
                placeholder="Confirm your password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 
                           focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg 
                         font-semibold hover:bg-yellow-500 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600">
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
