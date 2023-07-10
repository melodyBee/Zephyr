import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);
  const categoryImages = [
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/21/thumbnail.png",
    "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/35/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/45/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/50/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/65/thumbnail.webp",
    "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/80/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/85/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/90/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/95/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/98/thumbnail.jpg",
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="my-5">
          <h1 className="brand-font">Categories</h1>
        </div>
        <div className="bd row ">
          {categories.map((category, index) => (
            <div className="col-md-3 my-3" key={index}>
              <Link
                className="text-decoration-none"
                to={`/products/category/${category}`}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={categoryImages[index % categoryImages.length]}
                    alt={`Category ${index + 1}`}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />

                  <Card.Body>
                    <Card.Title>{category}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
