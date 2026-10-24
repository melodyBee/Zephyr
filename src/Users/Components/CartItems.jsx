import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CartItems({ data, onRemove }) {
  return (
    <Card className="mb-3">
      <Card.Img
        variant="top"
        src={data.thumbnail}
        alt={data.title}
        style={{ height: 140, objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          ${data.price} x {data.quantity} = $
          {(data.price * data.quantity).toFixed(2)}
        </Card.Text>
        <Button variant="danger" size="sm" onClick={onRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}
