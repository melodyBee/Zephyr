import { useReducer } from "react";
import { createContext } from "react";
import React from "react";
import { reducer } from "./SignUpreducer";
export const GlobalContext = createContext("Initial Value");

export default function ContextProvider({ children }) {
  const data = {
    user: undefined,
  };

  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
