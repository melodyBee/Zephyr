import React from "react";
import Aboutus from "./AboutUs";
import Categories from "./Categories";
export default function Parallax() {
  return (
    <>
      <section className="parallax-container">
        <h1 className="brand-font">Zephyr</h1>
        <p className="brand-font">
          Where your shopping desires meet limitless possibilities.
        </p>
      </section>
      <div id="category-line"></div>
      <Aboutus />
      <section className="d-flex justify-content-center" id="why?">
        <h1>Why Zephyr is helpful?</h1>
      </section>
      <section className="buffer">
        <div className="Outerportion py-5 container">
          <div className="row align-items-start">
            <div className="contents col-6">
              <h1 className="font-size-36 mb-4 brand-font">Convienience</h1>
              <p className="font-size-18 mb-0">
                1. Shop anytime, anywhere, 24/7. <br />
                2. Hassle-free online shopping experience.
                <br />
                3. No need to visit physical stores. <br />
                4.Time-saving and convenient browsing. <br />
                5. Flexibility to shop at own.
                <br />
              </p>
            </div>
            <div className="image imagecontainer-2 col-6 mr-3"></div>
          </div>
        </div>
      </section>
      <section className="buffer">
        <div className="Outerportion py-5 container">
          <div className="row align-items-start">
            <div className="contents col-6">
              <h1 className="font-size-36 mb-4 brand-font">
                Extensive Product Selection:
              </h1>
              <p className="font-size-18 mb-0">
                1. Wide range of products available.
                <br />
                2. Diverse selection to suit preferences.
                <br />
                3. Access to niche or specialty items.
                <br />
                4. Multiple brands and options to explore.
                <br />
                5. One-stop-shop for various needs.
                <br />
              </p>
            </div>
            <div className="image imagecontainer-3 col-6 mr-3"></div>
          </div>
        </div>
      </section>
      <section className="buffer">
        <div className="Outerportion py-5 container">
          <div className="row align-items-start">
            <div className="contents col-6">
              <h1 className="font-size-36 mb-4 brand-font">
                Competitive Pricing:
              </h1>
              <p className="font-size-18 mb-0">
                1. Affordable prices, great value.
                <br />
                2. Discounts, deals, and promotional offers.
                <br />
                3. Price comparisons for informed decisions.
                <br />
                4. Cost savings compared to traditional shopping.
                <br />
                5. Access to exclusive online discounts.
                <br />
              </p>
            </div>
            <div className="image imagecontainer-4 col-6 mr-3"></div>
          </div>
        </div>
      </section>
      <section className="buffer">
        <div className="Outerportion py-5 container">
          <div className="row align-items-start">
            <div className="contents col-6">
              <h1 className="font-size-36 mb-4 brand-font">
                Customer Reviews and Ratings:
              </h1>
              <p className="font-size-18 mb-0">
                1. Insights from real customer experiences.
                <br />
                2. Authentic feedback for better decision-making.
                <br />
                3. Trustworthy recommendations from fellow shoppers.
                <br />
                4. Assess product quality and reliability.
                <br />
                5. Evaluate seller credibility and customer satisfaction.
              </p>
            </div>
            <div className="image imagecontainer-5 col-6 mr-3"></div>
          </div>
        </div>
      </section>
      <section className="buffer">
        <div className="Outerportion py-5 container">
          <div className="row align-items-start">
            <div className="contents col-6">
              <h1 className="font-size-36 mb-4 brand-font">
                Secure and Convenient Payment Options:
              </h1>
              <p className="font-size-18 mb-0">
                1. Safe and encrypted online transactions.
                <br />
                2. Multiple payment methods to choose from.
                <br />
                3. Fast and secure checkout process.
                <br />
                4. Convenience of saving payment details.
                <br />
                5. Protection against fraud and unauthorized transactions.
              </p>
            </div>
            <div className="image imagecontainer-6 col-6 mr-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}
