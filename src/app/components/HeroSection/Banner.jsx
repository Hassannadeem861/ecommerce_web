"use client";
import colors from "@/app/utils/color";
import Image from "next/image";
const Banner = ({ heading, description, btnText, image }) => {
  //   console.table([heading, description, btnText, image]);
  return (
    <section
      className="container-fluid"
      style={{ backgroundColor: colors.bannerbackgroundColor }}
    >
      <div className="container pt-md-5 pb-md-0">
        <div className="row">
          <div className="col-6">
            <h1 className="level-2 fw-bold text-capitalize">{heading}</h1>
            <p className="text-lg">{description}</p>
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
              type="btn"
            >
              {btnText}
            </button>
            <br />
            <br />
            <div className="row">
              <div className="col-4">
                <h1 className="level-3 fw-bold">200+</h1>
                <p className="text-lg">International Brands</p>
              </div>
              <div className="col-4">
                <h1 className="level-3 fw-bold">500+</h1>
                <p className="text-lg">High-Quality Products</p>
              </div>
              <div className="col-4">
                <h1 className="level-3 fw-bold">800+</h1>
                <p className="text-lg">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image
              src={image}
              alt="bannerImage"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
