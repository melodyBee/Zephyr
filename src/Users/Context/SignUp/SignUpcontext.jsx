import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./SignUpreducer";
import { redirect } from "react-router-dom";

const getUserData = () => {
  let userData = localStorage.getItem("user");
  console.log(userData);
  if (!userData) {
    // we need
    return userData;
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
