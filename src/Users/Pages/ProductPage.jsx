import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Stars from "../Components/Stars";
import Loader from "../Components/loader";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";

export default function ProductPage() {
  const { productID } = useParams();
  const { dispatch } = useContext(GlobalContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setQuantity(1);
    axios
      .get(`https://dummyjson.com/products/${productID}`, {
        signal: controller.signal,
      })
      .then((json) => setProduct(json.data))
      .catch((err) => {
        if (!axios.isCancel(err)) setError("Could not load this product.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [productID]);

  const submitReview = () => {
    if (!ratingStar && !review.trim()) {
      Swal.fire({ title: "Add a rating or comment first", icon: "info" });
      return;
    }
    // Demo only: reviews are not saved anywhere (no backend).
    Swal.fire({
      title: "Successfully Submitted!",
      text: "Thanks for reviewing our product",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
    setReview("");
    setRatingStar(0);
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity,
      },
    });
    Swal.fire({
      title: "Added to Cart!",
      text: "Open your Cart from the top bar to check out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  if (loading) return <Loader />;
  if (error || !product)
    return (
      <div className="container mt-5">
        <Alert variant="danger">{error || "Product not found."}</Alert>
      </div>
    );

  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <Carousel>
            {images.map((val, key) => (
              <Carousel.Item key={key}>
                <img
                  src={val}
                  alt={`${product.title} ${key + 1}`}
                  style={{ objectFit: "contain", width: "100%", height: "45vh" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-12 col-md-6">
          <h1 className="brand-font">{product.title}</h1>
          <h4>${product.price}</h4>
          <h6 className="text-secondary">Brand: {product.brand || "N/A"}</h6>
          <p className="text-secondary">{product.description}</p>
          <Stars value={product.rating} size={25} />
          <div className="my-3 d-flex align-items-center">
            <Button
              variant="dark"
              disabled={quantity <= 1}
              onClick={() => setQuantity((q) => q - 1)}
            >
              -
            </Button>
            <span className="mx-3">{quantity}</span>
            <Button
              variant="dark"
              disabled={product.stock !== undefined && quantity >= product.stock}
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </Button>
          </div>
          <Button variant="outline-dark" onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="row mt-5">
        <h2 className="brand-font">Review Us</h2>
        <div className="col-12 col-md-6">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <Button className="my-3" variant="dark" onClick={submitReview}>
            Submit review
          </Button>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center">
            <Stars value={ratingStar} size={24} edit onChange={setRatingStar} />
            <span className="ms-3">({ratingStar})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
