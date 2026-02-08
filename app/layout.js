// // // // import "./globals.css";

// // // // export const metadata = {
// // // //   title: "Chai Samosa",
// // // //   description: "Fresh Chai & Crispy Samosa",
// // // // };

// // // // export default function RootLayout({ children }) {
// // // //   return (
// // // //     <html lang="en">
// // // //       <body className="bg-white text-gray-800">
// // // //         {children}
// // // //       </body>
// // // //     </html>
// // // //   );
// // // // }

// import { CartProvider } from "@/context/CartContext";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
       <Toaster
  position="top-center"
  toastOptions={{
    pauseOnHover: false,
    duration: 3000,
  }}
  containerStyle={{
    top: "50%",
    transform: "translateY(-70%)",
  }}
/>

      </body>
    </html>
  );
}