"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdPayment, MdLocalShipping } from "react-icons/md";
import RazorpayPayment from "@/components/RazorpayPayment";
import toast from "react-hot-toast";
import axios from "axios";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, clearCart, removeFromCart } =
    useCart();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/users`, {
          withCredentials: true,
        });
        setUser(res.data.users[0] || null);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
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
          /* EMPTY CART */
          <div className="text-center py-24">
            <p className="text-xl text-gray-500 mb-6">
              Your cart is currently empty
            </p>
            <Link
              href="/menu"
              className="bg-yellow-400 px-10 py-3 rounded-xl font-semibold"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="border flex flex-col sm:flex-row justify-between gap-6 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={90}
                      className="rounded-lg bg-gray-50 p-2"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex bg-gray-100 rounded-full px-3 py-1">
                      <button onClick={() => decreaseQty(item._id)}>−</button>
                      <span className="px-3 font-semibold">{item.qty}</span>
                      <button onClick={() => increaseQty(item._id)}>+</button>
                    </div>

                    <p className="font-bold">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500"
                    >
                      <RiDeleteBin5Line size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="border rounded-2xl p-8 h-fit sticky top-28">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="flex justify-between mb-3">
                <span>Items</span>
                <span>{items.length}</span>
              </div>

              <div className="flex justify-between mb-6">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t pt-4 flex justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold">
                  ₹{total.toFixed(2)}
                </span>
              </div>

              {!showPayment ? (
                <button
                  onClick={() => {
                    if (!user) {
                      toast.error("Please login to proceed to checkout");
                      router.push("/login");
                      return;
                    }
                    setShowPayment(true);
                  }}
                  className="w-full bg-yellow-400 py-4 rounded-xl font-bold hover:bg-yellow-500 shadow-lg transition-all"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <>
                  {/* PAYMENT OPTIONS */}
                  <h3 className="font-semibold mb-4 text-lg">
                    Select Payment Method
                  </h3>

                  <div className="space-y-4">
                    {/* PAY ONLINE */}
                    <div
                      onClick={() => setPaymentMethod("online")}
                      className={`border rounded-xl p-4 cursor-pointer flex items-center gap-4
                      ${paymentMethod === "online"
                          ? "border-yellow-400 bg-yellow-50"
                          : "hover:border-gray-400"
                        }`}
                    >
                      <MdPayment size={28} />
                      <span className="font-medium">Pay Online</span>
                    </div>

                    {/* COD */}
                    <div
                      onClick={() => setPaymentMethod("cod")}
                      className={`border rounded-xl p-4 cursor-pointer flex items-center gap-4
                      ${paymentMethod === "cod"
                          ? "border-yellow-400 bg-yellow-50"
                          : "hover:border-gray-400"
                        }`}
                    >
                      <MdLocalShipping size={28} />
                      <span className="font-medium">
                        Cash on Delivery
                      </span>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  {paymentMethod === "online" && (
                    <RazorpayPayment
                      amount={total}
                      userId={user?._id}
                      items={items}
                      paymentMethod="online"
                      onSuccess={(response) => {
                        toast.success("Payment Received & Order Placed! 🎉");
                        clearCart();
                        setTimeout(() => {
                          router.push("/");
                        }, 500);
                      }}
                    />
                  )}

                  {paymentMethod === "cod" && (
                    <button
                      disabled={loading}
                      className={`w-full mt-6 py-4 rounded-xl font-bold transition-all ${loading
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-yellow-400 hover:bg-yellow-500 text-black shadow-md"
                        }`}
                      onClick={async () => {
                        if (!user) {
                          toast.error("Please login to place an order");
                          return;
                        }

                        setLoading(true);
                        try {
                          const res = await axios.post(
                            `${process.env.NEXT_PUBLIC_API_URL}/order/cod`,
                            {
                              userId: user._id,
                              items,
                              amount: total,
                            },
                            { withCredentials: true }
                          );

                          if (res.data.success) {
                            toast.success("Order placed with Cash on Delivery");
                            clearCart();
                            setTimeout(() => {
                              router.push("/");
                            }, 500);
                          } else {
                            toast.error(res.data.message || "Order failed");
                            setLoading(false);
                          }
                        } catch (err) {
                          console.error("COD Order Error:", err);
                          toast.error("Something went wrong");
                          setLoading(false);
                        }
                      }}
                    >
                      {loading ? "Placing Order..." : "Confirm COD Order"}
                    </button>
                  )}
                </>
              )}

              <button
                onClick={clearCart}
                className="w-full mt-4 text-gray-400 text-sm hover:text-red-500"
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
