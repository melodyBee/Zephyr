import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./SignUpreducer";

const getUserData = () => {
  let userData = localStorage.getItem("user");
  if (userData === "undefined") {
    // Compare with the string "undefined"
    return {};
  } else {
    return JSON.parse(userData);
  }
};

const initialData = {
  user: getUserData(),
};

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    console.log("I'm running");
  }, [state.user]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
