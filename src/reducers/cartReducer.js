export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartItem: payload.product };
    case "REMOVE_FROM_CART":
      return { ...state, cartItem: payload.product };
    case "UPDATE_TOTAL":
      return { ...state, totalPrice: payload.total };
    default:
      throw new Error("No action performed.");
  }
};
