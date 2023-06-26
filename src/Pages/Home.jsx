import React from "react";
import AboutUs from "../Components/AboutUs";
import Categories from "../Components/Categories";
export default function Home() {
  return (
    <>
      <section class="parallax-container">
        <h1 className="brand-font">Zephyr</h1>
        <p className="brand-font">
          Where your shopping desires meet limitless possibilities.
        </p>
      </section>
      <div id="category-line"></div>
      <AboutUs />
      <section class="parallax-container parallax-container2">
        <p className="brand-font">
          <Categories />
        </p>
      </section>
    </>
  );
}
