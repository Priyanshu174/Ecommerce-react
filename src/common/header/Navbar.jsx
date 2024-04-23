import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  // Function to scroll to a section with a given class name
  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="catgrories d_flex">
          <span className="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-down"></i>
          </h4>
        </div>

        <div className="navlink">
          <ul
            className={mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}
            onClick={closeMobileMenu}
          >
            <li>
              <Link to="/" onClick={() => scrollToSection("home-section")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("new-deal-section")}>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("flash-deal-section")}>
                Flash Deals
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("discount-section")}>
                Discount
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("about-us-section")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("contact-section")}>
                Contact
              </Link>
            </li>
            {/* Add similar links for other sections */}
          </ul>

          <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
