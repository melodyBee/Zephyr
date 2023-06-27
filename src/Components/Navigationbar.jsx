import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Categories from "./Categories";
import { Button } from "react-bootstrap";

function Navigationbar() {
  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Link className="brand-font navbar-brand" to="/">
          Zephyr
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button className="btn btn-dark" id="categories-dropdown">
              Categories
            </Button>
            {/* <div className="dropdown">
                <span class="hover">
                  <Categories />
                </span>
              </div> */}
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Products">
              Products
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="btn btn-light" to="SignUp">
              SignUp
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
