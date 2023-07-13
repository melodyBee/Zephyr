import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";

export default function Profile() {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <>
      <div className="m-5 p-5">
        <h1 className="d-flex justify-content-center align-item-center">
          Profile
        </h1>
        <div className="m-5 p-5 d-flex justify-content-center align-item-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{state.user?.userName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {state.user?.email}
              </Card.Subtitle>
              <Card.Text>{state.user?.number}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
