import "./GovernmentInitiatives.css";
import initiatives from "../data/initiatives";

const GovernmentInitiatives = () => {
  return (

    <section className="initiative-section">

      {/* Header */}

      <div className="initiative-header">

    <span className="initiative-badge">
        🇮🇳 Government of India
    </span>

    <h2>
        Government
        <span> Initiatives</span>
    </h2>

    <p>
        Discover major Government of India initiatives that empower
        persons with disabilities through accessibility, education,
        employment, healthcare and equal opportunities, helping them
        lead a more independent and inclusive life.
    </p>

</div>

      {/* Initiatives */}

      <div className="initiative-container">

        {initiatives.map((item) => (

          <div
            className="initiative-item"
            key={item.id}
          >

            <h3>

              {item.title}

            </h3>

            <p>

              {item.description}

            </p>

            <a
              href={item.website}
              target="_blank"
              rel="noreferrer"
              className="initiative-btn"
            >

              Visit Official Website ↗

            </a>

          </div>

        ))}

      </div>

    </section>

  );
};

export default GovernmentInitiatives;