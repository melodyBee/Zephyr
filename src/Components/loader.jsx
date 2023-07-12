import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Loader() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="Loader">
        <div data-aos="fade-up">
          <h1 className="brand-font">Zephyr</h1>
          <p className="brand-font">
            Where your shopping desires meet limitless possibilities.
          </p>
        </div>
      </div>
      {/* <div
        className="Loader"
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#272b30",
          color: "white",
        }}
      >
        <div className="d-flex justify-content-center align-item-center brand-font">
          <div className="m-md-5 p-md-5">
            <h1
              className="m-md-5 p-md-5"
              style={{ height: "40vh", fontSize: "10vh" }}
            >
              Zephyr
            </h1>
            <p className="">
              where your shopping desires meet limitless possibilities
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
