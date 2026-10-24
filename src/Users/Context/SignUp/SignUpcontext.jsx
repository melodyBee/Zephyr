import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./SignUpreducer";

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const initialData = {
  user: read("user", null),
  cart: read("cart", []),
};

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    try {
      if (state.user) localStorage.setItem("user", JSON.stringify(state.user));
      else localStorage.removeItem("user");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } catch {
      /* storage unavailable (private mode) - app still works in memory */
    }
  }, [state.user, state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
