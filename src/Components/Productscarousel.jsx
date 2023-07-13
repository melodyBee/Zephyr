import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-stars";
export default function Productscarousel() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((json) => setProducts(json.data.products));
  }, [categoryName]);
  return (
    <>
      <div className="container mt-5 ">
        <Carousel interval={null} indicators={false}>
          {products.map((val, key) => (
            <Carousel.Item key={key}>
              <div
                className="container"
                style={{ color: "white", backgroundColor: "#272b30" }}
              >
                <Link
                  className="text-decoration-none"
                  to={`/products/${val.id}`}
                >
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
                      <div className="content col-12 col-md-6">
                        <Card.Body>
                          <Card.Text>
                            <h1
                              className="brand-font"
                              style={{ color: "white" }}
                            >
                              {val.title}
                            </h1>
                            <h4>{val.price}$</h4>
                            <h6 className="text-secondary">
                              Brand: {val.brand}
                            </h6>
                            <p className="text-secondary">{val.description}</p>
                            <ReactStars
                              className=""
                              count={5}
                              size={25}
                              edit={false}
                              value={val.rating}
                              color2={"#ffd700"}
                            />
                            <Button variant="light">Shop Now</Button>{" "}
                          </Card.Text>
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
    </>
  );
}
