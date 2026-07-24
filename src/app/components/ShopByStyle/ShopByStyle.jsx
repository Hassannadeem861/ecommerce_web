"use client";
import Image from "next/image";
import colors from "@/app/utils/color";

const ShopByStyle = ({ heading, images }) => {
  return (
    <section className="my-4 my-md-5">
      <div className="container">
        <div
          className="p-3 p-md-4 p-lg-4"
          style={{ backgroundColor: colors.whitesmoke, borderRadius: "24px" }}
        >
          {/* ---- Heading ---- */}
          <h2 className="level-3 fw-bold text-center mb-4" style={{ color: colors.black }}>
            {heading}
          </h2>

          {/* ---- Row 1: image 1 (small) + image 2 (large) ---- */}
          <div className="row g-3 g-md-4 mb-3 mb-md-4 p-md-4 p-lg-4">
            <div className="col-12 col-md-5">
              <div style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <Image unoptimized src={images[0]} alt="dress style" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <Image unoptimized src={images[1]} alt="dress style" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>

          {/* ---- Row 2: image 3 (large) + image 4 (small) ---- */}
          <div className="row g-3 g-md-4">
            <div className="col-12 col-md-7">
              <div style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <Image unoptimized src={images[2]} alt="dress style" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
                <Image unoptimized src={images[3]} alt="dress style" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByStyle;