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
      <Button variant="nav-link" onClick={handleShow} className="me-2">
        Categories
      </Button>
      <Offcanvas
        data-bs-theme="dark"
        show={show}
        onHide={handleClose}
        placement="top"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="container">
          <Offcanvas.Body>
            <div className="row">
              {categories.map((category, index) => (
                <div className="col-md-3">
                  <Link
                    key={index}
                    className="nav-link text-decoration-none"
                    to={`/products/category/${category}`}
                  >
                    {category}
                    <br />
                  </Link>
                </div>
              ))}
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}
