"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import colors from "@/app/utils/color";

const Testimonials = ({ heading, ClientTestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  // ---- Arrow click: AutoScroll ko pehle stop karo, navigate karo, phir resume karo ----
  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    autoScroll?.stop(); // continuous movement rok do
    emblaApi.scrollPrev(); // ab index change hoga bina override hue
    autoScroll?.play(); // wapas auto-scroll resume karo
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    autoScroll?.stop();
    emblaApi.scrollNext();
    autoScroll?.play();
  }, [emblaApi]);

  return (
    <section className="testimonial-section py-4">
      <div className="heading-wrapper">
        <div className="container">
          <h2 className="text-lg-center fw-bold m-0">{heading}</h2>
        </div>
        <div className="arrow-group">
          <button
            className="arrow-btn level-6"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className="arrow-btn level-6"
            onClick={scrollNext}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {ClientTestimonialsData.map((data, index) => {
            let fullStars = Math.floor(data.rating);
            let hasHalfStar = data.rating % 1 !== 0;
            let emptyStars = data.maxRating - fullStars - (hasHalfStar ? 1 : 0);
            return (
              <div className="embla__slide" key={index}>
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
                  <div className="d-flex justify-content-between align-items-center gap-1 mb-1 flex-wrap">
                    <div>
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
                    </div>
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

        <div className="edge-blur edge-blur-left" />
        <div className="edge-blur edge-blur-right" />
      </div>

      <style jsx>{`
        .heading-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          margin-bottom: 1.5rem;
        }
        .arrow-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .arrow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          font-size: 1.3rem;
          line-height: 1;
          cursor: pointer;
          padding: 4px;
        }
        .embla {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          gap: 24px;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
        }
        .testimonial-card {
          width: 260px;
          height: 100%;
        }
        .edge-blur {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          pointer-events: none;
          z-index: 2;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .edge-blur-left {
          left: 0;
        }
        .edge-blur-right {
          right: 0;
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
            width: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
