import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  return (
    <>
      <section class="parallax-container">
        <h1 className="brand-font">Zephyr</h1>
        <p>Where your shopping desires meet limitless possibilities.</p>
      </section>
      <AboutUs />
      <section class="parallax-container parallax-container2"></section>
    </>
  );
}
