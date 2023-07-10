import React, { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function Login() {
  const dataobj = {
    name: "",
    password: "",
  };

  const call = (state, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.name };
      case "PASSWORD":
        return { ...state, password: action.password };
      case "DATASUB":
        return { ...state, password: action.password };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(call, dataobj);

  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center p-5">
        <div className="p-5 rounded" style={{ width: "400px" }}>
          <Form>
            <h1 className="brand-font">Login</h1>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={state.name}
                  onChange={(e) =>
                    dispatch({
                      type: "NAME",
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: "PASSWORD",
                      password: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button
              variant="dark"
              onClick={() =>
                dispatch({
                  type: "DATASUB",
                })
              }
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
