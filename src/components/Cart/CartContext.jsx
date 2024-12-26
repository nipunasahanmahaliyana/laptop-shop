// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "react-toastify"; // Import the toast function

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
        // Show alert after adding an item
       // Show toast after adding an item
    toast.success(`${product.name} added to cart!`, {
        position: "top-left", // Position of the toast
        autoClose: 2000, // Auto-close after 3 seconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Close the toast on click
        pauseOnHover: true, // Pause the toast on hover
      });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () =>{
    setCart([]);
    localStorage.removeItem("cartItems"); // Clear localStorage
  }

    // Load cart items from sessionStorage when the app loads
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cartItems"));
        if (savedCart) {
          setCart(savedCart);
        }
      }, []);

  // Save cart items to sessionStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
