"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import toast from "react-hot-toast";

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  /* ================= GET REVIEWS ================= */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:4000/review");
        setAllReviews(res.data.data);
      } catch (error) {
        toast.error("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  /* ================= POST REVIEW ================= */
  const handleSubmit = async () => {
    if (!review.trim() || rating === 0) {
      toast.error("Please give rating and review");
      return;
    }

    try {
      setSubmitting(true);

      const res = await axios.post(
        "http://localhost:4000/review",
        { review, rating },
        { withCredentials: true } 
      );

     
      setAllReviews((prev) => [res.data.data, ...prev]);

      toast.success(res.data.message || "Review submitted");

      // reset form
      setReview("");
      setRating(0);
      setShowForm(false);
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message;

      
      if (status === 401) {
        toast.error("Please login to submit a review");

        setReview("");
        setRating(0);
        setShowForm(false);
        return;
      }

     
      if (message === "You have already submitted a review") {
        toast.error(message);

        
        setReview("");
        setRating(0);
        setShowForm(false);
        return;
      }

      toast.error(message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ===== TITLE ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Review From Our Customers</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* ===== REVIEWS ===== */}
      {loading ? (
        <p className="text-center text-gray-500">Loading reviews...</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {allReviews.map((item) => (
            <div
              key={item._id}
              className="border-2 border-gray-200 rounded-xl p-6 w-full lg:w-[49%]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                  {item.name?.charAt(0)}
                </div>
                <h3 className="font-semibold">{item.name}</h3>
              </div>

              <p className="text-gray-600 mb-4">{item.review}</p>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) =>
                  i < item.rating ? (
                    <IoMdStar key={i} size={22} />
                  ) : (
                    <IoMdStarOutline key={i} size={22} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== ADD REVIEW BUTTON ===== */}
      <div
        onClick={() => setShowForm(!showForm)}
        className="flex items-center gap-3 cursor-pointer mt-10 mb-6"
      >
        <span className="font-medium">Add a Review</span>
        <FaPlus />
      </div>

      {/* ===== REVIEW FORM ===== */}
      {showForm && (
        <div className="max-w-xl border-2 border-gray-200 rounded-xl p-6">

          <h3 className="font-semibold mb-4">Your Rating</h3>

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

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="w-full border rounded-lg p-3 mb-4"
          />

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              submitting
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-black hover:text-white"
            }`}
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Feedback;
