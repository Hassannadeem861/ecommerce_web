"use client";
import colors from "@/app/utils/color";
import HomeData from "@/app/utils/data";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import ReviewModal from "../ReviewModal/ReviewModal.jsx";

const ClientReviews = ({ clientReviews }) => {
  const [reviews, setReviews] = useState(HomeData.ClientTestimonials.cards);

  const dropDownOptions = ["Latest", "Old"];
  const [selectedSort, setSelectedSort] = useState("Latest");

  const [showModal, setShowModal] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleOpenAddModal = () => {
    setEditingReview(null);
    setShowModal(true);
  };

  const handleOpenEditModal = (review) => {
    setEditingReview(review);
    setShowModal(true);
    setOpenMenuId(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingReview(null);
  };

  const handleSubmitReview = (formData) => {
    if (editingReview) {
      setReviews((prev) =>
        prev.map((r) =>
          r.id === editingReview.id ? { ...r, ...formData } : r
        )
      );
      toast.success("Review updated successfully!");
    } else {
      const newReview = {
        id: Date.now(),
        ...formData,
        maxRating: 5,
        image: "/assests/home/ClientTestimonials/greenTick.png",
        postedDate: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        isOwn: true,
      };
      setReviews((prev) => [newReview, ...prev]);
      toast.success("Review submitted successfully!");
    }
    handleCloseModal();
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    toast.success("Review deleted");
    setOpenMenuId(null);
  };

  return (
    <section className="">
      <div className="d-flex flex-row justify-content-between align-items-center flex-wrap gap-2">
        <h3 className="level-md-5 level-6 fw-bold mb-0">
          All Reviews ({reviews.length})
        </h3>

        <div className="d-flex flex-nowrap align-items-center gap-2">
          <div className="dropdown d-none d-md-block">
            <button
              style={{
                border: "1px solid #e5e5e5",
                padding: "8px 14px",
                borderRadius: "30px",
                whiteSpace: "nowrap",
              }}
              className="fw-bold dropdown-toggle bg-white"
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
            onClick={handleOpenAddModal}
          >
            Write a Review
          </button>
        </div>
      </div>

      <div className="mt-md-5 mt-3">
        <div className="d-flex flex-wrap gap-3 reviews-grid">
          {reviews.map((data, index) => {
            const cardId = data.id || index;
            const isMenuOpen = openMenuId === cardId;

            let fullStars = Math.floor(data.rating || 0);
            let hasHalfStar = (data.rating || 0) % 1 !== 0;
            let emptyStars =
              (data.maxRating || 5) - fullStars - (hasHalfStar ? 1 : 0);

            return (
              <div
                key={cardId}
                className="testimonial-card p-4"
                style={{
                  border: `2px solid ${colors.bannerbackgroundColor}`,
                  borderRadius: 15,
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                {/* Stars + "..." menu */}
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

                  {data.isOwn && (
                    <div
                      className="options-wrapper"
                      ref={isMenuOpen ? menuRef : null}
                    >
                      <button
                        type="button"
                        className="options-btn"
                        onClick={() => toggleMenu(cardId)}
                        aria-label="Options"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                      </button>

                      {isMenuOpen && (
                        <div className="options-menu">
                          <button
                            type="button"
                            className="options-menu-item"
                            onClick={() => handleOpenEditModal(data)}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="options-menu-item text-danger"
                            onClick={() => handleDeleteReview(data.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="d-flex align-items-center gap-2 mt-2">
                  <span className="level-8 fw-bold">{data.name}</span>
                  <Image width={16} height={16} src={data.image} alt="verified" />
                </div>

                <div className="mt-2" style={{ color: "#666666" }}>
                  {data.description}
                </div>

                <div className="mt-2" style={{ color: "#666666" }}>
                  (Posted on {data.postedDate})
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ReviewModal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitReview}
        editingReview={editingReview}
      />

      <style jsx>{`
        /* Parent container ko full width diya taake uske andar "100%" ka matlab clear ho */
        .reviews-grid {
          width: 100%;
        }

        .testimonial-card {
          box-sizing: border-box;
          flex: 1 1 100%; /* mobile: poori row le, content-size ignore karke */
          width: 100%;
        }

        .options-wrapper {
          position: relative;
        }
        .options-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          color: #333;
        }
        .options-btn:hover {
          background: #f0f0f0;
        }
        .options-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 4px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 130px;
          z-index: 10;
          overflow: hidden;
        }
        .options-menu-item {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 10px 14px;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .options-menu-item:hover {
          background: #f8f8f8;
        }

        /* Tablet: 2 cards per row */
        @media (min-width: 768px) {
          .testimonial-card {
            flex: 1 1 calc(50% - 12px); /* 2 columns, gap-3 (~12px ka half) minus karke */
            width: auto;
          }
        }

        /* Desktop: 3 cards per row */
        @media (min-width: 992px) {
          .testimonial-card {
            flex: 1 1 calc(50% - 16px) !important; /* 33.333% se 50% kar diya */
          }
        }

        /* Large desktop: fixed wide cards */
        @media (min-width: 1200px) {
          .testimonial-card {
            flex: 0 0 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientReviews;