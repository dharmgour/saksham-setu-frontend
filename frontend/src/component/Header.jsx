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

    setMenuOpen(false);
    setDropdownOpen(false);

    setTimeout(() => {
      document.getElementById("ngos")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleMobileDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">

      {/* ===========================
          LOGO
      =========================== */}

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


      {/* ===========================
          NAVIGATION
      =========================== */}

      <nav className={menuOpen ? "navbar active" : "navbar"}>

        {/* HOME */}

        <Link
          to="/"
          onClick={handleLinkClick}
        >
          Home
        </Link>


        {/* ===========================
            DISABILITIES DROPDOWN
        =========================== */}

        <div
          className="dropdown"

          onMouseEnter={() => {
            if (window.innerWidth > 992) {
              setDropdownOpen(true);
            }
          }}

          onMouseLeave={() => {
            if (window.innerWidth > 992) {
              setDropdownOpen(false);
            }
          }}
        >

          <button
            type="button"
            className="drop-btn"

            onClick={handleMobileDropdown}
          >

            Disabilities

            <FaChevronDown
              className="arrow"
              style={{
                transform: dropdownOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",

                transition: "0.3s",
              }}
            />

          </button>


          {/* DROPDOWN OPTIONS */}

          <div
            className={
              dropdownOpen
                ? "dropdown-menu show"
                : "dropdown-menu"
            }
          >

            <Link
              to="/disability/visual"
              onClick={handleLinkClick}
            >
              Visual Impairment
            </Link>

            <Link
              to="/disability/hearing"
              onClick={handleLinkClick}
            >
              Hearing Impairment
            </Link>

            <Link
              to="/disability/mobility"
              onClick={handleLinkClick}
            >
              Mobility Impairment
            </Link>

            <Link
              to="/disability/speech"
              onClick={handleLinkClick}
            >
              Speech Impairment
            </Link>

            <Link
              to="/disability/intellectual"
              onClick={handleLinkClick}
            >
              Intellectual Disability
            </Link>

          </div>

        </div>


        {/* ===========================
            UDID CARD
        =========================== */}

        <Link
          to="/udid-card"
          onClick={handleLinkClick}
        >
          UDID Card
        </Link>


        {/* ===========================
            NGOs
        =========================== */}

        <button
          type="button"
          className="ngo-nav-btn"
          onClick={handleNGOClick}
        >
          NGOs
        </button>


        {/* ===========================
            ABOUT US
        =========================== */}

        <Link
          to="/about"
          onClick={handleLinkClick}
        >
          About Us
        </Link>


        {/* ===========================
            CONTACT US
        =========================== */}

        <Link
          to="/contact"
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>


        {/* ===========================
            MOBILE EXPLORE BUTTON
        =========================== */}

        <button
          type="button"
          className="mobile-btn"
          onClick={() => {
            setMenuOpen(false);
            navigate("/");
          }}
        >
          Explore Resources
        </button>

      </nav>


      {/* ===========================
          DESKTOP EXPLORE BUTTON
      =========================== */}

      <button
        type="button"
        className="explore-btn"
        onClick={() => navigate("/")}
      >
        Explore Resources
      </button>


      {/* ===========================
          MOBILE HAMBURGER
      =========================== */}

      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpen((prev) => !prev);

          // Close dropdown when mobile menu closes
          if (menuOpen) {
            setDropdownOpen(false);
          }
        }}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

    </header>
  );
};

export default Header;