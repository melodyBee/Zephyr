import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./SignUpreducer";
export const GlobalContext = createContext("Initial Value");

export default function LoginContextProvider({ children }) {
  const data = { userName: undefined };

  const [state, dispatch] = useReducer(reducer, data);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
