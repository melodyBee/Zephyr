import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((json) => setProducts(json.data.products));
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className="brand-font">Products</h1>
      </div>
      <div className="row ">
        {products.map((val, key) => (
          <div className="col-md-3 my-4" key={key}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  className="img-fluid image-container"
                  src={val.thumbnail}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                  }}
                />
                <Card.Body style={{}}>
                  <Card.Title>
                    {val.title.length > 20
                      ? val.title.slice(0, 20) + "..."
                      : val.title}
                  </Card.Title>
                  <span className="badge bg-secondary">{val.price}</span>
                  <Card.Text>
                    {val.description.length > 40
                      ? val.description.slice(0, 40) + "..."
                      : val.description}
                  </Card.Text>
                  <Button className="btn btn-dark ">Shop Now</Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
