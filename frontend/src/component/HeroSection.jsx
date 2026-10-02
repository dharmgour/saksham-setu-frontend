import "./HeroSection.css";

import { useEffect, useState } from "react";
import heroContent from "../data/heroContent";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroContent.length);
        setFade(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <span
            className={`hero-badge ${fade ? "fade-in" : "fade-out"}`}
          >
            {heroContent[current].badge}
          </span>

          <h1
            className={`hero-title ${fade ? "fade-in" : "fade-out"}`}
          >
            {heroContent[current].title}
          </h1>

          <p
            className={`hero-description ${fade ? "fade-in" : "fade-out"}`}
          >
            {heroContent[current].description}
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              {heroContent[current].button}
            </button>

            <button className="secondary-btn">
             Explore UDID Card
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;