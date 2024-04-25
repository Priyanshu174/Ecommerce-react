import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

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
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("home-section")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("new-deal-section")}>
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("flash-deal-section")}>
                Flash Deals
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("discount-section")}>
                Discount
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("about-us-section")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Ecommerce-react" onClick={() => scrollToSection("contact-section")}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Login" >
                Login
              </Link>
            </li>
           
          </ul>

          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
