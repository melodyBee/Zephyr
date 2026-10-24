import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";
import { loginUser } from "../Context/SignUp/auth";

export default function Login() {
  const { dispatch } = useContext(GlobalContext);
  const [form, setForm] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const user = await loginUser(form);
      dispatch({ type: "LOGIN", userData: user });
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center p-3 p-md-5">
      <div className="p-4 p-md-5 rounded" style={{ width: "100%", maxWidth: 400 }}>
        <Form onSubmit={handleSubmit}>
          <h1 className="brand-font">Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3" controlId="loginUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={form.userName}
              onChange={set("userName")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={set("password")}
              required
            />
          </Form.Group>
          <Button variant="dark" type="submit" disabled={busy}>
            {busy ? "Logging in..." : "Login"}
          </Button>
          <p className="mt-3 mb-0">
            No account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
