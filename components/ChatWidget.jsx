"use client";

import { useState, useRef, useEffect } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiX } from "react-icons/hi";

const faqReplies = {
  hello: "Hi 👋 How can I help you today?",
  delivery: "Yes, we provide fast home delivery 🚚",
  timing: "We are open daily from 10 AM to 11 PM ⏰",
  payment: "We accept Cash, Visa, PayPal and UPI 💳",
  customize: "Yes! You can customize food while ordering 🍽️",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);

    const key = Object.keys(faqReplies).find((k) =>
      input.toLowerCase().includes(k)
    );

    const reply =
      faqReplies[key] ||
      "Sorry 😅 I didn’t understand. Try asking about delivery, timing or payment.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* ===== BACKGROUND OVERLAY ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* ===== CHAT TOGGLE BUTTON ===== */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-yellow-400 
                   flex items-center justify-center shadow-xl text-2xl z-50"
      >
        {open ? <HiX /> : <IoChatbubbleEllipsesOutline />}
      </button>

      {/* ===== CHAT WINDOW ===== */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-white 
                        rounded-2xl shadow-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="px-4 py-3 bg-yellow-400 rounded-t-2xl font-semibold">
            AsianFood Chat
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[280px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-xl text-sm break-words
                  ${
                    msg.from === "user"
                      ? "bg-yellow-400 ml-auto"
                      : "bg-gray-100"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-gray-500">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border border-gray-500 rounded-lg px-3 py-2 text-sm outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-yellow-400 px-4 py-2 rounded-lg font-medium text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
