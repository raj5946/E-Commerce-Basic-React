import { React, createContext, useContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const [{ cart }, cartDispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
