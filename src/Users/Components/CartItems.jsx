import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function CartItems(data) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.thumbnail} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
