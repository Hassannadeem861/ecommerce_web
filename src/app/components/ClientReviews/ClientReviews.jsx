"use client";
import React, { useState } from "react";

const ClientReviews = ({ clientReviews }) => {
  const dropDownOptions = ["Latest", "Old"];
  const [selectedSort, setSelectedSort] = useState("Latest");

  return (
    <section className="d-flex flex-row justify-content-between align-items-center flex-wrap gap-2">
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
            className="level-md-7 level-6 fw-bold dropdown-toggle bg-white"
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
    </section>
  );
};

export default ClientReviews;
