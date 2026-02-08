
// import React from "react";
// import Image from "next/image";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdStar } from "react-icons/io";

// const Feedback = () => {
//   return (
//     <section className="px-6 sm:px-10 lg:px-16 py-16">

//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-12 lg:mb-16">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
//           Review From Our Customers Say
//         </h2>
//         <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
//       </div>

//       {/* ================= REVIEWS ================= */}
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

//         {/* ===== Review Card 1 ===== */}
//         <div className="border-2 border-gray-200 rounded-xl p-6 w-full lg:w-1/2">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               src="/andia.png"
//               alt="Andia Jorida"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <h3 className="font-semibold text-base sm:text-lg">
//               Andia Jorida
//             </h3>
//           </div>

//           <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
//             My experience at your restaurant was truly excellent. The food was
//             absolutely delicious - every dish was perfectly cooked and bursting
//             with flavor. But what really impressed me was the service. Your
//             staff was attentive, friendly which make me feel want to be there
//             again.
//           </p>

//           <div className="flex items-center gap-2 text-yellow-400">
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <span className="text-gray-700 ml-2 text-sm sm:text-base">
//               5 stars
//             </span>
//           </div>
//         </div>

//         {/* ===== Review Card 2 ===== */}
//         <div className="border-2 border-gray-200 rounded-xl p-6 w-full lg:w-1/2">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               src="/william.png"
//               alt="William Henry"
//               width={48}
//               height={48}
//               className="rounded-full"
//             />
//             <h3 className="font-semibold text-base sm:text-lg">
//               William Henry
//             </h3>
//           </div>

//           <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
//             Living in Canada, I hadn't ventured much into Asian cuisine until
//             recently. But wow, what a delicious world I've been missing! Khmer
//             food, in particular, has captured my heart, and Bok Loh Hong holds
//             a special place in my memory as the dish that first made me say,
//             "Asian food is so yummy!"
//           </p>

//           <div className="flex items-center gap-2 text-yellow-400">
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <IoMdStar size={22} />
//             <span className="text-gray-700 ml-2 text-sm sm:text-base">
//               4 stars
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ================= ADD REVIEW ================= */}
//       <div className="mt-10 flex items-center justify-center lg:justify-start gap-3 cursor-pointer">
//         <span className="text-gray-800 font-medium">
//           Add A Review
//         </span>
//         <FaPlus className="text-lg" />
//       </div>

//     </section>
//   );
// };

// export default Feedback;


"use client";
import React, { useState , useEffect} from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [allReviews, setAllReviews] = useState([]);
  const [userName, setUserName] = useState("");
  const [reviewText, setReviewText] = useState("");

  // Add IN LOCALSTORAGE
// useEffect(() => {
//   const savedReviews = localStorage.getItem("userReviews");
//   if (savedReviews) {
//     setAllReviews(JSON.parse(savedReviews));
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("userReviews", JSON.stringify(allReviews));
// }, [allReviews]);

  const handleSubmit = () => {
    if(!userName || !review || rating===0)return alert("please fill everything");

    const newEntry = {
      id: Date.now(),
      name:userName,
      img: "/user-placeholder.png",
      text: review,
      Stars: rating,
    }

    setAllReviews([...allReviews, newEntry]);

    setUserName("");
    setReviewText("");
    setRating(0);
    setShowForm(false);

  };

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ===== TITLE ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Review From Our Customers
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* ===== EXISTING REVIEWS ===== */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">

        <div className="border-2 border-gray-200 rounded-xl p-6 lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/andia.png" alt="Andia" width={48} height={48} className="rounded-full" />
            <h3 className="font-semibold">Andia Jorida</h3>
          </div>

          <p className="text-gray-600 mb-4">
            Amazing food and excellent service!
          </p>

          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <IoMdStar key={i} size={22} />
            ))}
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-xl p-6 lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <Image src="/william.png" alt="William" width={48} height={48} className="rounded-full" />
            <h3 className="font-semibold">William Henry</h3>
          </div>

          <p className="text-gray-600 mb-4">
            Best Asian food I’ve ever tried.
          </p>

          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <IoMdStar key={i} size={22} />
            ))}
            <IoMdStarOutline size={22} />
          </div>
        </div>
      </div>

      {/* ===== DYNAMIC REVIEWS ===== */}
<div className="flex flex-col lg:flex-row flex-wrap gap-6">
  {allReviews.map((item) => (
    <div key={item.id} className="border-2 border-gray-200 rounded-xl p-6 lg:w-[49%] mb-7">
      <div className="flex items-center gap-4 mb-4">
        {/* Placeholder image for new users */}
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">
          {item.name.charAt(0)}
        </div>
        <h3 className="font-semibold">{item.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{item.text}</p>
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          i < item.Stars ? <IoMdStar key={i} size={22} /> : <IoMdStarOutline key={i} size={22} />
        ))}
      </div>
    </div>
  ))}
</div>
      

      {/* ===== ADD REVIEW BUTTON ===== */}
      <div
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-3 cursor-pointer mb-6"
      >
        <span className="font-medium">Add a Review</span>
        <FaPlus />
      </div>

      {/* ===== REVIEW FORM ===== */}
      {showForm && (
        <div className="max-w-xl border-2 border-gray-200 rounded-xl p-6">

          <h3 className="font-semibold mb-4">Your Rating</h3>

          {/* ⭐⭐⭐⭐⭐ CLICKABLE STARS (NO DROPDOWN) */}
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className="cursor-pointer"
              >
                {rating >= star ? (
                  <IoMdStar size={32} className="text-yellow-400" />
                ) : (
                  <IoMdStarOutline size={32} className="text-gray-400" />
                )}
              </span>
            ))}
          </div>
          <input 
    value={userName} 
    onChange={(e) => setUserName(e.target.value)} 
    placeholder="Your Name" 
    className="w-full border rounded-lg p-2 mb-4"
  />

          {/* REVIEW INPUT */}
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="w-full border rounded-lg p-3 mb-4"
          />

          {/* SUBMIT */}
         <button 
  onClick={handleSubmit} 
  disabled={!userName.trim() || !review.trim() || rating === 0}
  className={`px-6 py-2 rounded-lg font-medium transition ${
    (!userName.trim() || !review.trim() || rating === 0) 
    ? "bg-gray-300 cursor-not-allowed" 
    : "bg-yellow-400 hover:bg-black hover:text-white"
  }`}
>
  Submit Review
</button>
        </div>
      )}

    </section>
  );
};

export default Feedback;
