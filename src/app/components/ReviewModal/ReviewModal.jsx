"use client";
import React, { useState, useEffect } from "react";

const ReviewModal = ({ show, onClose, onSubmit, editingReview }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);

  // Jab editingReview change ho (edit click kiya), form ko pre-fill karo
  useEffect(() => {
    if (editingReview) {
      setName(editingReview.name);
      setDescription(editingReview.description);
      setRating(editingReview.rating || 5);
    } else {
      setName("");
      setDescription("");
      setRating(5);
    }
  }, [editingReview, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    onSubmit({ name, description, rating });
  };

  if (!show) return null; // modal band hai to kuch render mat karo

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop show"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      ></div>

      {/* Modal */}
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editingReview ? "Edit Review" : "Write a Review"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Rating</label>
                  <select
                    className="form-select"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} Star{r > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Review</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Share your experience..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-dark">
                  {editingReview ? "Update Review" : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;