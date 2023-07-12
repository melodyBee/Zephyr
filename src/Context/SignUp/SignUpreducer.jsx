export const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.data };

    default:
      state;
  }
};
