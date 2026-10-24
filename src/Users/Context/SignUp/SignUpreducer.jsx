export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGN_UP":
      return { ...state, user: action.userData };
    case "LOGOUT":
      return { ...state, user: null, cart: [] };
    case "ADD_TO_CART": {
      const item = action.item;
      const existing = state.cart.find((c) => c.id === item.id);
      const cart = existing
        ? state.cart.map((c) =>
            c.id === item.id
              ? { ...c, quantity: c.quantity + item.quantity }
              : c
          )
        : [...state.cart, item];
      return { ...state, cart };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== action.id) };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
