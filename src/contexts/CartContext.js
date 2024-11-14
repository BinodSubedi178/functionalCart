import { useContext, useReducer, createContext } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initValue = {
  cartItem: [],
  totalPrice: 0,
};

const CartContext = createContext(initValue);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initValue);

  const handleAddToCart = (product) => {
    const updatedCart = state.cartItem.concat(product);
    updateTotal(updatedCart);
    dispatch({ type: "ADD_TO_CART", payload: { product: updatedCart } });
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = state.cartItem.filter((item) => product.id !== item.id);
    updateTotal(updatedCart);
    dispatch({ type: "REMOVE_FROM_CART", payload: { product: updatedCart } });
  };

  const updateTotal = (product) => {
    let total = 0;
    product.forEach((product) => (total = total + product.price));
    dispatch({ type: "UPDATE_TOTAL", payload: { total: total } });
  };
  const value = {
    cartItem: state.cartItem,
    totalPrice: state.totalPrice,
    handleRemoveFromCart,
    handleAddToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const data = useContext(CartContext);
  return data;
};
