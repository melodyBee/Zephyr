import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Stars from "./Stars";

export default function Productscarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((json) => setProducts(json.data.products));
  }, []);

  return (
    <div className="container mt-5">
      <Carousel interval={null} indicators={false}>
        {products.map((val, index) => (
          <Carousel.Item key={index}>
            <div
              className="container"
              style={{ color: "white", backgroundColor: "#272b30" }}
            >
              <Link className="text-decoration-none" to={`/products/${val.id}`}>
                <Card
                  style={{
                    color: "white",
                    backgroundColor: "#272b30",
                    border: "none",
                  }}
                >
                  <div className="row mt-5">
                    <div className="col-12 col-md-6">
                      <Card.Img
                        alt={val.title}
                        variant="top"
                        className="thumb img-fluid image-container"
                        src={val.thumbnail}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "200px",
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <Card.Body>
                        <div>
                          <h1 className="brand-font" style={{ color: "white" }}>
                            {val.title}
                          </h1>
                          <h4>{val.price}$</h4>
                          <h6 className="text-secondary">Brand: {val.brand}</h6>
                          <p className="text-secondary">{val.description}</p>
                          <Stars value={parseFloat(val.rating)} size={25} />
                          <div className="mt-2">
                            <Button variant="light">Shop Now</Button>
                          </div>
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
