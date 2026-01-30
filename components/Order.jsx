// import Image from "next/image";

// const Order = () => {
//   const steps = [
//     {
//       img: "/hand.png",
//       title: "Select Food",
//       desc: "selecting the type of food you want to order",
//     },
//     {
//       img: "/customization.png",
//       title: "Customization",
//       desc: "specify additional ingredients, modifications, or any specific preferences you may have",
//     },
//     {
//       img: "/placement.png",
//       title: "Placement",
//       desc: "you can either order online by adding items to your virtual cart and providing your contact",
//     },
//     {
//       img: "/delivery.png",
//       title: "Delivery/Pickup",
//       desc: "You will typically receive a confirmation message or email that includes the details of your order, such as the estimated delivery or pickup time.",
//     },
//   ];

//   return (
//     <section className="px-16 py-15">
      
//       {/* ================= SECTION TITLE ================= */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-bold">How You Can Order</h2>
//         <div className="w-25 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
//       </div>

//       {/* ================= ORDER CARDS ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className="border-2 border-gray-300 rounded-xl bg-white p-6 text-center  flex flex-col items-center"
//           >
//             {/* Image */}
//             <Image
//               src={item.img}
//               alt={item.title}
//               width={200}
//               height={300}
//               className="mb-6"
//             />

//             {/* Title */}
//             <h3 className="font-semibold text-black text-2xl mb-3">
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p className="text-md text-black/900 leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Order;



import Image from "next/image";

const Order = () => {
  const steps = [
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769666020/hand_cl4lmb",
      title: "Select Food",
      desc: "selecting the type of food you want to order",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665939/customization_v29i13",
      title: "Customization",
      desc: "specify additional ingredients, modifications, or any specific preferences you may have",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769666032/placement_rvulri",
      title: "Placement",
      desc: "you can either order online by adding items to your virtual cart and providing your contact",
    },
    {
      img: "https://res.cloudinary.com/dsqgprncd/image/upload/v1769665993/delivery_eym575",
      title: "Delivery/Pickup",
      desc: "You will typically receive a confirmation message or email that includes the details of your order, such as the estimated delivery or pickup time.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16">

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          How You Can Order
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded"></div>
      </div>

      {/* ================= ORDER CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-xl bg-white
                       p-6 text-center flex flex-col items-center
                       h-full"
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={300}
              className="mb-6"
            />

            {/* Title */}
            <h3 className="font-semibold text-black text-xl sm:text-2xl mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Order;
