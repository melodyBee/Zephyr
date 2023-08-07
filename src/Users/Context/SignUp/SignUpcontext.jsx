import React from "react";
import { useReducer, createContext, useEffect } from "react";
import { reducer } from "./SignUpreducer";

const getUserData = () => {
  let userData = localStorage.getItem("user");
  if (userData == {}) {
    return {};
  } else {
    return JSON.parse(userData);
  }
};
const initialData = {
  user: getUserData(),
};

export const GlobalContext = createContext("Initial Value");
export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.cart));
    console.log("I am running");
  }, [state.user]);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
