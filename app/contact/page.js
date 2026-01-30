"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

export default function ContactPage() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== PAGE CONTENT ===== */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 relative">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Need help? Chat with us or reach out using the details below.
          </p>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ===== LEFT INFO ===== */}
          <div className="space-y-8">
            <Info
              icon={<IoCallOutline />}
              title="Phone"
              value="+91 98765 43210"
            />
            <Info
              icon={<IoMailOutline />}
              title="Email"
              value="support@asianfood.com"
            />
            <Info
              icon={<IoLocationOutline />}
              title="Address"
              value="Burj Khalifa Area, Dubai"
            />

            <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                💬 Quick Help Available
              </h3>
              <p className="text-gray-700">
                Click the chat icon at the bottom right to get instant answers
                to common questions.
              </p>
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              Food Support Desk
            </h2>

            <form className="space-y-6">
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" placeholder="Your email" type="email" />

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-20 bg-black text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            We’re Here to Help
          </h2>
          <p className="mt-3 text-gray-300">
            Chat with us or send a message — we respond quickly.
          </p>
        </div>

        {/* ===== CHAT WIDGET (ONLY HERE) ===== */}
        <ChatWidget />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}

/* ===== SMALL COMPONENTS ===== */
const Info = ({ icon, title, value }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-yellow-400 rounded-full text-black text-xl">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const Input = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
    />
  </div>
);
