"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { FaFire, FaLeaf, FaPlusCircle, FaCheck } from "react-icons/fa";

const customizationOptions = {
  base: ["Jasmine Rice", "Brown Rice", "Rice Noodles", "Udon Noodles"],
  protein: ["Grilled Chicken", "Crispy Tofu", "Shrimp", "Beef Slices"],
  veggies: ["Broccoli", "Bok Choy", "Mushrooms", "Carrots", "Bell Peppers"],
  sauce: ["Teriyaki", "Spicy Szechuan", "Thai Green Curry", "Soy Garlic"],
  spice: ["Mild", "Medium", "Extra Hot", "Fire!"]
};

export default function CustomizePage() {
  const { addToCart } = useCart();
  const [selections, setSelections] = useState({
    base: "Jasmine Rice",
    protein: "Grilled Chicken",
    veggies: [],
    sauce: "Teriyaki",
    spice: "Medium",
  });

  const handleToggleVeggie = (veg) => {
    setSelections(prev => ({
      ...prev,
      veggies: prev.veggies.includes(veg)
        ? prev.veggies.filter(v => v !== veg)
        : [...prev.veggies, veg]
    }));
  };

  const handleOrder = () => {
    const customDish = {
      id: `custom-${Date.now()}`,
      title: `Custom Asian Bowl`,
      price: 12.99,
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769666020/hand_cl4lmb",
      details: selections,
      qty: 1
    };
    addToCart(customDish);
    alert("Bowl added to cart!");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16">
            <h1 className="text-6xl uppercase text-black mb-2 tracking-tighter font-black">
              Build Your <span className="text-[#F1C74E]">Bowl</span>
            </h1>
            <p className="text-gray-400 font-medium text-lg">Select your fresh ingredients below.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* ===== LEFT: SELECTION STEPS (UI Unchanged) ===== */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Step 1: Base */}
              <section>
                <h3 className="text-2xl mb-6 uppercase flex items-center gap-3 font-bold">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">01</span>
                  Choose your Base
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {customizationOptions.base.map(b => (
                    <button 
                      key={b}
                      onClick={() => setSelections({...selections, base: b})}
                      className={`py-4 px-4 rounded-2xl text-sm font-bold border-2 transition-all ${selections.base === b ? 'border-gray-50 bg-yellow-400 text-black/70' : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-yellow-400'}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </section>

              {/* Step 2: Protein */}
              <section>
                <h3 className="text-2xl mb-6 uppercase flex items-center gap-3 font-bold">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">02</span>
                  Add Protein
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {customizationOptions.protein.map(p => (
                    <button 
                      key={p}
                      onClick={() => setSelections({...selections, protein: p})}
                      className={`py-4 px-4 rounded-2xl text-sm font-bold border-2 transition-all ${selections.protein === p ? 'border-gray-50 bg-yellow-400 text-black/70' : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-yellow-400'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </section>

              {/* Step 3: Veggies */}
              <section>
                <h3 className="text-2xl mb-6 uppercase flex items-center gap-3 text-green-700 font-bold">
                  <span className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center text-sm">03</span>
                  Fresh Veggies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {customizationOptions.veggies.map(v => (
                    <button 
                      key={v}
                      onClick={() => handleToggleVeggie(v)}
                      className={`py-3 px-6 rounded-full border-2 font-bold transition-all flex items-center gap-2 ${selections.veggies.includes(v) ? 'bg-green-50 border-green-600 text-green-700' : 'bg-white border-gray-100 text-gray-400'}`}
                    >
                      {v} {selections.veggies.includes(v) && <FaCheck size={12}/>}
                    </button>
                  ))}
                </div>
              </section>

              {/* Step 4: Sauce & Spice */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl mb-6 uppercase font-bold">Sauce</h3>
                  <div className="space-y-2">
                    {customizationOptions.sauce.map(s => (
                      <button 
                        key={s}
                        onClick={() => setSelections({...selections, sauce: s})}
                        className={`w-full text-left py-3 px-5 rounded-xl border-2 font-bold transition-all ${selections.sauce === s ? 'border-gray-50 bg-yellow-400 text-black/70' : 'border-gray-100 text-gray-400'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-6 uppercase flex items-center gap-2 text-red-600 font-bold"><FaFire /> Spice</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {customizationOptions.spice.map(sp => (
                      <button 
                        key={sp}
                        onClick={() => setSelections({...selections, spice: sp})}
                        className={`py-3 rounded-xl border-2 font-bold text-xs uppercase transition-all ${selections.spice === sp ? 'border-red-600 bg-red-600 text-white' : 'border-gray-100 text-gray-400'}`}
                      >
                        {sp}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* ===== RIGHT: NEW ORDER SUMMARY CARD UI ===== */}
            <div className="lg:col-span-4">
              <div className="bg-black text-white p-8 rounded-[40px] sticky top-28 shadow-2xl overflow-hidden border-t-4 border-[#F1C74E]">
                <div className="relative z-10">
                  <h2 className="text-2xl mb-6 border-b border-gray-800 pb-4 uppercase tracking-wider text-[#F1C74E] font-bold">Your Recipe</h2>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Base:</span> 
                      <span className="font-bold text-[#F1C74E]">{selections.base}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Protein:</span> 
                      <span className="font-bold">{selections.protein}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Sauce:</span> 
                      <span className="font-bold">{selections.sauce}</span>
                    </li>
                    <li className="flex justify-between items-start">
                      <span className="text-gray-400">Veggies:</span> 
                      <span className="font-bold text-right text-xs max-w-[120px] leading-tight">
                        {selections.veggies.join(", ") || "None Selected"}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-10 pt-6 border-t border-gray-800">
                    <p className="text-4xl font-black mb-6">$12.99</p>
                    <button 
                      onClick={handleOrder}
                      className="w-full bg-[#F1C74E] text-black py-4 rounded-2xl font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 active:scale-95"
                    >
                      <FaPlusCircle /> ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}