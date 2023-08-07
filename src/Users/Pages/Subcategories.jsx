import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Loader from "../Components/loader";

export default function categoriesPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => setTimeout(() => setProducts(json.data.products), 200));
  }, [categoryName]);

  return (
    <>
      {products.length > 0 ? (
        <div className="container">
          <div className="my-5 brand-font">
            <h1>{categoryName}</h1>
          </div>

          <div className="row">
            {products.map((val, key) => (
              <div className="col-md-3 my-4" key={key}>
                <Link
                  className="text-decoration-none"
                  to={`/products/${val.id}`}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={val.thumbnail}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "20vh",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="brand-font limithead">
                        {val.title}
                      </Card.Title>
                      <div className="price">{val.price}$</div>
                      <Card.Text className="limitize">
                        {val.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
