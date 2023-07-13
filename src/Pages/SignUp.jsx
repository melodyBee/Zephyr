import React, { useform_state, useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import signupimg from "../assets/undraw_shopping_app_flsj.svg";

function SignUp() {
  const Call = (form_state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return { ...form_state, userName: action.userData.userName };
      case "SET_EMAIL":
        return { ...form_state, email: action.userData.email };
      case "SET_PASSWORD":
        return { ...form_state, password: action.userData.password };
      case "SET_NUMBER":
        return { ...form_state, number: action.userData.number };
      default:
        return form_state;
    }
  };

  const dataobj = {
    userName: "",
    email: "",
    password: "",
    number: "",
  };

  const [form_state, formDispatch] = useReducer(Call, dataobj);
  const { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form_state);
    dispatch({ type: "SIGN_UP", userData: form_state });
  };

  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center p-5">
        <div className="p-5 rounded" style={{ width: "400px" }}>
          <Form onSubmit={handleSubmit}>
            <h1 className="brand-font">SignUp</h1>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  value={form_state.userName}
                  onChange={(e) =>
                    formDispatch({
                      type: "SET_USERNAME",
                      userData: {
                        userName: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={form_state.email}
                  onChange={(e) =>
                    formDispatch({
                      type: "SET_EMAIL",
                      userData: {
                        email: e.target.value,
                      },
                    })
                  }
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={form_state.password}
                  onChange={(e) =>
                    formDispatch({
                      type: "SET_PASSWORD",
                      userData: {
                        password: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter number"
                  value={form_state.number}
                  onChange={(e) =>
                    formDispatch({
                      type: "SET_NUMBER",
                      userData: {
                        number: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
            </div>
            <div className="mb-3">
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
