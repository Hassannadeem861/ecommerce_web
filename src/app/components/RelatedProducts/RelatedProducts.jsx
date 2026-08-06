"use client"
import colors from "@/app/utils/color";
import Link from "next/link";
import Image from "next/image"
import React, { useState } from "react";

const RelatedProducts = ({heading, product, slug }) => {

  const FindcurrentProduct = product.find((product) => product.slug === slug);
  
  const relatedProducts = product.filter(
      (item) => item.category === FindcurrentProduct.category && item.id !== FindcurrentProduct.id,
  ).slice(0, 4);

  return (
    <section className="mt-4 mt-md-5 mb-md-5">
      <h2
        className="level-sm-8 level-md-1 fw-bold text-center"
        style={{ color: colors.black }}
      >
        {heading}
      </h2>

      <div className="">
        <div className="row g-4 mt-1 mt-md-1 justify-content-center">
          {relatedProducts.map((data) => {
            // rating ko full aur half stars mein todna — jaise 4.5 ka matlab 4 poore stars + 1 aadha star
            const fullStars = Math.floor(data.rating);
            const hasHalfStar = data.rating % 1 !== 0;

            return (
              <div key={data.id} className="col-6 col-md-4 col-lg-3">
                {/* ---- Image Box ---- */}
                <Link href={`/product/${data.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "280px",
                      backgroundColor: "#F0F0F0",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      style={{ objectFit: "contain", padding: "16px" }}
                    />
                  </div>

                  {/* ---- Title ---- */}
                  <h6
                    className="fw-bold mt-3 mb-1"
                    style={{ color: colors.black }}
                  >
                    {data.title}
                  </h6>

                  {/* ---- Stars + Rating ---- */}
                  <div className="d-flex align-items-center gap-1 mb-1" style={{listStyle:"none"}}>
                    {/* Full stars — jitne poore stars hain utne yellow star render karo */}
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <span key={`full-${i}`} style={{ color: "#FFC633" }}>
                        ★
                      </span>
                    ))}

                    {/* Agar half star hai (jaise 4.5, 3.5) to ek half-filled star dikhao */}
                    {hasHalfStar && (
                      <span
                        style={{
                          position: "relative",
                          display: "inline-block",
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

                    {/* Baaki khaali stars — total 5 tak grey star fill karo */}
                    {Array.from({
                      length:
                        data.maxRating - fullStars - (hasHalfStar ? 1 : 0),
                    }).map((_, i) => (
                      <span key={`empty-${i}`} style={{ color: "#E0E0E0" }}>
                        ★
                      </span>
                    ))}

                    <span
                      className="ms-1 text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      {data.rating}/{data.maxRating}
                    </span>
                  </div>

                  {/* ---- Price Row ---- */}
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold" style={{ fontSize: "18px" }}>
                      ${data.price}
                    </span>

                    {/* Agar oldPrice hai (discount wala product), tabhi strikethrough price aur badge dikhao */}
                    {data.oldPrice && (
                      <>
                        <span
                          className="text-muted"
                          style={{
                            textDecoration: "line-through",
                            fontSize: "16px",
                          }}
                        >
                          ${data.oldPrice}
                        </span>
                        <span
                          style={{
                            backgroundColor: "#FFE1E1",
                            color: "#FF3333",
                            fontSize: "12px",
                            fontWeight: "600",
                            padding: "3px 10px",
                            borderRadius: "20px",
                          }}
                        >
                          -{data.discountPercent}%
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
