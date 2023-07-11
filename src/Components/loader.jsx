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
      <div
        className="Loader"
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#272b30",
          color: "white",
        }}
      >
        <div
          className="d-flex justify-content-center align-item-center brand-font"
          style={{ fontSize: "30vh" }}
        >
          Zephyr
        </div>
      </div>
    </>
  );
}
