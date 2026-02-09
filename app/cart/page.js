"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri"; // ✅ Trash Icon Imported

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, clearCart, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = Object.values(cart || {});
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16 min-h-[70vh] bg-white">
        <h1 className="text-3xl font-bold mb-10 text-black">Orders</h1>

        {items.length === 0 ? (
          /* ===== EMPTY CART ===== */
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-500 mb-6">
              Your cart is currently empty
            </p>
            <Link
              href="/menu"
              className="inline-block bg-yellow-400 px-10 py-3 rounded-xl font-semibold text-black hover:bg-yellow-500 transition"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          /* ===== CART CONTENT ===== */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ===== LEFT: CART ITEMS ===== */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6
                             bg-white rounded-2xl p-6 shadow-sm relative group"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={90}
                      className="object-contain bg-gray-50 rounded-lg p-2"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-black">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 mt-1 font-medium">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Quantity, Price & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 lg:gap-8">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="text-lg font-bold px-2 hover:text-yellow-600 transition"
                      >
                        −
                      </button>
                      <span className="font-semibold px-2 min-w-[30px] text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="text-lg font-bold px-2 hover:text-yellow-600 transition"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal Price */}
                    <p className="font-bold text-lg text-black min-w-[80px] text-right">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </p>

                    {/* ✅ REMOVE BUTTON (Delete Icon) */}
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
                      title="Remove item"
                    >
                      <RiDeleteBin5Line size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== RIGHT: SUMMARY ===== */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm h-fit sticky top-28">
              <h2 className="text-xl font-semibold mb-6 text-black">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-3">
                <span>Items in Cart</span>
                <span className="font-medium">{items.length}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-6">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="border-t pt-4 flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-black">Total</span>
                <span className="text-2xl font-bold text-black">
                  ₹{total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-[#e9b210] text-black py-4 rounded-xl font-bold hover:bg-[#cf9c05] transition-all shadow-md active:scale-95">
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-gray-400 text-sm font-medium hover:text-red-500 transition-colors py-2"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}