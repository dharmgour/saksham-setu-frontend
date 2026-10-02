import "./DisabilitySection.css";
import disabilities from "../data/disabilities";
import { Link } from "react-router-dom";

const DisabilitySection = () => {
  return (
    <section className="disability-section">

      <div className="section-header">

        <span className="section-badge">
          📖 Explore & Learn
        </span>

        <h2>Explore Disabilities</h2>

        <p>
          Choose a disability category to access information,
          government schemes, assistive technologies and
          support resources.
        </p>

      </div>

      <div className="disability-grid">

        {disabilities.map((item) => (

          <div
            className="disability-card"
            key={item.id}
            style={{ "--card-color": item.color }}
          >

            <div
              className="card-icon"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: item.color,
              }}
            >
              {item.title}
            </h3>

            <p>{item.description}</p>

            <Link
              to={`/disability/${item.id}`}
              className="learn-btn"
            >
              {item.button} →
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
};

export default DisabilitySection;