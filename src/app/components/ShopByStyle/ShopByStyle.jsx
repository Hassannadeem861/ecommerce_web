import colors from "@/app/utils/color";
import React from "react";
import Image from "next/image";
const ShopByStyle = ({ heading, images }) => {
    console.log(images)
  return (
    <section
      className="container mt-4 mt-md-5 mb-md-5"
      style={{ backgroundColor: colors.whitesmoke }}
    >
      <h2 className="text-center level-2 fw-bold">{heading}</h2>
      <div className="row">
        <div>
          <Image src={images} alt={heading} width={1200} height={600} style={{ objectFit: "contain", padding: "16px" }}/>
        </div>
      </div>
    </section>
  );
};

export default ShopByStyle;
