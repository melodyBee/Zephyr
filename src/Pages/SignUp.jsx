import React, { useform_state, useEffect, useReducer } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/SignUp/SignUpcontext";

function SignUp() {
  const dataobj = {
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
  };

  const call = (form_state, action) => {
    switch (action.type) {
      case "NAME":
        return { ...form_state, name: action.name };
      case "EMAIL":
        return { ...form_state, email: action.email };
      case "PASSWORD":
        return { ...form_state, password: action.password };
      case "NUMBER":
        return { ...form_state, phoneNumber: action.phoneNumber };

      default:
        break;
    }
  };
  const [form_state, form_dispatch] = useReducer(call, dataobj);
  const { state, dispatch } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form_state);

    dispatch({
      type: "SIGN_UP",
      userData: form_state,
    });
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="signup-form-wrapper">
            <form className="p-5" onSubmit={handleSubmit}>
              <h3 className="brand-font" style={{ color: "#001A33" }}>
                SIGN UP
              </h3>
              <div className="mb-3">
                <label htmlFor="name" style={{ color: "#001A33" }}>
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Enter User Name"
                  className="form-control"
                  value={form_state.name}
                  onChange={(e) =>
                    form_dispatch({
                      type: "NAME",
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" style={{ color: "#001A33" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={form_state.email}
                  onChange={(e) =>
                    form_dispatch({
                      type: "EMAIL",
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={form_state.password}
                  onChange={(e) =>
                    form_dispatch({
                      type: "PASSWORD",
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="form-control"
                  value={form_state.phoneNumber}
                  onChange={(e) =>
                    form_dispatch({
                      type: "NUMBER",
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <button className="btn btn-dark" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-8 img img-fluid">
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-website-3613833-3025953.png"
              alt="Sign Up Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
