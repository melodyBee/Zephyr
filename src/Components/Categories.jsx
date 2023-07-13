import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Categories
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {categories.map((category, index) => (
            <Link
              key={index}
              className="catlink text-decoration-none"
              to={`/products/category/${category}`}
            >
              {category}
              <br />
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
