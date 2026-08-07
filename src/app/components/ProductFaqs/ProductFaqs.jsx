"use client";
import React, { useState } from "react";
import HomeData from "@/app/utils/data";

const Faqs = () => {
  const faqsData = HomeData.FAQs;
  const [openId, setOpenId] = useState(faqsData[0]?.id || null); // pehla FAQ default open

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id)); // same pe click = band ho jaye
  };

  return (
    <section className="faqs-section">
      <div className="faqs-wrapper">
        {faqsData.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div key={faq.id} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-icon ${isOpen ? "open" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .faqs-section {
          padding: 24px 0;
        }
        .faqs-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid #e5e5e5;
        }
        .faq-item:first-child {
          border-top: 1px solid #e5e5e5;
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: none;
          border: none;
          text-align: left;
          padding: 18px 4px;
          cursor: pointer;
        }
        .faq-question-text {
          font-size: 16px;
          font-weight: 600;
          color: #111111;
        }
        .faq-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f5f5f5;
          color: #111;
          transition: transform 0.3s ease;
        }
        .faq-icon.open {
          transform: rotate(180deg);
          background: #111;
          color: #fff;
        }
        .faq-answer-wrapper {
          overflow: hidden;
          max-height: 0px;
          transition: max-height 0.35s ease;
        }
        .faq-answer {
          margin: 0;
          padding: 0 4px 18px 4px;
          font-size: 14px;
          line-height: 1.6;
          color: #666666;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .faq-question-text {
            font-size: 17px;
          }
          .faq-answer {
            font-size: 15px;
          }
        }

        /* Desktop */
        @media (min-width: 992px) {
          .faq-question-text {
            font-size: 18px;
          }
          .faq-answer {
            font-size: 16px;
          }
          .faq-question {
            padding: 22px 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default Faqs;