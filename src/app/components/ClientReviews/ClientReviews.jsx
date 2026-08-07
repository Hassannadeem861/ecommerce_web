"use client";
import colors from "@/app/utils/color";
import HomeData from "@/app/utils/data";
import React, { useState } from "react";
import Image from "next/image";
const ClientReviews = ({ clientReviews }) => {
  // console.log("clientReviews: ", clientReviews)
  const ClientTestimonialsData = HomeData.ClientTestimonials.cards;
  const dropDownOptions = ["Latest", "Old"];
  const [selectedSort, setSelectedSort] = useState("Latest");

  return (
    <section className="">
      <div className="d-flex flex-row justify-content-between align-items-center flex-wrap gap-2">
        <h3 className="level-md-5 level-6 fw-bold mb-0">
          All Reviews ({clientReviews.length})
        </h3>

        <div className="d-flex flex-nowrap align-items-center gap-2">
          <div className="dropdown d-none d-md-block">
            <button
              style={{
                border: "1px solid #e5e5e5",
                padding: "8px 14px",
                borderRadius: "30px",
                // fontSize: "14px",
                whiteSpace: "nowrap",
              }}
              className=" fw-bold dropdown-toggle bg-white"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedSort}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {dropDownOptions.map((val, i) => (
                <li key={i}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setSelectedSort(val)}
                  >
                    {val}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            style={{
              border: "none",
              padding: "8px 16px",
              borderRadius: "30px",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
            type="button"
            onClick={() => alert("Write a review")}
          >
            Write a Review
          </button>
        </div>
      </div>

      <div className="mt-md-5 mt-3">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {ClientTestimonialsData.map((data, index) => {
            let fullStars = Math.floor(data.rating);
            // console.log("fullStars: ", fullStars);
            let hasHalfStar = data.rating % 1 !== 0;
            // console.log("hasHalfStar: ", hasHalfStar);
            let emptyStars =
              data.maxRating - fullStars - (hasHalfStar ? 1 : 0);
            // console.log("emptyStars: ", emptyStars);
            return (
              <div key={index}>
                <div
                  className="testimonial-card p-4"
                  style={{
                    border: `2px solid ${colors.bannerbackgroundColor}`,
                    borderRadius: 15,
                  }}
                >
                  {/* <Image
                  width={100}
                  height={20}
                  src={data.starImage}
                  alt="rating stars"
                  priority={index === 0}
                  style={{ objectFit: "contain" }}
                /> */}

                  {/* Stars */}
                  <div className="d-flex align-items-center gap-1 mb-1 flex-wrap">
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <span
                        key={`full-${i}`}
                        style={{
                          color: "#FFC633",
                          fontSize: "clamp(20px, 4vw, 32px)",
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </span>
                    ))}

                    {hasHalfStar && (
                      <span
                        style={{
                          position: "relative",
                          display: "inline-block",
                          fontSize: "clamp(20px, 4vw, 32px)",
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

                    {Array.from({ length: emptyStars }).map((_, i) => (
                      <span
                        key={`empty-${i}`}
                        style={{
                          color: "#E0E0E0",
                          fontSize: "clamp(20px, 4vw, 32px)",
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </span>
                    ))}

                    {/* <span
                    className="ms-2 text-muted"
                    style={{ fontSize: "clamp(16px, 2.5vw, 25px)" }}
                  >
                    {clientReviews.rating}/{clientReviews.maxRating}
                  </span> */}
                  </div>

                  <div className="d-flex align-items-center gap-2 mt-2">
                    <span className="level-8 fw-bold">{data.name}</span>
                    <Image
                      width={16}
                      height={16}
                      src={data.image}
                      alt="verified"
                    />
                  </div>

                  <div className="mt-2" style={{ color: "#666666" }}>
                    {data.description}
                  </div>

                  <div className="mt-2" style={{ color: "#666666" }}>
                    (Posted on {data.postedDate})
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
    
        .testimonial-card {
          width: 100%;
          height: 100%;
        }
    
        @media (min-width: 768px) {
          .testimonial-card {
            width: 320px;
          }
        }
        @media (min-width: 992px) {
          .testimonial-card {
            width: 360px;
          }
        }
        @media (min-width: 1200px) {
          .testimonial-card {
            width: 640px;
          }
        }
      `}</style>

    </section>
  );
};

export default ClientReviews;
