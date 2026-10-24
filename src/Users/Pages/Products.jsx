import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import Loader from "../Components/loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://dummyjson.com/products", { signal: controller.signal })
      .then((json) => setProducts(json.data.products))
      .catch((err) => {
        if (!axios.isCancel(err)) setError("Could not load products. Please try again later.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="my-5">
        <h1 className="brand-font">Products</h1>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="row">
        {products.map((val) => (
          <div className="col-6 col-md-3 my-4" key={val.id}>
            <Link className="text-decoration-none" to={`/products/${val.id}`}>
              <Card>
                <Card.Img
                  variant="top"
                  className="img-fluid image-container"
                  src={val.thumbnail}
                  alt={val.title}
                  style={{ objectFit: "contain", width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title className="limithead brand-font">
                    {val.title}
                  </Card.Title>
                  <h6>${val.price}</h6>
                  <Card.Text>
                    {val.description.length > 40
                      ? val.description.slice(0, 40) + "..."
                      : val.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
