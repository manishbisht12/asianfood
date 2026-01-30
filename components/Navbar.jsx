// // "use client";
// // import React, { useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { IoMdSearch } from "react-icons/io";
// // import { IoCartOutline } from "react-icons/io5";
// // import { IoIosNotificationsOutline } from "react-icons/io";
// // import { HiMenu, HiX } from "react-icons/hi";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
  
// //   const handleLinkClick = () => setOpen(false);

// //   return (
// //     <nav className="px-6 lg:px-16 py-6 bg-white relative z-50">
// //       <div className="flex items-center justify-between">

// //         {/* ================= LOGO ================= */}
// //         <Link href="/" className="cursor-pointer">
// //           <Image
// //             src="/asianfood.png"
// //             alt="Asianfood Logo"
// //             width={200}
// //             height={50}
// //             priority
// //           />
// //         </Link>

// //         {/* ================= DESKTOP MENU ================= */}
// //         <ul className="hidden lg:flex items-center gap-10 text-black font-medium">
// //           <li><Link href="/" className="hover:text-[#F1C74E]">Home</Link></li>
// //           <li><Link href="/menu" className="hover:text-[#F1C74E]">Menu</Link></li>
// //           <li><Link href="/service" className="hover:text-[#F1C74E]">Service</Link></li>
// //           <li><Link href="/contact" className="hover:text-[#F1C74E]">Contact us</Link></li>
// //         </ul>

// //         {/* ================= DESKTOP ACTIONS ================= */}
// //         <div className="hidden lg:flex items-center gap-6 text-xl text-black">
// //           <IoMdSearch className="cursor-pointer hover:text-[#F1C74E]" />
          
// //           {/* ✅ FIXED: Added Link to Desktop Cart */}
// //           <Link href="/cart" className="cursor-pointer hover:text-[#F1C74E]">
// //             <IoCartOutline />
// //           </Link>
          
// //           <IoIosNotificationsOutline className="cursor-pointer hover:text-[#F1C74E]" />

// //           <button className="ml-4 px-5 py-2 border border-[#F1C74E] rounded-lg font-medium hover:bg-[#F1C74E] hover:text-white transition">
// //             Login
// //           </button>
// //         </div>

// //         {/* ================= MOBILE MENU ICON ================= */}
// //         <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
// //           {open ? <HiX /> : <HiMenu />}
// //         </div>
// //       </div>

// //       {/* ================= MOBILE MENU ================= */}
// //       {open && (
// //         <div className="lg:hidden mt-6 border-t pt-6 bg-white">
// //           <ul className="flex flex-col gap-6 text-black font-medium">
// //             <li onClick={handleLinkClick}><Link href="/">Home</Link></li>
// //             <li onClick={handleLinkClick}><Link href="/menu">Menu</Link></li>
// //             <li onClick={handleLinkClick}><Link href="/service">Service</Link></li>
// //             <li onClick={handleLinkClick}><Link href="/contact">Contact us</Link></li>
// //           </ul>

// //           <div className="flex items-center gap-6 text-xl mt-6">
// //             <IoMdSearch />
// //             {/* ✅ FIXED: Added onClick to close menu when moving to cart */}
// //             <Link href="/cart" onClick={handleLinkClick}> 
// //                <IoCartOutline />
// //             </Link>
// //             <IoIosNotificationsOutline />
// //           </div>

// //           <button className="mt-6 w-full px-5 py-3 border border-[#F1C74E] rounded-lg font-medium">
// //             Login
// //           </button>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;



// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useCart } from "../context/CartContext"; // Path ensure kar lein
// import { IoMdSearch } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
  
//   // 1. Context se cart aur setCart (reset karne ke liye) nikala
//   const { cart, setCart } = useCart(); 
  
//   const handleLinkClick = () => setOpen(false);

//   // 2. Click karne par number aur red bg hatane ka function
//   const handleCartClick = () => {
//     setOpen(false);
//     if (setCart) setCart([]); // Yeh cart empty kar dega aur badge remove ho jayega
//   };

//   return (
//     <nav className="px-6 lg:px-16 py-6 bg-white relative z-50">
//       <div className="flex items-center justify-between">

//         {/* ================= LOGO ================= */}
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src="/asianfood.png"
//             alt="Asianfood Logo"
//             width={200}
//             height={50}
//             priority
//           />
//         </Link>

//         {/* ================= DESKTOP MENU ================= */}
//         <ul className="hidden lg:flex items-center gap-10 text-black font-medium">
//           <li><Link href="/" className="hover:text-[#F1C74E]">Home</Link></li>
//           <li><Link href="/menu" className="hover:text-[#F1C74E]">Menu</Link></li>
//           <li><Link href="/service" className="hover:text-[#F1C74E]">Service</Link></li>
//           <li><Link href="/contact" className="hover:text-[#F1C74E]">Contact us</Link></li>
//         </ul>

//         {/* ================= DESKTOP ACTIONS ================= */}
//         <div className="hidden lg:flex items-center gap-6 text-xl text-black">
//           <IoMdSearch className="cursor-pointer hover:text-[#F1C74E]" />
          
//           <Link href="/cart" onClick={handleCartClick} className="relative cursor-pointer hover:text-[#F1C74E]">
//             <IoCartOutline />
//             {/* 3. Logic: Sirf tab dikhega jab cart me items honge */}
//             {cart?.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 font-bold">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
          
//           <IoIosNotificationsOutline className="cursor-pointer hover:text-[#F1C74E]" />

//           <button className="ml-4 px-5 py-2 border border-[#F1C74E] rounded-lg font-medium hover:bg-[#F1C74E] hover:text-white transition">
//             Login
//           </button>
//         </div>

//         {/* ================= MOBILE MENU ICON ================= */}
//         <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <HiX /> : <HiMenu />}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {open && (
//         <div className="lg:hidden mt-6 border-t pt-6 bg-white">
//           <ul className="flex flex-col gap-6 text-black font-medium">
//             <li onClick={handleLinkClick}><Link href="/">Home</Link></li>
//             <li onClick={handleLinkClick}><Link href="/menu">Menu</Link></li>
//             <li onClick={handleLinkClick}><Link href="/service">Service</Link></li>
//             <li onClick={handleLinkClick}><Link href="/contact" >Contact us</Link></li>
//           </ul>

//           <div className="flex items-center gap-6 text-xl mt-6">
//             <IoMdSearch />
//             <Link href="/cart" onClick={handleCartClick} className="relative"> 
//                <IoCartOutline />
//                {cart?.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 font-bold">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//             <IoIosNotificationsOutline />
//           </div>

//           <button className="mt-6 w-full px-5 py-3 border border-[#F1C74E] rounded-lg font-medium">
//             Login
//           </button>
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const { cartCount } = useCart();
  
  const prevCountRef = useRef(cartCount);

  useEffect(() => {
    if (cartCount > prevCountRef.current) {
      setShowBadge(true);
    }
    if (cartCount === 0) {
      setShowBadge(false);
    }
    prevCountRef.current = cartCount;
  }, [cartCount]);

  const handleLinkClick = () => setOpen(false);

  const handleCartClick = () => {
    setOpen(false);
    setShowBadge(false); 
  };

  return (
    <nav className="sticky top-0 z-[100] px-6 lg:px-16 py-6 bg-white">
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
          <li><Link href="/" className="hover:text-[#F1C74E] transition">Home</Link></li>
          <li><Link href="/menu" className="hover:text-[#F1C74E] transition">Menu</Link></li>
          <li><Link href="/service" className="hover:text-[#F1C74E] transition">Service</Link></li>
          <li><Link href="/contact" className="hover:text-[#F1C74E] transition">Contact us</Link></li>
        </ul>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden lg:flex items-center gap-6 text-xl text-black">
          <IoMdSearch className="cursor-pointer hover:text-[#F1C74E]" />
          
          <Link 
            href="/cart" 
            onClick={handleCartClick} 
            className="relative cursor-pointer hover:text-[#F1C74E] transition-colors"
          >
            {/* ✅ Desktop Cart Size Reduced to 20 */}
            <IoCartOutline size={20} />
            
            {showBadge && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold border border-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          <IoIosNotificationsOutline className="cursor-pointer hover:text-[#F1C74E]" />

          <button className="ml-4 px-6 py-2 border border-[#F1C74E] text-[#F1C74E] rounded-full font-medium hover:bg-[#F1C74E] hover:text-white transition-all">
            Login
          </button>
        </div>

        {/* ================= MOBILE MENU ICON ================= */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl">
          <ul className="flex flex-col gap-6 text-black font-medium">
            <li onClick={handleLinkClick}><Link href="/">Home</Link></li>
            <li onClick={handleLinkClick}><Link href="/menu">Menu</Link></li>
            <li onClick={handleLinkClick}><Link href="/service">Service</Link></li>
            <li onClick={handleLinkClick}><Link href="/contact">Contact us</Link></li>
          </ul>

          <div className="flex items-center gap-8 text-2xl mt-8 pt-6 border-t">
            <IoMdSearch />
            <Link href="/cart" onClick={handleCartClick} className="relative"> 
               {/* ✅ Mobile Cart Size Reduced to 20 */}
               <IoCartOutline size={20} />
               {showBadge && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <IoIosNotificationsOutline />
          </div>

          <button className="mt-8 w-full px-5 py-4 bg-[#F1C74E] text-white rounded-xl font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;