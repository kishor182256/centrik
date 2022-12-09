const INITIALSTATE = {
  carts: [],
};

export const cartreducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SORT_BY_PRICE":
      console.log("SORT_BY_PRICE--->SORT_BY_PRICE", action.payload);
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
