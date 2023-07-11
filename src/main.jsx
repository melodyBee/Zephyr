import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import SignUpContextProvider from "./Context/SignUp/SignUpcontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <SignUpContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </SignUpContextProvider>
);
