import "./newApp.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Page404 from "./Pages/Page404";
import NavigationBar from "./Components/Navigationbar";
import Footer from "../Footer";
import ProductPage from "./Pages/ProductPage";
import Categoriespage from "./Pages/Subcategories";
import Profile from "./Components/Profile";
import { useContext } from "react";
import { GlobalContext } from "./Context/SignUp/SignUpcontext";

export default function App() {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <>
      <NavigationBar />

      {state.user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/products/category/:categoryName"
            element={<Categoriespage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}
