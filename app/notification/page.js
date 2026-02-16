"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

import { RiDeleteBinLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const router = useRouter();

  const menuRef = useRef(null);

  const isToday = (date) => {
  const d = new Date(date);
  const today = new Date();
  return d.toDateString() === today.toDateString();
};

const isYesterday = (date) => {
  const d = new Date(date);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return d.toDateString() === yesterday.toDateString();
};

const formatGroupTitle = (date) => {
  const d = new Date(date);

  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";

  return d.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
};


const groupedNotifications = notifications.reduce((groups, item) => {
  const title = formatGroupTitle(item.createdAt);

  if (!groups[title]) {
    groups[title] = [];
  }

  groups[title].push(item);
  return groups;
}, {});


  useEffect(() => {
    const updateNotifications = () => {
      const stored =
        JSON.parse(localStorage.getItem("food_notifications")) || [];
      setNotifications(stored);
    };

    // listen for updates
    window.addEventListener("notificationsUpdated", updateNotifications);

    return () => {
      window.removeEventListener("notificationsUpdated", updateNotifications);
    };
  }, []);

  // ================= LOAD NOTIFICATIONS =================
  useEffect(() => {
    const stored = localStorage.getItem("food_notifications");
    if (stored) {
      setNotifications(JSON.parse(stored));
    }
  }, []);

  // ================= UPDATE STORAGE =================
  const updateStorage = (data) => {
    setNotifications(data);
    localStorage.setItem("food_notifications", JSON.stringify(data));
  };

  // ================= DELETE NOTIFICATION =================
  const deleteNotification = (id) => {
    const updated = notifications.filter((n) => n._id !== id);
    updateStorage(updated);
    setOpenMenu(null);
  };

  // ================= VIEW FOOD =================
  const viewFood = (id) => {
    router.push(`/menu#${id}`); // or /food/[id]
    setOpenMenu(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== PAGE CONTENT ===== */}
      <section className="px-6 sm:px-10 lg:px-16 py-10 min-h-[80vh] bg-[#FBF1D6]">
        {/* ===== HEADER ===== */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <IoMdArrowBack size={20} />
          </button>

          <h1 className="text-2xl font-bold text-black">Notifications</h1>
        </div>

        {/* ===== EMPTY STATE ===== */}
        {notifications.length === 0 ? (
          <div className="text-center mt-20 text-gray-500">
            <p className="text-lg font-medium">No notifications yet 🍔</p>
            <p className="text-sm mt-2">New food updates will appear here</p>
          </div>
        ) : (
         <div className="flex flex-col gap-8">
  {Object.entries(groupedNotifications).map(
    ([groupTitle, items]) => (
      <div key={groupTitle}>
        {/* GROUP HEADER */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm bg-white text-gray-600 
          rounded-full shadow">
            {groupTitle}
          </span>
        </div>

        {/* NOTIFICATIONS */}
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="relative flex gap-5 bg-white 
              rounded-2xl p-4 shadow hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div
                className="relative w-24 h-24 flex-shrink-0 cursor-pointer"
                onClick={() => viewFood(item._id)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="96px"
                  className="object-contain rounded-lg w-auto h-auto"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-black">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.desc}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(item.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {/* 3 DOT MENU */}
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === item._id ? null : item._id
                    )
                  }
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <HiDotsVertical />
                </button>

                {openMenu === item._id && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-8 w-44 
                    bg-white shadow-lg rounded-lg z-50"
                  >
                    <button
                      onClick={() => viewFood(item._id)}
                      className="w-full flex items-center gap-3 
                      px-4 py-2 hover:bg-gray-100"
                    >
                      <ImSpoonKnife className="text-[#F1C74E]" />
                      <span>View food</span>
                    </button>

                    <button
                      onClick={() => deleteNotification(item._id)}
                      className="w-full flex items-center gap-3 
                      px-4 py-2 text-red-500 hover:bg-red-50"
                    >
                      <RiDeleteBinLine />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  )}
</div>

        )}
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
};

export default NotificationPage;
