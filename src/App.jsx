import React, { useState } from "react";
import "./app.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Page404 from "./Pages/Page404";
import NavigationBar from "./Components/Navigationbar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/Products";
import AboutUs from "./Components/AboutUs";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <NavigationBar />

      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}
