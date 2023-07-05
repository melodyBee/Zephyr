import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row" data-aos="zoom-in">
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
                    <Card.Title>
                      {category.toUpperCase().replace("-", " ")}
                    </Card.Title>
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
