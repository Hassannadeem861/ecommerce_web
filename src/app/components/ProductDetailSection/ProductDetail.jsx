"use client";
import colors from "@/app/utils/color";
import React, { useState } from "react";
import UnderLine from "../UnderLineSection/UnderLine";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  let fullStars = Math.floor(product.rating);
  let hasHalfStar = product.rating % 1 !== 0;
  let emptyStars = product.maxRating - fullStars - (hasHalfStar ? 1 : 0);
  const productImages = product.images?.length
    ? product.images
    : [
        "/assests/home/NewArrivalsProducts/image1.png",
        "/assests/home/NewArrivalsProducts/image2.png",
        "/assests/home/NewArrivalsProducts/image3.png",
        // "/assests/home/NewArrivalsProducts/image4.png",
      ];

  const [selectedImages, setSelectedImages] = useState(productImages[0]);
  const [selectedColors, setSelectedColors] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  //   console.log("selectedImages: ", selectedImages);

  // console.log(productsImages)
  return (
    <>
      <hr />
      <section className="mt-md-5">
        <div className="d-flex gap-2">
          <div
            className="fw-bold"
            style={{ cursor: "pointer", color: colors.textColor }}
          >
            Home{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-chevron-right fw-bold"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div
            className="fw-bold"
            style={{ cursor: "pointer", color: colors.textColor }}
          >
            Shop{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-chevron-right fw-bold"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div
            className="fw-bold"
            style={{ cursor: "pointer", color: colors.textColor }}
          >
            Men{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16 fw-bold"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <div
            className="fw-bold"
            style={{ cursor: "pointer", color: colors.black }}
          >
            T-shirt
          </div>
        </div>

        <div className="row pt-md-4">
          {/* Thumbnails */}
          <div className="col-2 d-flex flex-column gap-3">
            {productImages?.map((img, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setSelectedImages(img)}
                  style={{
                    border: selectedImages === img ? "2px solid black" : "",
                    borderRadius: "12px",
                    cursor: "pointer",
                    padding: "8px",
                    backgroundColor: colors.bannerbackgroundColor,
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
                      height: "auto",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Main image */}
          <div
            className="col-5 d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "20px",
              backgroundColor: selectedColors
                ? selectedColors
                : colors.bannerbackgroundColor,
            }}
          >
            <Image
              width={444}
              height={530}
              src={selectedImages}
              alt={product.title}
              style={{ objectFit: "centain" }}
            />
          </div>

          {/* Details */}
          <div className="col-5 gap-5">
            <h2 className="level-4 fw-bold text-uppercase">{product.title}</h2>

            {/* ---- Stars + Rating ---- */}
            <div className="d-flex align-items-center gap-1 mb-1">
              {/* Full Stars */}
              {Array.from({ length: fullStars }).map((_, i) => (
                <span
                  key={`full-${i}`}
                  style={{
                    color: "#FFC633",
                    fontSize: "32px",
                    lineHeight: 1,
                  }}
                >
                  ★
                </span>
              ))}

              {/* Half Star */}
              {hasHalfStar && (
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "32px",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "#E0E0E0" }}>★</span>

                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "50%",
                      overflow: "hidden",
                      color: "#FFC633",
                    }}
                  >
                    ★
                  </span>
                </span>
              )}

              {/* Empty Stars */}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <span
                  key={`empty-${i}`}
                  style={{
                    color: "#E0E0E0",
                    fontSize: "32px",
                    lineHeight: 1,
                  }}
                >
                  ★
                </span>
              ))}

              <span className="ms-2 text-muted" style={{ fontSize: "25px" }}>
                {product.rating}/{product.maxRating}
              </span>
            </div>

            <div className="d-flex gap-3 mt-md-3">
              <span className="level-6 fw-bold">${product.price}</span>

              {product.oldPrice && (
                <span
                  className="text-decoration-line-through level-6 fw-bold"
                  style={{ color: "#B3B3B3" }}
                >
                  ${product.oldPrice}
                </span>
              )}

              {product.discountPercent && (
                <span
                  className="level-8 badge rounded-pill px-2"
                  style={{ background: "#ffe1e1", color: "#FF3333" }}
                >
                  -{product.discountPercent}%
                </span>
              )}
            </div>

            <div
              className="fs-6 mt-md-3"
              style={{ color: "#B3B3B3", fontWeight: 500 }}
            >
              {product.description}
            </div>

            <hr />

            <div className="mt-md-4">
              <h3
                className="fs-6"
                style={{ color: "#B3B3B3", fontWeight: 500 }}
              >
                Selected Colors
              </h3>
              <div className="d-flex gap-3">
                {product.colorOptions.map((color, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedColors(color)}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: color,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border:
                          setSelectedColors === color
                            ? "2px solid black"
                            : "none",
                      }}
                    >
                      {selectedColors === color && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-check"
                          viewBox="0 0 16 16"
                          style={{ color: colors.white }}
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-md-4">
              <h3
                className="fs-6"
                style={{ color: "#B3B3B3", fontWeight: 500 }}
              >
                Selected Sizes
              </h3>
              <div className="d-flex gap-3">
                {product.sizes.map((size, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedSizes(size)}
                      style={{
                        width: 80,
                        height: 40,
                        borderRadius: "20%",
                        background:
                          selectedSizes === size
                            ? colors.black
                            : colors.bannerbackgroundColor,
                        color:
                          selectedSizes === size ? colors.white : colors.black,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // border:
                        //   setSelectedSizes === size
                        //     ? "2px solid black"
                        //     : "none",
                      }}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>

            <hr />

            {/* Quantity + Add to Cart */}
            <div className="d-flex gap-3 mt-md-4">
              <div
                className="d-flex align-items-center gap-3 px-3 rounded-pill"
                style={{ background: "#f2f0f1" }}
              >
                <button
                  className="border-0 bg-transparent fs-4"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  className="border-0 bg-transparent fs-4"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn btn-dark rounded-pill flex-grow-1">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
