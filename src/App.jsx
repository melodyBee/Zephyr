import "./app.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Page404 from "./Pages/Page404";
import NavigationBar from "./Components/Navigationbar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import Categories from "./Components/Categories";
import Categoriespage from "./Pages/categoriespage";
import Productscarousel from "./Components/Productscarousel";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <NavigationBar />

      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/Categories" element={<Categories />} />
          <Route
            path="/products/category/:categoryName"
            element={<Categoriespage />}
          />
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
