"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import colors from "../../utils/color.js";
import CartSidebar from "../CartSidebar/CartSidebar.jsx"; // apna sahi path daal lena
import { getCart, getCartCount } from "@/app/utils/helper.js";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Cart state ko localStorage se refresh karne wala function
  const refreshCart = () => {
    setCartItems(getCart());
    setCartCount(getCartCount());
  };

  useEffect(() => {
    refreshCart(); // page load par ek dafa

    // ✅ jab bhi kahin bhi se addToCart/updateQuantity/removeFromCart chale,
    // "cartUpdated" event fire hoga aur ye Navbar turant refresh ho jayega
    window.addEventListener("cartUpdated", refreshCart);
    return () => window.removeEventListener("cartUpdated", refreshCart);
  }, []);

  return (
    <section>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
          
          <div className="d-flex align-items-center gap-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="level-6 navbar-brand fw-bold m-0" href="/">
              E-COMMERCE
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3 order-lg-3">
            {/* ✅ Cart icon ab clickable hai + badge count */}
            <div
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => setShowCart(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>

              {/* Badge — sirf tab dikhega jab count > 0 ho */}
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "#000",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: "bold",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>

          <div
            className="collapse navbar-collapse order-lg-2 w-100 mt-3 mt-lg-0"
            id="navbarSupportedContent"
          >
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center w-100 gap-3">
              <ul className="navbar-nav gap-lg-3 mb-0">
                <li className="nav-item dropdown">
                  <Link
                    className="text-xs nav-link dropdown-toggle nav-link-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    Shop
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="text-xs nav-link nav-link-dark"
                    aria-current="page"
                    href="#"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    On Sale
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="text-xs nav-link nav-link-dark"
                    href="#"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    New Arrival
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="text-xs nav-link nav-link-dark"
                    href="#"
                    style={{ color: colors.black, fontWeight: 600 }}
                  >
                    Brands
                  </Link>
                </li>
              </ul>

              <form className="d-flex flex-grow-1 mx-lg-4" role="search">
                <div className="position-relative search-box w-100">
                  <input
                    className="form-control ps-5 rounded-pill bg-light-subtle"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ backgroundColor: "#F0F0F0" }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3"
                    viewBox="0 0 16 16"
                    style={{ pointerEvents: "none" }}
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Cart Sidebar yahan render hota hai */}
      <CartSidebar
        show={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        refreshCart={refreshCart}
      />
    </section>
  );
};

export default Navbar;