import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleNGOClick = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("ngos")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">

        <img
          src={logo}
          alt="Saksham Setu Logo"
          className="logo-image"
        />

        <div className="logo-text">

          <h2>Saksham Setu</h2>

          <p>Empowering Abilities, Connecting Lives</p>

        </div>

      </div>


      {/* Navigation */}
      <nav className={menuOpen ? "navbar active" : "navbar"}>

        <Link to="/">
          Home
        </Link>


        {/* Disabilities Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >

          <button className="drop-btn">

            Disabilities

            <FaChevronDown className="arrow" />

          </button>


          <div
            className={
              dropdownOpen
                ? "dropdown-menu show"
                : "dropdown-menu"
            }
          >

            <Link to="/disability/visual">
              Visual Impairment
            </Link>

            <Link to="/disability/hearing">
              Hearing Impairment
            </Link>

            <Link to="/disability/mobility">
              Mobility Impairment
            </Link>

            <Link to="/disability/speech">
              Speech Impairment
            </Link>

            <Link to="/disability/intellectual">
              Intellectual Disability
            </Link>

          </div>

        </div>


        {/* UDID Card */}
        <Link to="/udid-card">
          UDID Card
        </Link>


        {/* NGOs */}
        <button
          className="ngo-nav-btn"
          onClick={handleNGOClick}
        >
          NGOs
        </button>


        <Link to="/about">
          About Us
        </Link>

       <Link to="/contact">
  Contact Us
</Link>


        {/* Mobile Button */}
        <button className="mobile-btn">
          Explore Resources
        </button>

      </nav>


      {/* Desktop Button */}
      <button className="explore-btn">
        Explore Resources
      </button>


      {/* Hamburger */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

    </header>
  );
};

export default Header;