import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import Cart from "./Cart";

export default function Navigationbar() {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Link className="brand-font navbar-brand" to="/">
          Zephyr
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {state.user ? (
              <>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
                <Cart />
                <Link className="nav-link" to="/profile">
                  <CgProfile size={25} />
                  <span className="ms-2">{state.user.userName}</span>
                </Link>
                <Button variant="outline-light" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="btn btn-light" to="/signup">
                  SignUp
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
