import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logos.png";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
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
    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            ABOUT
        ========================= */}

        <div className="footer-about">

          <div className="footer-logo">

            <img
              src={logo}
              alt="Saksham Setu Logo"
              className="footer-logo-img"
            />

            <div>
              <h3>Saksham Setu</h3>

              <p>
                Empowering Abilities, Connecting Lives
              </p>
            </div>

          </div>

          <p className="footer-description">
            Saksham Setu is dedicated to empowering persons with
            disabilities by providing reliable information,
            accessibility resources and support in one place.
          </p>

          <div className="footer-social">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:support@sakshamsetu.in">
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}

        <div className="footer-links">

          <h4>Quick Links</h4>

          <Link to="/">
            Home
          </Link>

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


        {/* =========================
            RESOURCES
        ========================= */}

        <div className="footer-links">

          <h4>Resources</h4>

          <Link to="/udid-card">
            UDID Card
          </Link>

          <button
            className="footer-nav-btn"
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

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-contact">

          <h4>Contact</h4>

          <div className="contact-item">

            <FaEnvelope />

            <a href="mailto:support@sakshamsetu.in">
              support@sakshamsetu.in
            </a>

          </div>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>
              Indore, Madhya Pradesh, India
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Saksham Setu. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;