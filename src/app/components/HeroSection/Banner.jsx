"use client";
import { useEffect, useRef } from "react";
import colors from "@/app/utils/color";
import Image from "next/image";

const Banner = ({ slides }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let carouselInstance;

    // Bootstrap JS load hone ka wait karo, phir manually carousel start karo
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      if (carouselRef.current) {
        // console.log("carouselRef: ", carouselRef.current);

        carouselInstance = new bootstrap.Carousel(carouselRef.current, {
          interval: 3000, // auto-slide har 4 second
          ride: "carousel", // pehli slide ke baad khud chalta rahe
          wrap: true, // last slide ke baad wapas first pe aa jaye
        });
      }
    });

    // Cleanup — component unmount hone par carousel destroy karo (memory leak se bachne ke liye)
    return () => {
      if (carouselInstance) {
        carouselInstance.dispose();
      }
    };
  }, []);

  return (
    <section style={{ backgroundColor: colors.bannerbackgroundColor }}>
      <div
        id="bannerCarousel"
        ref={carouselRef} // ye ref hi manually initialize karne ke liye use hoga
        className="carousel slide"
        data-bs-interval="4000"
        // data-bs-ride="carousel" hata diya — ab manually JS se control ho raha hai
      >
        <div className="carousel-inner">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="container pt-4 pt-md-5 pb-0">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <h1 className="level-2 fw-bold text-capitalize">
                      {item.heading}
                    </h1>
                    <p className="text-lg">{item.description}</p>
                    <button
                      className="text-xs"
                      style={{
                        width: 180,
                        height: 50,
                        borderRadius: "25px",
                        backgroundColor: colors.black,
                        color: colors.white,
                        border: "none",
                      }}
                      type="button"
                    >
                      {item.btnText}
                    </button>
                    <br />
                    <br />
                    <div className="row">
                      <div className="col-4">
                        <h2 className="level-3 fw-bold">200+</h2>
                        <p className="text-lg">International Brands</p>
                      </div>
                      <div className="col-4">
                        <h2 className="level-3 fw-bold">500+</h2>
                        <p className="text-lg">High-Quality Products</p>
                      </div>
                      <div className="col-4">
                        <h2 className="level-3 fw-bold">800+</h2>
                        <p className="text-lg">Happy Customers</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                    <Image
                      src={item.image}
                      alt={`bannerImage-${index}`}
                      width={500}
                      height={500}
                      priority={index === 0}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </section>
  );
};

export default Banner;
