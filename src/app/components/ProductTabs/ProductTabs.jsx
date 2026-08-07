"use client";
import React, { useState } from "react";
import ClientReviews from "../ClientReviews/ClientReviews";
import ProductFaqs from "../ProductFaqs/ProductFaqs";
import colors from "@/app/utils/color";

const ProductTabs = ({product, clientReviews, faqs }) => {
  const [activeTab, setActiveTab] = useState("reviews");

  const tab = [
    {
      key: "reviews",
      label: "Rating & Reviews",
    },
    {
      key: "faqs",
      label: "FAQS",
    },
  ];

  return (
    <section className="mt-1 mt-md-5">
      <div
        className="d-flex justify-content-center gap-5"
        style={{ borderBottom: `1px solid ${colors.textColor}` }}>
        {tab.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="level-5 fw-bold"
              style={{
                background: "none",
                marginBottom: "-1px",
                border: "none",
                outline: "none",
                color: active ? "black" : colors.textColor,
                paddingTop: "12px",
                 cursor: "pointer",
                 borderBottom: active ? "2px solid #000" : "2px solid transparent"
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-md-3 mt-4">
        {activeTab === "reviews" && <ClientReviews clientReviews={clientReviews}/>}
        {activeTab === "faqs" && <ProductFaqs />}
      </div>
    </section>
  );
};

export default ProductTabs;
