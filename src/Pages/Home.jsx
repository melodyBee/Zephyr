import React from "react";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  return (
    <>
      <section class="parallax-container">
        <h1 className="brand-font">Zephyr</h1>
        <p>Where your shopping desires meet limitless possibilities.</p>
      </section>
      <AboutUs />
      <section class="parallax-container parallax-container2">
        <p>Get anything you want from wherever you want on your doorsteps.</p>
      </section>
    </>
  );
}
