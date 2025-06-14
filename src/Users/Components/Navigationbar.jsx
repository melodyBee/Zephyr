import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import Home from "./Pages/Home"; 
import Products from "./Pages/Products";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

function Navigationbar() {
  const { state } = useContext(GlobalContext);

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
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
                <Link className="nav-link" to="/Profile">
                  <CgProfile size={25} />
                  <span className="ms-2">{state.user?.userName}</span>
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
