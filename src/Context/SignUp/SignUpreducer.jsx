export const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.userData };

    default:
      break;
  }
};
