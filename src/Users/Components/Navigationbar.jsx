import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import { useContext } from "react";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
// import Cart from "./Cart";
function Navigationbar() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    console.log("Contaxt data", state);
  }, [state]);

  return (
    <>
      {state.user ? (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Link className="brand-font navbar-brand" to="/">
              Zephyr
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link className="nav-link" onClick={handleShow}>
                  Categories
                </Link>
                <Offcanvas show={show} onHide={handleClose} placement="top">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Categories</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="container">
                      <div className="row">
                        {categories.map((category, index) => (
                          <div key={index}>
                            <Link
                              className="nav-link text-decoration-none"
                              to={`/products/category/${category}`}
                            >
                              {category}
                              <br />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
                {/* <Link className="nav-link" to="">
                  <Cart />
                </Link> */}
                <Link className="nav-link" to="/Profile">
                  <CgProfile size={25} />
                  <span className="ms2">{state.user?.userName}</span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Link className="brand-font navbar-brand" to="/">
              Zephyr
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="btn btn-light" to="/SignUp">
                  SignUp
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}
export default Navigationbar;
