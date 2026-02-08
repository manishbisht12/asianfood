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
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between 
                        px-6 lg:px-22 py-16 lg:py-20 gap-12">

      {/* ================= LEFT IMAGE AREA ================= */}
      <div className="relative mt-14 w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[428px] lg:h-[428px]">

        {/* Background */}
        <Image
          src="/Ellipse 6.png"
          alt="Ellipse background"
          fill
          priority
          className="object-contain z-0"
        />

        {/* Main Plate */}
        <Image
          src="/plate.png"
          alt="Main plate"
          width={380}
          height={380}
          className="absolute top-[-1%] left-[5%] z-10"
        />

        {/* Decorations */}
        <Image
          src="/c1.png"
          alt="Decoration 1"
          width={163}
          height={159}
          className="absolute top-[-15%] left-[58%] z-30"
        />

        <Image
          src="/c2.png"
          alt="Decoration 2"
          width={120}
          height={110}
          className="absolute top-[82%] left-[22%] z-30"
        />

        <Image
          src="/c3.png"
          alt="Decoration 3"
          width={110}
          height={100}
          className="absolute top-[50%] left-[-10%] z-30"
        />

        <Image
          src="/c4.png"
          alt="Decoration 4"
          width={130}
          height={128}
          className="absolute top-[13%] left-[-14%] z-30"
        />

        {/* Top Ellipses */}
        <Image
          src="/Ellipse 7.png"
          alt="Ellipse 7"
          width={30}
          height={44}
          className="absolute top-[-6%] left-[10%] z-50"
        />
        <Image
          src="/Ellipse 8.png"
          alt="Ellipse 8"
          width={30}
          height={44}
          className="absolute top-[-20%] left-[26%] z-50"
        />
        <Image
          src="/Ellipse 9.png"
          alt="Ellipse 9"
          width={30}
          height={44}
          className="absolute top-[-13%] left-[42%] z-50"
        />
      </div>

      {/* ================= RIGHT CONTENT AREA ================= */}
      <div className="max-w-xl text-center lg:text-left">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl 
                       font-bold leading-tight">
          Happy With{" "}
          <span className="text-yellow-500">Delicious Food</span>{" "}
          And Get New Experiences With Asian Food
        </h1>

        <p  className="mt-6 text-gray-600 leading-relaxed">
          Exploring new food with different transition from all Asian country
          especially from Cambodia that you can try at this place and get a
          good price from us as well we will make a good impact to our customers.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row 
                        items-center gap-4 justify-center lg:justify-start">
           <Link href="/menu"> <button className="flex items-center gap-2 
                             bg-yellow-500 text-black 
                             px-6 py-3 rounded-lg font-medium 
                             hover:bg-yellow-600 transition">
          Order Food <IoCartOutline size={20} />
          </button></Link>

         <Link href="/service"><button className="border border-yellow-500 text-black 
                             px-6 py-3 rounded-lg font-medium 
                             hover:bg-yellow-50 transition">
            Learn More
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

