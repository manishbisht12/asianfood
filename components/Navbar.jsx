// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useCart } from "../context/CartContext";
// import { IoMdSearch } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [showBadge, setShowBadge] = useState(false);
//   const { cartCount } = useCart();

//   const prevCountRef = useRef(cartCount);

//   useEffect(() => {
//     if (cartCount > prevCountRef.current) {
//       setShowBadge(true);
//     }
//     if (cartCount === 0) {
//       setShowBadge(false);
//     }
//     prevCountRef.current = cartCount;
//   }, [cartCount]);

//   const handleLinkClick = () => setOpen(false);

//   const handleCartClick = () => {
//     setOpen(false);
//     setShowBadge(false);
//   };

//   return (
//     /* Glassmorphism to match the torch theme background */
//     <nav className="sticky top-0 z-[100] px-6 lg:px-16 py-6 bg-white/70 backdrop-blur-md">
//       <div className="flex items-center justify-between">

//         {/* ================= LOGO ================= */}
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src="/asianfood.png"
//             alt="Asianfood Logo"
//             width={180}
//             height={45}
//             priority
//           />
//         </Link>

//         {/* ================= DESKTOP MENU ================= */}
//         <ul className="hidden lg:flex items-center gap-10 text-black font-medium">
//           {["Home", "Menu", "Service", "Contact"].map((item) => (
//             <li key={item}>
//               <Link
//                 href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
//                 className="relative group transition duration-300"
//               >
//                 {item}

//                 <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F1C74E] transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* ================= DESKTOP ACTIONS ================= */}
//         <div className="hidden lg:flex items-center gap-6 text-xl text-black">
//           <IoMdSearch className="cursor-pointer hover:text-[#F1C74E] transition" />

//           <Link
//             href="/cart"
//             onClick={handleCartClick}
//             className="relative cursor-pointer hover:text-[#F1C74E] transition-colors"
//           >
//             <IoCartOutline size={20} />
//             {showBadge && cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold border border-white">
//                 {cartCount}
//               </span>
//             )}
//           </Link>

//           <IoIosNotificationsOutline className="cursor-pointer hover:text-[#F1C74E] transition" />

//           {/* ✅ RESTORED: Original Login Style */}
//           <Link href="/login" className="ml-4 px-6 py-2 border border-[#F1C74E] text-[#F1C74E] rounded-full font-medium hover:bg-[#F1C74E] hover:text-white transition-all inline-block">
//             Login
//           </Link>
//         </div>

//         {/* ================= MOBILE MENU ICON ================= */}
//         <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <HiX /> : <HiMenu />}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {open && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl">
//           <ul className="flex flex-col gap-6 text-black font-medium">
//             <li onClick={handleLinkClick}><Link href="/">Home</Link></li>
//             <li onClick={handleLinkClick}><Link href="/menu">Menu</Link></li>
//             <li onClick={handleLinkClick}><Link href="/service">Service</Link></li>
//             <li onClick={handleLinkClick}><Link href="/contact">Contact us</Link></li>
//           </ul>

//           <div className="flex items-center gap-8 text-2xl mt-8 pt-6 border-t">
//             <IoMdSearch />
//             <Link href="/cart" onClick={handleCartClick} className="relative">
//                <IoCartOutline size={20} />
//                {showBadge && cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//             <IoIosNotificationsOutline />
//           </div>

//           <Link href="/login" onClick={handleLinkClick} className="block mt-8">
//             <button className="w-full px-5 py-4 border border-[#F1C74E] text-[#F1C74E] rounded-xl font-bold hover:bg-[#F1C74E] hover:text-white transition-all">
//               Login
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { io } from "socket.io-client";

import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);


  const { cartCount } = useCart();
  const router = useRouter();

  const prevCountRef = useRef(cartCount);
  const profileRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
  if (!search.trim()) {
    setResults([]);
    return;
  }

  const delay = setTimeout(async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/search?q=${search}`
      );
      setResults(res.data.foods || []);
    } catch (err) {
      setResults([]);
    }
  }, 400); // debounce

  return () => clearTimeout(delay);
}, [search]);


  useEffect(() => {
    if (cartCount > prevCountRef.current) {
      setShowBadge(true);
    }
    if (cartCount === 0) {
      setShowBadge(false);
    }
    prevCountRef.current = cartCount;
  }, [cartCount]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setAuthLoading(true);

        const res = await axios.get("http://localhost:4000/auth/users", {
          withCredentials: true,
        });

        setUser(res.data.users[0] || null);
      } catch (err) {
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    socketRef.current = io("http://localhost:4000", {
      withCredentials: true,
    });

    socketRef.current.on("newFood", (food) => {
      const existing =
        JSON.parse(localStorage.getItem("food_notifications")) || [];

      const exists = existing.find((n) => n._id === food._id);
      if (exists) return;

      const updated = [food, ...existing].slice(0, 20);

      localStorage.setItem("food_notifications", JSON.stringify(updated));

      setNotificationCount(updated.length);

      window.dispatchEvent(new Event("notificationsUpdated"));

      toast.success(`New food added: ${food.title}`);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("food_notifications")) || [];

    setNotificationCount(stored.length);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        { withCredentials: true },
      );

      //3 remove all  notification  when  user logout
      localStorage.removeItem("food_notifications");
      localStorage.removeItem("notifications_seen");
      setNotificationCount(0);

      setUser(null);

      setProfileOpen(false);
      toast.success("Logout Sucessfully");

      setTimeout(() => {
        router.push("/login");
      }, 800);
    } catch (error) {
      toast.error("Logout failed, please try again");
    }
  };

  const handleLinkClick = () => setOpen(false);

  const handleCartClick = () => {
    setOpen(false);
    setShowBadge(false);
  };

  return (
    /* Glassmorphism to match the torch theme background */
    <nav className="sticky top-0 z-[100] px-6 lg:px-16 py-6 bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/asianfood.png"
            alt="Asianfood Logo"
            width={180}
            height={45}
            priority
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-10 text-black font-medium">
          {["Home", "Menu", "Service", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="relative group transition duration-300"
              >
                {item}

                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F1C74E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex items-center gap-6 text-xl text-black">
          <div className="relative">
  <div className="flex items-center bg-white border rounded-2xl px-3 py-1">
    <IoMdSearch className="text-gray-500" />
    <input
      type="text"
      placeholder="Search food..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="ml-2 outline-none text-sm w-30"
    />
  </div>

  {/* SEARCH RESULT DROPDOWN */}
  {results.length > 0 && (
    <div className="absolute top-12 left-0 w-72 bg-white shadow-lg rounded-xl z-50 overflow-hidden">
      {results.map((item) => (
        <div
          key={item._id}
          onClick={() => {
            router.push(`/menu#${item._id}`);
            setResults([]);
            setSearch("");
          }}
          className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
          <div>
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs text-gray-500">₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


          <Link
            href="/cart"
            onClick={handleCartClick}
            className="relative cursor-pointer hover:text-[#F1C74E] transition-colors"
          >
            <IoCartOutline size={20} />
            {showBadge && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold border border-white">
                {cartCount}
              </span>
            )}
          </Link>


          {user && (
            <Link
              href="/notification"
              className="relative"
              onClick={() => setNotificationCount(0)}
            >
              <IoIosNotificationsOutline className="cursor-pointer hover:text-[#F1C74E] transition" />

              {notificationCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-red-500 text-white 
      text-[9px] rounded-full h-4 w-4 flex items-center 
      justify-center font-bold border border-white"
                >
                  {notificationCount}
                </span>
              )}
            </Link>
          )}

          {/*  RESTORED: Original Login Style */}
          {authLoading ? null : user ? (
            //  USER LOGGED IN → AVATAR
            <div ref={profileRef} className="relative">
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="relative cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-full bg-[#F1C74E]
        text-black font-bold flex items-center
        justify-center uppercase"
                >
                  {user.name?.charAt(0)}
                </div>

                <MdKeyboardArrowDown
                  size={18}
                  className={`absolute -bottom-1 -right-1 bg-white rounded-full
        transition-transform duration-200
        ${profileOpen ? "rotate-180" : ""}`}
                />
              </div>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                  <p className="px-7 py-2 border-b font-medium text-base">
                    {user.name}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-4 py-2
          text-red-500 hover:bg-red-50 text-base font-semibold"
                  >
                    <MdLogout size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            //  USER NOT LOGGED IN → LOGIN BUTTON
            <Link href="/login">
              <button
                className="ml-4 px-6 py-2 border border-[#F1C74E] 
    text-[#F1C74E] rounded-full font-medium 
    hover:bg-[#F1C74E] hover:text-white transition-all"
              >
                Login
              </button>
            </Link>
          )}
        </div>

        {/* ================= MOBILE MENU ICON ================= */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl">
          <ul className="flex flex-col gap-6 text-black font-medium">
            <li onClick={handleLinkClick}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/menu">Menu</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/service">Service</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>

          <div className="flex items-center gap-8 text-2xl mt-8 pt-6 border-t">
            <IoMdSearch />
            <Link href="/cart" onClick={handleCartClick} className="relative">
              <IoCartOutline size={20} />
              {showBadge && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <IoIosNotificationsOutline />
          </div>

          {authLoading ? null : user ? (
            //  LOGGED IN → SHOW USER + LOGOUT
            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#F1C74E] 
        text-black font-bold flex items-center justify-center uppercase"
                  >
                    {user.name?.charAt(0)}
                  </div>

                  <span className="font-medium text-black">{user.name}</span>
                </div>

                <button
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                  className="flex items-center gap-3 text-red-500 font-medium"
                >
                  <MdLogout size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            //  NOT LOGGED IN → LOGIN
            <Link
              href="/login"
              onClick={handleLinkClick}
              className="block mt-8"
            >
              <button
                className="w-full px-5 py-4 border border-[#F1C74E] 
    text-[#F1C74E] rounded-xl font-bold 
    hover:bg-[#F1C74E] hover:text-white transition-all"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
