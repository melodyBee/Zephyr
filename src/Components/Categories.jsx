import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className="brand-font">Categories</h1>
      </div>

      <div className="row">
        {categories.map((val, key) => (
          <div className="col-md-4 my-3" key={key}>
            <Link
              className="text-decoration-none"
              to={`/products/category/${val}`}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{val}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}