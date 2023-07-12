import React, { useEffect, useState } from "react";
import Aboutus from "./AboutUs";
import image2 from "../assets/undraw_relaxing_at_home_re_mror.svg";
import image3 from "../assets/undraw_shopping_bags_nif5.svg";
import image4 from "../assets/undraw_growing_re_olpi.svg";
import image5 from "../assets/undraw_for_review_eqxk.svg";
import image6 from "../assets/undraw_safe_re_kiil.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Productscarousel from "./Productscarousel";
import Loader from "./loader";

export default function Parallax() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);

    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ color: "white", backgroundColor: "#272b30" }}>
          <section className="parallax-container">
            <h1 className="brand-font" data-aos="fade-up">
              Zephyr
            </h1>
            <p className="brand-font" data-aos="fade-up">
              Where your shopping desires meet limitless possibilities.
            </p>
          </section>
          <Productscarousel />
          <Aboutus />
          <section
            className="d-flex justify-content-center "
            id="why?"
            data-aos="fade-up"
          >
            <h1 className="brand-font ">Why Zephyr is helpful?</h1>
          </section>
          <section className="buffer">
            <div className="Outerportion py-5 container">
              <div className="row align-items-center">
                <div className="contents col-12 col-md-6">
                  <h1
                    className="font-size-36 mb-4 brand-font"
                    data-aos="fade-right"
                  >
                    Convienience
                  </h1>
                  <p className="font-size-18 mb-0" data-aos="fade-right">
                    1. Shop anytime, anywhere, 24/7. <br />
                    2. Hassle-free online shopping experience.
                    <br />
                    3. No need to visit physical stores. <br />
                    4.Time-saving and convenient browsing. <br />
                    5. Flexibility to shop at own.
                    <br />
                  </p>
                </div>
                <div className="image imagecontainer-2 col-12 col-md-6 mr-3">
                  <img
                    className="col-12  mr-3"
                    src={image2}
                    alt="about us image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="buffer">
            <div className="Outerportion py-5 container">
              <div className="row align-items-start">
                <div className="image imagecontainer-3 col-6 mr-3">
                  <img
                    className="col-12  mr-3"
                    src={image3}
                    alt="about us image"
                  />
                </div>
                <div className="contents col-12 col-md-6">
                  <h1
                    className="font-size-36 mb-4 brand-font"
                    data-aos="fade-left"
                  >
                    Extensive Product Selection:
                  </h1>
                  <p className="font-size-18 mb-0" data-aos="fade-left">
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
                <div className="image imagecontainer-3 col-12 col-md-6 mr-3"></div>
              </div>
            </div>
          </section>
          <section className="buffer">
            <div className="Outerportion py-5 container">
              <div className="row align-items-start">
                <div className="contents col-12 col-md-6">
                  <h1
                    className="font-size-36 mb-4 brand-font"
                    data-aos="fade-right"
                  >
                    Competitive Pricing:
                  </h1>
                  <p className="font-size-18 mb-0" data-aos="fade-right">
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
                <div className="image imagecontainer-4 col-12 col-md-6 mr-3">
                  <img
                    className="col-12  mr-3 img img-fluid"
                    src={image4}
                    alt="about us image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="buffer">
            <div className="Outerportion py-5 container">
              <div className="row align-items-start">
                <div className="image imagecontainer-5 col-12 col-md-6 mr-3">
                  <img
                    className="col-11 mt-0 mr-3"
                    src={image5}
                    alt="about us image"
                  />
                </div>

                <div className="contents col-12 col-md-6">
                  <h1
                    className="font-size-36 mb-4 brand-font"
                    data-aos="fade-left"
                  >
                    Customer Reviews and Ratings:
                  </h1>
                  <p className="font-size-18 mb-0" data-aos="fade-left">
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
              </div>
            </div>
          </section>
          <section className="buffer">
            <div className="Outerportion py-5 container">
              <div className="row align-items-start">
                <div className="contents col-12 col-md-6">
                  <h1
                    className="font-size-36 mb-4 brand-font"
                    data-aos="fade-right"
                  >
                    Secure and Convenient Payment Options:
                  </h1>
                  <p className="font-size-18 mb-0" data-aos="fade-right">
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
                <div className="image imagecontainer-6 col-12 col-md-6 mr-3">
                  <img
                    className="col-12  mr-3"
                    src={image6}
                    alt="about us image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
