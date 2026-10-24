import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import Loader from "../Components/loader";

export default function CategoriesPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    axios
      .get(
        `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}`,
        { signal: controller.signal }
      )
      .then((json) => setProducts(json.data.products))
      .catch((err) => {
        if (!axios.isCancel(err)) setError("Could not load this category.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [categoryName]);

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="my-5 brand-font">
        <h1>{categoryName}</h1>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && products.length === 0 && <p>No products in this category.</p>}
      <div className="row">
        {products.map((val) => (
          <div className="col-6 col-md-3 my-4" key={val.id}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  src={val.thumbnail}
                  alt={val.title}
                  style={{ objectFit: "cover", width: "100%", height: "20vh" }}
                />
                <Card.Body>
                  <Card.Title className="brand-font limithead">
                    {val.title}
                  </Card.Title>
                  <div className="price">${val.price}</div>
                  <Card.Text className="limitize">{val.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
