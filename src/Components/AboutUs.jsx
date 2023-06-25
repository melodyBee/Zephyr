import React from "react";
import image from "../assets/AboutUs.svg";

export default function AboutUs() {
  return (
    <>
      <section className="buffer">
        <div className="Outerportion px-2 py-10">
          <div className="aboutus d-flex flex-wrap">
            <div className="image flex-grow-1 flex-shrink-1 flex-basis-50 mr-3">
              <img className="img img-fluid" src={image} alt="team image" />
            </div>
            <div className="contents flex-grow-1 flex-shrink-1 flex-basis-50">
              <h1 className="font-size-36 mb-4 brand-font">About Us</h1>
              <p className="font-size-18 mb-0">
                We are a team of passionate people dedicated to providing the
                best service to our clients. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed et est vel quam molestie
                bibendum at vitae lorem. Phasellus ac purus in nisl sagittis
                consectetur non non magna. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dicta, excepturi repellat itaque
                reprehenderit nihil in tenetur reiciendis iure fuga atque
                incidunt voluptatem eveniet voluptatibus architecto dolor,
                tempore qui dolorum similique? Maxime tenetur voluptate quos
                impedit qui sit cum officiis reprehenderit dicta nemo nobis fuga
                ipsam ea, esse accusamus iste perspiciatis. Laudantium rerum,
                maxime iusto beatae dignissimos quibusdam vero nostrum soluta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
