import React, { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center p-5">
      <div className="p-5 rounded" style={{ width: "400px" }}>
        <form onSubmit={handleSubmit}>
          <h3 style={{ color: "#001A33" }}>LOGIN IN</h3>
          <div className="mb-3">
            <label htmlFor="email" style={{ color: "#001A33" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              name=""
              id="checkbox"
            />
            <label htmlFor="checkbox" className="custom-input-label">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-dark" type="submit">
              Sign In
            </button>
          </div>
          <p>
            Forgot <a href="">Password?</a> <br />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
