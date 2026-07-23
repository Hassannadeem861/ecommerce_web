//Agar images static hain (jaise brand logos, jo kabhi change nahi hongi) 
// → in3 caching problem nahi honi chahiye, ye actually cache honi chahiye performance ke liye. Agar aap dev mode mein
//  "purani image dikh rahi hai" wala issue face kar rahe ho (jab image file replace ki lekin browser purani dikha raha hai), to sirf Option 2 (timestamp query param) kaafi hai.
//Agar images dynamic/user-uploaded hain (jo baar baar change hoti hain) → Option 1 (unoptimized) + Option 2 (timestamp) dono use karo.

"use client";
import colors from "@/app/utils/color";
import React from "react";
import Image from "next/image";

const BrandLogosSection = ({ images }) => {
  // Marquee animation ke liye images ko do baar repeat kiya — taake loop seamless (bina gap ke) dikhe
  const duplicatedImages = [...images, ...images];
  console.log("duplicatedImages: ", duplicatedImages)

  return (
    <section
      className="p-3 p-md-4 p-lg-4"
      style={{ backgroundColor: colors.black, overflow: "hidden" }}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="brand-logo-box">
              <Image
                src={`${image}`}
                alt="BrandLogosSection"
                width={200}
                height={200}
                priority={index === 0}
                // unoptimized
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 2rem;
          width: max-content;
          animation: scrollLogos 20s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .brand-logo-box {
          flex: 0 0 auto;
          width: 80px;
        }

        @keyframes scrollLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Tablet */
        @media (min-width: 768px) {
          .brand-logo-box {
            width: 120px;
          }
          .marquee-track {
            gap: 3rem;
          }
        }

        /* Laptop */
        @media (min-width: 992px) {
          .brand-logo-box {
            width: 160px;
          }
          .marquee-track {
            gap: 4rem;
          }
        }

        /* Desktop */
        @media (min-width: 1200px) {
          .brand-logo-box {
            width: 200px;
          }
          .marquee-track {
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandLogosSection;
