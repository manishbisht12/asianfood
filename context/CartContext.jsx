
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
    if (!item._id) return;
    setCart((prev) => {
      const existing = prev[item._id];
      return {
        ...prev,
        [item._id]: {
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