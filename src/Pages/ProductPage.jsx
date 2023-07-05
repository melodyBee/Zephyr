import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-stars";
import Swal from "sweetalert2";
import Carousel from "react-bootstrap/Carousel";

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
      <div></div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Carousel>
              {product?.images?.map((val, key) => (
                <Carousel.Item key={key}>
                  <img
                    src={val}
                    alt={`Product Image ${key}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "45vh",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-6">
            <h1>{product.title} -</h1>
            <h5>{product.price}$</h5>
            <p className="text-secondary">{product.description}</p>
            <ReactStars
              className=""
              count={5}
              size={25}
              edit={false}
              value={product.rating}
              color2={"#ffd700"}
            />
            <button
              className="btn btn-dark mx-3"
              disabled={productQuantity > 1 ? false : true}
              onClick={() => setproductQuantity(productQuantity - 1)}
            >
              -
            </button>
            {productQuantity}
            <button
              className="btn btn-dark mx-3"
              onClick={() => setproductQuantity(productQuantity + 1)}
            >
              +
            </button>
            <button className="btn btn-dark" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="row">
          <h2 className="brand-font">Reviews Us</h2>
          <div className="col-6">
            {" "}
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <button className="my-3 btn btn-dark" onClick={submitReview}>
              Submit review
            </button>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <ReactStars
                count={5}
                size={24}
                value={ratingstar}
                onChange={ratingChanged}
                color2={"#ffd700"}
              />
              <span className="ms-3">({ratingstar})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
