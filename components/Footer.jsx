// // import React from "react";
// // import Image from "next/image";

// // const Footer = () => {
// //   return (
// //     <footer className=" bg-[#FBF1D6] px-16 pt-16 pb-6">

// //       {/* ================= TOP CONTENT ================= */}
// //       <div className="flex justify-between">

// //         {/* ===== LEFT SECTION ===== */}
// //         <div>
// //           {/* Logo */}
// //           <Image
// //             src="/asianfood.png"
// //             alt="Asianfood logo"
// //             width={160}
// //             height={40}
// //           />

// //           {/* Accepted Payment */}
// //           <h4 className="mt-8 font-semibold">Accepted Payment</h4>

// //           <div className="flex items-center gap-4 mt-4">
// //             <Image src="/visa.png" alt="Visa" width={50} height={30} />
// //             <Image src="/khoa.png" alt="Khoa" width={50} height={30} />
// //             <Image src="/paypal.png" alt="Paypal" width={50} height={30} />
// //           </div>
// //         </div>

// //         {/* ===== CONTACT ===== */}
// //         <div>
// //           <h4 className="font-semibold mb-4">Contact</h4>

// //           <div className="flex items-center gap-4">
// //             <Image src="/fb.png" alt="Facebook" width={32} height={32} />
// //             <Image src="/outlook.png" alt="Outlook" width={32} height={32} />
// //             <Image src="/insta.png" alt="Instagram" width={32} height={32} />
// //           </div>
// //         </div>

// //         {/* ===== SUPPORT ===== */}
// //         <div>
// //           <h4 className="font-semibold mb-4">Support</h4>
// //           <p className="text-sm mb-2 cursor-pointer">FAQ</p>
// //           <p className="text-sm cursor-pointer">Contact</p>
// //         </div>

// //         {/* ===== LOCATION ===== */}
// //         <div>
// //           <h4 className="font-semibold mb-4">Location</h4>
// //           <p className="text-sm">
// //             25°11'46.7"N 55°16'35.6"E
// //             <br />
// //             (Burj Khalifa, Dubai)
// //           </p>
// //         </div>
// //       </div>

// //       {/* ================= DIVIDER ================= */}
// //       <hr className="my-10 border-gray-300" />

// //       {/* ================= BOTTOM BAR ================= */}
// //       <div className="flex justify-end">

       

// //         <select className="border border-gray-400 rounded-md px-3 py-1 bg-transparent">
// //           <option>English</option>
// //         </select>

// //       </div>
// //        <p className="text-sm flex items-center justify-center">@Powered by Asianfood</p>
// //     </footer>
// //   );
// // };

// // export default Footer;






// //responsive
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FBF1D6] px-6 sm:px-10 lg:px-16 pt-14 pb-6">

      {/* ================= TOP CONTENT ================= */}
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-10
          text-center sm:text-left
        "
      >
        {/* ===== LOGO & PAYMENT ===== */}
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/Asianfood.png"
            alt="Asianfood logo"
            width={160}
            height={40}
          />

          <h4 className="mt-6 font-semibold">Accepted Payment</h4>

          <div className="flex items-center gap-4 mt-4">
            <Image src="/visa.png" alt="Visa" width={45} height={28} />
            <Image src="/khoa.png" alt="Khoa" width={45} height={28} />
            <Image src="/paypal.png" alt="Paypal" width={45} height={28} />
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="flex items-center gap-4">
            <Image src="/fb.png" alt="Facebook" width={32} height={32} />
            <Image src="/outlook.png" alt="Outlook" width={32} height={32} />
            <Image src="/insta.png" alt="Instagram" width={32} height={32} />
          </div>
        </div>

        {/* ===== SUPPORT ===== */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-semibold mb-4">Support</h4>
          <p className="text-sm mb-2 cursor-pointer">FAQ</p>
          <p className="text-sm cursor-pointer">Contact</p>
        </div>

        {/* ===== LOCATION ===== */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-semibold mb-4">Location</h4>
          <p className="text-sm leading-relaxed text-center sm:text-left">
            25°11'46.7"N 55°16'35.6"E
            <br />
            (Burj Khalifa, Dubai)
          </p>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <hr className="my-8 border-gray-300" />

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          flex flex-col 
          sm:flex-row 
          items-end 
          justify-end 
          gap-4
        "
      >
        

        <select className="border border-gray-400 rounded-md px-3 py-1 bg-transparent">
          <option>English</option>
        </select>
      </div>
      <div>
        <p className="text-sm text-center">
          @Powered by Asianfood
        </p>
      </div>
    </footer>
  );
};

export default Footer;


