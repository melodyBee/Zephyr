import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import { useEffect } from "react";
import { useContext } from "react";
function Navigationbar() {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    console.log("Contaxt data", state);
  }, [state]);

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Link className="brand-font navbar-brand" to="/">
          Zephyr
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/Categories">
              Categories
            </Link>
            <Link className="nav-link" to="/Products">
              Products
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="btn btn-light" to="/SignUp">
              SignUp
            </Link>
            <Link className="nav-link" to="/Profile">
              <CgProfile size={28} />
              <span className="ms2">User</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
