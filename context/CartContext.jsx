// // // "use client";
// // // import { createContext, useContext, useState } from "react";

// // // const CartContext = createContext();

// // // export const CartProvider = ({ children }) => {
// // //   const [cart, setCart] = useState({});

// // //   const addToCart = (item) => {
// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [item.id]: { ...item, qty: 1 },
// // //     }));
// // //   };

// // //   const increaseQty = (id) => {
// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [id]: { ...prev[id], qty: prev[id].qty + 1 },
// // //     }));
// // //   };

// // //   const decreaseQty = (id) => {
// // //     setCart((prev) => {
// // //       if (prev[id].qty === 1) {
// // //         const updated = { ...prev };
// // //         delete updated[id];
// // //         return updated;
// // //       }
// // //       return {
// // //         ...prev,
// // //         [id]: { ...prev[id], qty: prev[id].qty - 1 },
// // //       };
// // //     });
// // //   };

// // //   const clearCart = () => setCart({});

// // //   return (
// // //     <CartContext.Provider
// // //       value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
// // //     >
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // export const useCart = () => useContext(CartContext);


// // "use client";
// // import { createContext, useContext, useState, useEffect } from "react";

// // const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState({});

// //   // Debugging: Watch cart changes in console
// //   useEffect(() => {
// //     console.log("Current Cart State:", cart);
// //   }, [cart]);

// //   const addToCart = (item) => {
// //     console.log("Adding to cart:", item); // Check if this fires
// //     setCart((prev) => ({
// //       ...prev,
// //       [item.id]: {
// //         ...item,
// //         qty: prev[item.id] ? prev[item.id].qty + 1 : 1,
// //       },
// //     }));
// //   };

// //   const increaseQty = (id) => {
// //     setCart((prev) => ({
// //       ...prev,
// //       [id]: { ...prev[id], qty: prev[id].qty + 1 },
// //     }));
// //   };

// //   const decreaseQty = (id) => {
// //     setCart((prev) => {
// //       if (!prev[id]) return prev;
// //       if (prev[id].qty <= 1) {
// //         const newCart = { ...prev };
// //         delete newCart[id];
// //         return newCart;
// //       }
// //       return { ...prev, [id]: { ...prev[id], qty: prev[id].qty - 1 } };
// //     });
// //   };

// //   const clearCart = () => setCart({});

// //   const cartCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

// //   return (
// //     <CartContext.Provider
// //       value={{ cart, setCart, addToCart, increaseQty, decreaseQty, clearCart, cartCount }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) throw new Error("useCart must be used within CartProvider");
// //   return context;
// // };

// "use client";
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});

//   // Load from Storage
//   useEffect(() => {
//     const saved = localStorage.getItem("my_cart");
//     if (saved) {
//       try {
//         setCart(JSON.parse(saved));
//       } catch (e) {
//         setCart({});
//       }
//     }
//   }, []);

//   // Save to Storage
//   useEffect(() => {
//     localStorage.setItem("my_cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     if (!item.id) return; // Guard clause
//     setCart((prev) => {
//       const existing = prev[item.id];
//       return {
//         ...prev,
//         [item.id]: {
//           ...item,
//           qty: existing ? existing.qty + 1 : 1,
//         },
//       };
//     });
//   };

//   const increaseQty = (id) => {
//     setCart((prev) => {
//       if (!prev[id]) return prev;
//       return {
//         ...prev,
//         [id]: { ...prev[id], qty: prev[id].qty + 1 },
//       };
//     });
//   };

//   const decreaseQty = (id) => {
//     setCart((prev) => {
//       if (!prev[id]) return prev;
//       if (prev[id].qty <= 1) {
//         const newCart = { ...prev };
//         delete newCart[id];
//         return newCart;
//       }
//       return {
//         ...prev,
//         [id]: { ...prev[id], qty: prev[id].qty - 1 },
//       };
//     });
//   };

//   const clearCart = () => setCart({});

//   const cartCount = Object.values(cart).reduce((sum, item) => sum + (item.qty || 0), 0);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, clearCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // Load from Storage
  useEffect(() => {
    const saved = localStorage.getItem("my_cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        setCart({});
      }
    }
  }, []);

  // Save to Storage
  useEffect(() => {
    localStorage.setItem("my_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    if (!item.id) return;
    setCart((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: {
          ...item,
          qty: existing ? existing.qty + 1 : 1,
        },
      };
    });
  };

  const increaseQty = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: { ...prev[id], qty: prev[id].qty + 1 },
      };
    });
  };

  const decreaseQty = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      if (prev[id].qty <= 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return {
        ...prev,
        [id]: { ...prev[id], qty: prev[id].qty - 1 },
      };
    });
  };


  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  const clearCart = () => setCart({});

  const cartCount = Object.values(cart).reduce((sum, item) => sum + (item.qty || 0), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        increaseQty, 
        decreaseQty, 
        removeFromCart, 
        clearCart, 
        cartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);