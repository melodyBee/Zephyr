import "./newApp.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Products from "./Users/Pages/Products";
import Login from "./Users/Pages/Login";
import Signup from "./Users/Pages/SignUp";
import Page404 from "./Users/Pages/Page404";
import NavigationBar from "./Users/Components/Navigationbar";
import Footer from "./Footer";
import ProductPage from "./Users/Pages/ProductPage";
import Categoriespage from "./Users/Pages/Subcategories";
import Profile from "./Users/Components/Profile";
import { useContext } from "react";
import { GlobalContext } from "./Users/Context/SignUp/SignUpcontext";

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
