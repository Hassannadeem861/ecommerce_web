"use client";
import colors from "@/app/utils/color";
import React, { useState } from "react";
import Image from "next/image";

const ProductDetailInfo = ({ product }) => {
  let fullStars = Math.floor(product.rating);
  let hasHalfStar = product.rating % 1 !== 0;
  let emptyStars = product.maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
  const productImages = product.images?.length
    ? product.images
    : [
        "/assests/home/NewArrivalsProducts/image1.png",
        "/assests/home/NewArrivalsProducts/image2.png",
        "/assests/home/NewArrivalsProducts/image3.png",
      ];

  const [selectedImages, setSelectedImages] = useState(productImages[0]);
  const [selectedColors, setSelectedColors] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <hr />
      <section className="mt-3 mt-md-5">
        {/* Breadcrumb - Responsive */}
        <div className="d-flex gap-1 gap-sm-2 flex-wrap">
          <div className="fw-bold" style={{ cursor: "pointer", color: colors.textColor, fontSize: "clamp(12px, 2vw, 16px)" }}>
            Home
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right fw-bold" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
          <div className="fw-bold" style={{ cursor: "pointer", color: colors.textColor, fontSize: "clamp(12px, 2vw, 16px)" }}>
            Shop
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right fw-bold" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
          <div className="fw-bold" style={{ cursor: "pointer", color: colors.textColor, fontSize: "clamp(12px, 2vw, 16px)" }}>
            Men
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16 fw-bold">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
          <div className="fw-bold" style={{ cursor: "pointer", color: colors.black, fontSize: "clamp(12px, 2vw, 16px)" }}>
            T-shirt
          </div>
        </div>

        {/* Main Product Layout - Fully Responsive */}
        <div className="row pt-3 pt-md-4">
          
          {/* Thumbnails - Responsive layout */}
          <div className="col-12 col-md-2 order-md-1 mb-3 mb-md-0">
            <div className="d-flex flex-row flex-md-column gap-2 gap-md-3 overflow-x-auto overflow-md-visible">
              {productImages?.map((img, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedImages(img)}
                    style={{
                      border: selectedImages === img ? "2px solid black" : "",
                      borderRadius: "12px",
                      cursor: "pointer",
                      padding: "4px 8px",
                      backgroundColor: colors.bannerbackgroundColor,
                      minWidth: "80px",
                      maxWidth: "200px",
                      flex: "0 0 auto",
                    }}
                  >
                    <Image
                      src={img}
                      alt={product.title}
                      width={152}
                      height={167}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "148px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Image - Responsive */}
          <div className="col-12 col-md-5 order-md-2 mb-4 mb-md-0">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "clamp(300px, 50vw, 500px)",
                borderRadius: "20px",
                backgroundColor: colors.bannerbackgroundColor,
                padding: "20px",
              }}
            >
              <Image
                width={444}
                height={530}
                src={selectedImages}
                alt={product.title}
                style={{ 
                  objectFit: "contain",
                  width: "100%",
                  height: "100%"
                }}
              />
            </div>
          </div>

          {/* Product Details - Responsive */}
          <div className="col-12 col-md-5 order-md-3">
            <h2 className="h4 h3-md fw-bold text-uppercase" style={{ fontSize: "clamp(18px, 3vw, 28px)" }}>
              {product.title}
            </h2>

            {/* Stars - Responsive size */}
            <div className="d-flex align-items-center gap-1 mb-1 flex-wrap">
              {Array.from({ length: fullStars }).map((_, i) => (
                <span key={`full-${i}`} style={{ color: "#FFC633", fontSize: "clamp(20px, 4vw, 32px)", lineHeight: 1 }}>
                  ★
                </span>
              ))}

              {hasHalfStar && (
                <span style={{ position: "relative", display: "inline-block", fontSize: "clamp(20px, 4vw, 32px)", lineHeight: 1 }}>
                  <span style={{ color: "#E0E0E0" }}>★</span>
                  <span style={{ position: "absolute", left: 0, top: 0, width: "50%", overflow: "hidden", color: "#FFC633" }}>
                    ★
                  </span>
                </span>
              )}

              {Array.from({ length: emptyStars }).map((_, i) => (
                <span key={`empty-${i}`} style={{ color: "#E0E0E0", fontSize: "clamp(20px, 4vw, 32px)", lineHeight: 1 }}>
                  ★
                </span>
              ))}

              <span className="ms-2 text-muted" style={{ fontSize: "clamp(16px, 2.5vw, 25px)" }}>
                {product.rating}/{product.maxRating}
              </span>
            </div>

            {/* Price - Responsive */}
            <div className="d-flex align-items-center gap-2 gap-md-3 mt-2 mt-md-3 flex-wrap">
              <span className="fw-bold" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
                ${product.price}
              </span>

              {product.oldPrice && (
                <span className="text-decoration-line-through fw-bold" style={{ color: "#B3B3B3", fontSize: "clamp(18px, 2.5vw, 24px)" }}>
                  ${product.oldPrice}
                </span>
              )}

              {product.discountPercent && (
                <span className="badge rounded-pill px-2" style={{background: "#ffe1e1", color: "#FF3333", fontSize: "clamp(12px, 1.5vw, 16px)" }}>
                  -{product.discountPercent}%
                </span>
              )}
            </div>

            {/* Description */}
            <div className="fs-6 mt-2 mt-md-3" style={{ color: "#B3B3B3", fontWeight: 500, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
              {product.description}
            </div>

            <hr />

            {/* Colors - Responsive */}
            <div className="mt-3 mt-md-4">
              <h3 className="fs-6" style={{ color: "#B3B3B3", fontWeight: 500, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
                Selected Colors
              </h3>
              <div className="d-flex gap-2 gap-md-3 mt-2 mt-md-3 flex-wrap">
                {product.colorOptions.map((color, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedColors(color)}
                      style={{
                        width: "clamp(30px, 5vw, 40px)",
                        height: "clamp(30px, 5vw, 40px)",
                        borderRadius: "50%",
                        background: color,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: selectedColors === color ? "2px solid black" : "2px solid transparent",
                        transition: "all 0.2s",
                      }}
                    >
                      {selectedColors === color && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16" style={{ color: colors.white }}>
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sizes - Responsive */}
            <div className="mt-3 mt-md-4">
              <h3 className="fs-6" style={{ color: "#B3B3B3", fontWeight: 500, fontSize: "clamp(14px, 1.5vw, 16px)" }}>
                Selected Sizes
              </h3>
              <div className="d-flex gap-2 gap-md-3 mt-2 mt-md-3 flex-wrap">
                {product.sizes.map((size, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedSizes(size)}
                      style={{
                        width: "clamp(60px, 10vw, 80px)",
                        height: "clamp(35px, 5vw, 40px)",
                        borderRadius: "20%",
                        background: selectedSizes === size ? colors.black : colors.bannerbackgroundColor,
                        color: selectedSizes === size ? colors.white : colors.black,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(12px, 1.5vw, 16px)",
                        fontWeight: selectedSizes === size ? "bold" : "normal",
                        transition: "all 0.2s",
                      }}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>

            <hr />

            {/* Quantity + Add to Cart - Responsive */}
            <div className="d-flex gap-2 gap-md-3 mt-3 mt-md-4">
              <div
                className="d-flex align-items-center gap-2 gap-md-3 px-2 px-md-3 rounded-pill"
                style={{ background: "#f2f0f1", flex: "0 0 auto" }}
              >
                <button
                  className="border-0 bg-transparent"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}>{quantity}</span>
                <button
                  className="border-0 bg-transparent"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn btn-dark rounded-pill flex-grow-1" style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailInfo;