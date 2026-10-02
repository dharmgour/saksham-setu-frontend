import { useRef, useState } from "react";
import "./NGOSection.css";
import ngos from "../data/ngos";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const NGOSection = () => {
  const [search, setSearch] = useState("");
  const sliderRef = useRef(null);

  const filteredNGOs = ngos.filter((ngo) =>
    ngo.name.toLowerCase().includes(search.toLowerCase())
  );

  const slide = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector(".ngo-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 25;

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="ngo-section" id="ngos">

      {/* Section Header */}

      <div className="ngo-header">

        <span className="ngo-badge">
          🤝 Together We Empower
        </span>

        <h2>
          Top NGOs Supporting
          <span> Persons with Disabilities</span>
        </h2>

        <p>
          Connect with leading organizations across India working
          for inclusion, empowerment and equal opportunities.
        </p>

      </div>


      {/* Search */}

      <div className="ngo-search">

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search NGOs by name, disability type or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="search-btn">
            <FaSearch />
          </button>

        </div>

      </div>


      {/* NGO Slider */}

      <div className="ngo-slider-wrapper">

        {/* Left Arrow */}

        <button
          className="ngo-arrow ngo-arrow-left"
          onClick={() => slide(-1)}
          aria-label="Previous NGOs"
        >
          <FaChevronLeft />
        </button>


        {/* Cards */}

        <div
          className="ngo-grid"
          ref={sliderRef}
        >

          {filteredNGOs.length > 0 ? (

            filteredNGOs.map((ngo) => (

              <div
                className="ngo-card"
                key={ngo.id}
                style={{
                  "--ngo-color": ngo.color,
                }}
              >

                {/* Logo */}

                <div
                  className="ngo-logo"
                  style={{
                    color: ngo.color,
                    borderColor: ngo.color + "25",
                  }}
                >
                  {ngo.name.charAt(0)}
                </div>


                <h3>
                  {ngo.name}
                </h3>


                <span
                  className="ngo-category"
                  style={{
                    background: ngo.color + "15",
                    color: ngo.color,
                  }}
                >
                  {ngo.disability}
                </span>


                <div className="ngo-location">

                  <FaMapMarkerAlt />

                  {ngo.city}

                </div>


                <p>
                  {ngo.description}
                </p>


                <a
  href={ngo.website}
  target="_blank"
  rel="noopener noreferrer"
  className="ngo-btn"
  style={{
    borderColor: ngo.color,
    color: ngo.color,
  }}
>
  {ngo.button} ↗
</a>

              </div>

            ))

          ) : (

            <div className="ngo-no-result">
              No NGOs found.
            </div>

          )}

        </div>


        {/* Right Arrow */}

        <button
          className="ngo-arrow ngo-arrow-right"
          onClick={() => slide(1)}
          aria-label="Next NGOs"
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
};

export default NGOSection;