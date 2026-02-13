"use client";

import axios from "axios";
import toast from "react-hot-toast";

const RazorpayPayment = ({
  amount,
  userId,
  items,
  paymentMethod = "online",
  onSuccess,
}) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      if (!userId) {
        toast.error("Please login to proceed with payment");
        return;
      }

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      
      const { data } = await axios.post(
        "http://localhost:4000/payment/order",
        {
          amount,
          userId,
          items,
          paymentMethod: "online",
        },
        { withCredentials: true }
      );

      if (!data.success) {
        toast.error(data.message || "Failed to create payment order");
        return;
      }

      const { order } = data;

      // 2️⃣ Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Asian Food",
        description: "Food Order Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            const { data } = await axios.post(
              "http://localhost:4000/payment/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { withCredentials: true }
            );

            if (data.success) {
              if (onSuccess) onSuccess(response);
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            console.error("Verification Error:", error);
            toast.error("Verification failed");
          }
        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#F1C74E",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      toast.error(error.response?.data?.message || "Payment failed");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full mt-6 bg-yellow-400 text-black py-4 rounded-xl 
                 font-bold hover:bg-yellow-500 transition-all text-lg shadow-md"
    >
      Pay ₹{amount.toFixed(2)} Online
    </button>
  );
};

export default RazorpayPayment;
