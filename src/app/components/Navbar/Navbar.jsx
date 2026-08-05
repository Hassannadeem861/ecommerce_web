import Link from "next/link";
import colors from "../../utils/color.js";

const Navbar = () => {
  return (
    <section>
      {/* Promo bar */}
      {/* <div className="bg-dark p-2 position-relative text-center">
        <p className="m-0 text-light small px-4">
          Sign up and get 20% off to your first order{" "}
          <span
            className="text-xs text-decoration-underline"
            style={{ cursor: "pointer" }}
          >
            Sign Up Now
          </span>
        </p>
        <button
          className="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y me-3"
          aria-label="Close"
        ></button>
      </div> */}

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          {/* Logo */}
          <Link className="level-6 navbar-brand fw-bold" href="/">
            E-COMMERCE
          </Link>

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

          {/* Everything that collapses on mobile */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Left: nav links */}
            <ul className="navbar-nav gap-lg-3 mb-3 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="text-xs nav-link dropdown-toggle nav-link-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: colors.black, fontWeight:600}}
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
                  style={{ color: colors.black, fontWeight:600}}
                >
                  On Sale
                </Link>
              </li>

              <li className="nav-item">
                <Link className="text-xs nav-link nav-link-dark" href="#" style={{ color: colors.black, fontWeight:600}}>
                  New Arrival
                </Link>
              </li>

              <li className="nav-item">
                <Link className="text-xs nav-link nav-link-dark" href="#" style={{ color: colors.black, fontWeight:600}}>
                  Brands
                </Link>
              </li>
            </ul>

            {/* Middle: search — SIBLING of ul, not inside it */}
            <form
              className="d-flex flex-grow-1 mx-lg-4 mb-3 mb-lg-0"
              role="search"
            >
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

            {/* Right: icons — SIBLING of ul, not inside it */}
            <div className="d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>

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
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
