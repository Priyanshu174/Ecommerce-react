import React, { useState } from "react";
import { Link } from "react-router-dom"
const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  // Scroll to a specific section on the page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenu(false); // Close the mobile menu after clicking on a link
  };

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}>
            <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <a onClick={() => scrollToSection("flash")}>Flash Deals</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("top")}>Top Deals</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("new")}>New</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("footer")}>Contact</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("footer")}>About Us</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
