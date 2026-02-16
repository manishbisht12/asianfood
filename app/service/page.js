

"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaShippingFast, FaEdit, FaUtensils, FaHeadset } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Fast Delivery",
    desc: "We deliver your favorite Asian food within 30 minutes, hot and fresh at your doorstep.",
    icon: <FaShippingFast className="text-4xl text-[#F1C74E]" />,
  },
  {
    id: 2,
    title: "Customized Food",
    desc: "Order food your way! Customize your spice level, ingredients, and toppings exactly how you like them.",
    icon: <FaEdit className="text-4xl text-[#F1C74E]" />,
  },
  {
    id: 3,
    title: "Fresh Ingredients",
    desc: "Every dish is prepared using hand-picked, organic, and 100% fresh ingredients daily.",
    icon: <FaUtensils className="text-4xl text-[#F1C74E]" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Got a question? Our customer support team is available round the clock to help you with your orders.",
    icon: <FaHeadset className="text-4xl text-[#F1C74E]" />,
  },
];

const reviews = [
  {
    id: 1,
    name: "Manish S.",
    role: "Food Critic",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The fastest delivery I've ever experienced! The sushi was still perfectly chilled and the ramen was steaming hot.",
  },
  {
    id: 2,
    name: "Ananya R.",
    role: "Chef",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love the customization options! Being able to pick my own spice level makes the dining experience so personal.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Regular Guest",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Authentic Asian flavors in every bite. The ingredients are clearly fresh, and the presentation is top-notch.",
  },
];

export default function ServicePage() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds per scroll for better readability
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="bg-[#FBF1D6] py-20 px-6 text-center">
          <h1 className="font-lilita text-4xl md:text-6xl text-black mb-4 uppercase tracking-tight">
            Our <span className="text-[#F1C74E]">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Beyond delicious food, we provide a seamless experience that makes every meal special.
          </p>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="py-20 px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="mb-6 flex justify-center group-hover:rotate-12 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-sniglet text-2xl text-black mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY CHOOSE US & AUTO-SCROLL REVIEWS ===== */}
        <section className="py-16 px-6 lg:px-16 bg-black text-white rounded-[40px] mx-6 mb-20 overflow-hidden relative shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Side: Points */}
            <div className="md:w-1/2">
              <h2 className="font-lilita  text-4xl uppercase mb-6 tracking-wide">
                Why People <span className="text-[#F1C74E]">Choose Us</span>
              </h2>
              <ul className="space-y-4 text-gray-300 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F1C74E] rounded-full"></div>
                  Authentic Taste from Asian Masters
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F1C74E] rounded-full"></div>
                  Zero Compromise on Hygiene
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F1C74E] rounded-full"></div>
                  Eco-friendly Packaging
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F1C74E] rounded-full"></div>
                  Highly Customizable Options
                </li>
              </ul>
            </div>
            
            {/* Right Side: Animated Review Card */}
            <div className="md:w-1/2 w-full">
              <div className="bg-[#F1C74E] p-8 rounded-3xl text-black min-h-[250px] flex flex-col justify-between transition-all duration-500 transform">
                <div className="transition-opacity duration-500">
                  <p className="italic text-lg font-bold leading-snug mb-6">
                    "{reviews[currentReview].text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-black">
                    <Image 
                      src={reviews[currentReview].img} 
                      alt={reviews[currentReview].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-lilita text-lg uppercase tracking-wider">{reviews[currentReview].name}</p>
                    <p className="text-xs font-bold opacity-70 uppercase">{reviews[currentReview].role}</p>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {reviews.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${index === currentReview ? 'w-8 bg-[#F1C74E]' : 'w-2 bg-gray-600'}`}
                  ></div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}