import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import { registerUser } from "../Context/SignUp/auth";

export default function SignUp() {
  const { dispatch } = useContext(GlobalContext);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    number: "",
  });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setBusy(true);
    try {
      const user = await registerUser(form);
      dispatch({ type: "SIGN_UP", userData: user });
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center p-3 p-md-5">
      <div className="p-4 p-md-5 rounded" style={{ width: "100%", maxWidth: 400 }}>
        <Form onSubmit={handleSubmit}>
          <h1 className="brand-font">SignUp</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3" controlId="signupUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={form.userName}
              onChange={set("userName")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={set("email")}
              required
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="At least 6 characters"
              value={form.password}
              onChange={set("password")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter number"
              value={form.number}
              onChange={set("number")}
            />
          </Form.Group>
          <Button variant="dark" type="submit" disabled={busy}>
            {busy ? "Creating account..." : "Sign Up"}
          </Button>
          <p className="mt-3 mb-0">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
