import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer
        className="bd-footer py-4 py-md-5 bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <Link
                to="/"
                className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                aria-label="Zephyr"
              >
                                <span className="fs-2 brand-font">Zephyr</span>
              </Link>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Designed and built with all the love in the world by the
                  Zephyr team.
                </li>

                <li className="mb-2"> &#169; All rights reserved</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/products">Products</Link>
                </li>
                <li className="mb-2">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://github.com/melodyBee/GlamTrove" target="_blank" rel="noreferrer">
                    GlamTrove
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>LinkedIn</h5>
              <ul className="list-unstyled">

                <li className="mb-2">
                  <a href="https://www.linkedin.com/in/abeera-fatima/" target="_blank" rel="noreferrer">
                    Abeera Fatima
                  </a>
                </li>

                <li className="mb-2">
                  <a href="https://www.linkedin.com/in/aimahkh/" target="_blank" rel="noreferrer">
                    Aima Khan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
