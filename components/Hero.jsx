// import Image from "next/image";
// import { IoCartOutline } from "react-icons/io5";

// const Hero = () => {
//   return (
//     <section className="flex items-center justify-between px-16 py-20 mt-13">

//       {/* ================= LEFT IMAGE AREA ================= */}
//       <div className="relative w-[428px] h-[428px] ml-6">

//         {/* Background */}
//         <Image
//           src="/Ellipse 6.png"
//           alt="Ellipse background"
//           fill
//           priority
//           className="object-contain z-0"
//         />

//         {/* Main Plate */}
//         <Image
//           src="/plate.png"
//           alt="Main plate"
//           width={380}
//           height={380}
//           className="absolute top-[-1%] left-[5%] z-10"
//         />

//         {/* Decorations */}
//         <Image
//           src="/c1.png"
//           alt="Decoration 1"
//           width={163}
//           height={159}
//           className="absolute top-[-15%] left-[58%] z-30"
//         />

//         <Image
//           src="/c2.png"
//           alt="Decoration 2"
//           width={120}
//           height={110}
//           className="absolute top-[82%] left-[22%] z-30"
//         />

//         <Image
//           src="/c3.png"
//           alt="Decoration 3"
//           width={110}
//           height={100}
//           className="absolute top-[1%] left-[24%] z-30"
//         />

//         <Image
//           src="/c4.png"
//           alt="Decoration 4"
//           width={130}
//           height={128}
//           className="absolute top-[13%] left-[-14%] z-30"
//         />

//         {/* Top Ellipses */}
//         <Image
//           src="/Ellipse 7.png"
//           alt="Ellipse 7"
//           width={30}
//           height={44}
//           className="absolute top-[-6%] left-[10%] z-50"
//         />
//         <Image
//           src="/Ellipse 8.png"
//           alt="Ellipse 8"
//           width={30}
//           height={44}
//           className="absolute top-[-20%] left-[26%] z-50"
//         />
//         <Image
//           src="/Ellipse 9.png"
//           alt="Ellipse 9"
//           width={30}
//           height={44}
//           className="absolute top-[-13%] left-[42%] z-50"
//         />
//       </div>

//       {/* ================= RIGHT CONTENT AREA ================= */}
//       <div className="max-w-xl -mt-15 mr-12">

//         <h1 className="text-5xl font-bold leading-tight">
//           Happy With{" "}
//           <span className="text-yellow-500">Delicious Food</span>{" "}
//           And Get New Experiences With Asian Food
//         </h1>

//         <p className="mt-6 text-gray-600 leading-relaxed">
//           Exploring new food with different transition from all Asian country
//           especially from Cambodia that you can try at this place and get a
//           good price from us as well we will make a good impact to our customers.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex items-center gap-4">
//           <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition">
//             Order Food <IoCartOutline size={20} />
//           </button>

//           <button className="border border-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//responsive
"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between 
                        px-6 lg:px-22 py-16 lg:py-20 gap-12 overflow-hidden">

      {/* ================= LEFT IMAGE AREA ================= */}
      <div className="relative mt-14 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[428px] lg:h-[428px]">

        {/* Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985866/Ellipse_6_wapfb6.png"
            alt="Ellipse background"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 428px"
            priority
            className="object-contain w-auto h-auto"
          />
        </motion.div>

        {/* Main Plate */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2, type: "spring" }}
          className="absolute top-[-1%] left-[5%] z-10"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985922/plate_y6xnt2.png"
            alt="Main plate"
            width={380}
            height={380}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Decorations - Floating Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[58%] z-30"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985845/c1_wxx8li.png"
            alt="Decoration 1"
            width={163}
            height={159}
            className="w-auto h-auto"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
          className="absolute top-[82%] left-[22%] z-30"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985828/c2_l9dbvh.png"
            alt="Decoration 2"
            width={120}
            height={110}
            className="w-auto h-auto"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[50%] left-[-10%] z-30"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985851/c3_weotou.png"
            alt="Decoration 3"
            width={110}
            height={100}
            className="w-auto h-auto"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[13%] left-[-14%] z-30"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985857/c4_b4mk67.png"
            alt="Decoration 4"
            width={130}
            height={128}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Top Ellipses - Pulse Animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-[-6%] left-[10%] z-50"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985874/Ellipse_7_ielz8m.png"
            alt="Ellipse 7"
            width={30}
            height={44}
            className="w-auto h-auto"
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
          className="absolute top-[-20%] left-[26%] z-50"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985880/Ellipse_8_gq6zqr.png"
            alt="Ellipse 8"
            width={30}
            height={44}
            className="w-auto h-auto"
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}
          className="absolute top-[-13%] left-[42%] z-50"
        >
          <Image
            src="https://res.cloudinary.com/dsqgprncd/image/upload/v1770985887/Ellipse_9_n70hn2.png"
            alt="Ellipse 9"
            width={30}
            height={44}
          />
        </motion.div>
      </div>

      {/* ================= RIGHT CONTENT AREA ================= */}
      <div className="max-w-xl text-center lg:text-left z-10">

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl 
                       font-bold leading-tight"
        >
          Happy With{" "}
          <span className="text-yellow-500">Delicious Food</span>{" "}
          And Get New Experiences With Asian Food
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-gray-600 leading-relaxed"
        >
          Exploring new food with different transition from all Asian country
          especially from Cambodia that you can try at this place and get a
          good price from us as well we will make a good impact to our customers.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row 
                        items-center gap-4 justify-center lg:justify-start"
        >
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 
                             bg-yellow-500 text-black 
                             px-6 py-3 rounded-lg font-medium 
                             hover:bg-yellow-600 transition"
            >
              Order Food <IoCartOutline size={20} />
            </motion.button>
          </Link>

          <Link href="/service">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-yellow-500 text-black 
                             px-6 py-3 rounded-lg font-medium 
                             hover:bg-yellow-50 transition"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

