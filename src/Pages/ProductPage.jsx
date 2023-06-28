import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";
import Swal from "sweetalert2";
import ImageSection from "../Components/ImageSection";

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setproduct] = useState({});
  const [review, setReview] = useState("");
  const [ratingstar, setratingStar] = useState(0);
  const [productQuantity, setproductQuantity] = useState(1);

  const ratingChanged = (newRating) => {
    setratingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar,
    };
    console.log(payload);

    Swal.fire({
      title: "Successfully Submitted!",
      text: "Thanks for reviewing our product",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });

    setReview("");
    setratingStar(0);
  };

  const addToCart = () => {
    const payload = {
      ...product,
      productQuantity,
      totalPrice: product.price * productQuantity,
    };

    console.log(payload);

    Swal.fire({
      title: "Added to Cart!",
      text: "Check your Cart for Check Out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setproduct(json.data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
}
