import React, { useState,createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const incCart=(val)=>{

    setCart(cart+val)

  }

  return <CartContext.Provider value={{incCart,cart}} >{children}</CartContext.Provider>;
};
