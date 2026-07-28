"use client";

import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

// NOTE: Requires bootstrap CSS to be imported globally, e.g. in app/layout.js:
//   import "bootstrap/dist/css/bootstrap.min.css";
// Requires react-icons: npm install react-icons

const companyLinks = ["About", "Features", "Works", "Career"];
const helpLinks = ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"];
const faqLinks = ["Account", "Manage Deliveries", "Orders", "Payments"];
const resourceLinks = ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"];

const Footer = () => {
  return (
    <footer className={styles.footerWrap}>
      <div className="container">
        {/* Newsletter banner - overlaps footer top */}
        <div className={`${styles.newsletterBox} row align-items-center gy-4 gy-lg-0`}>
          <div className="col-12 col-lg-6">
            <h2 className={`level-4 letter-spacing-1 text-uppercase text-white mb-0 ${styles.newsletterHeading}`}>
              Stay upto date about
              <br />
              our latest offers
            </h2>
          </div>

          <div className="col-12 col-lg-6">
            <div className={styles.newsletterForm}>
              <div className={styles.emailInputWrap}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={styles.emailIcon}
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`text-xs ${styles.emailInput}`}
                />
              </div>
              <button type="button" className={`text-xs ${styles.subscribeBtn}`}>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className={`row ${styles.footerBody}`}>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h3 className={`level-6 text-uppercase mb-3 ${styles.brandName}`}>Shop.co</h3>
            <p className={`text-xs ${styles.brandDesc}`}>
              We have clothes that suits your style and which you&apos;re proud to wear. From
              women to men.
            </p>
            <div className={`d-flex gap-2 ${styles.socialRow}`}>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                <FaTwitter size={14} />
              </a>
              <a href="#" aria-label="Facebook" className={`${styles.socialIcon} ${styles.socialIconFilled}`}>
                <FaFacebookF size={14} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <FaInstagram size={14} />
              </a>
              <a href="#" aria-label="Github" className={styles.socialIcon}>
                <FaGithub size={14} />
              </a>
            </div>
          </div>

          <FooterCol title="Company" links={companyLinks} />
          <FooterCol title="Help" links={helpLinks} />
          <FooterCol title="FAQ" links={faqLinks} />
          <FooterCol title="Resources" links={resourceLinks} />
        </div>

        {/* Bottom bar */}
        <div className={`row align-items-center ${styles.bottomBar}`}>
          <div className="col-12 col-md-6">
            <p className={`text-xss mb-0 ${styles.copyright}`}>
              Shop.co © 2000-2023, All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.paymentRow}>
              <span className={styles.paymentBadge}>VISA</span>
              <span className={styles.paymentBadge}>
                <span className={styles.mcDots} />
                Mastercard
              </span>
              <span className={styles.paymentBadge}>PayPal</span>
              <span className={styles.paymentBadge}>
                <span aria-hidden="true"></span> Pay
              </span>
              <span className={styles.paymentBadge}>G Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer
function FooterCol({ title, links }) {
  return (
    <div className="col-6 col-sm-6 col-lg-2 mb-4 mb-lg-0">
      <h4 className="level-8 letter-spacing-1 text-uppercase mb-3 fw-bold">{title}</h4>
      <ul className="list-unstyled m-0 p-0">
        {links.map((link) => (
          <li key={link} className="mb-2">
            <a href="#" className={`text-xs ${styles.footerLink}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}