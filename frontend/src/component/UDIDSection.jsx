import "./UDIDSection.css";
import udidBenefits from "../data/udidBenefits";
import { Link } from "react-router-dom";

const UDIDSection = () => {
  return (

    
    <section className="udid-section">

        <div className="udid-header">

    <span className="udid-badge">
        🪪 One Card, Multiple Benefits
    </span>

    <h2>
        Benefits of
        <span> UDID Card</span>
    </h2>

    <p>
        The Unique Disability ID (UDID) Card offers a
        single national identity for persons with
        disabilities and provides seamless access to
        government schemes, services and support.
    </p>

</div>

      
      <div className="udid-container">

        <div className="udid-left">

          {udidBenefits.map((item) => (

            <div
              className="timeline-item"
              key={item.id}
            >

              <div className="timeline-number">

                {item.id}

              </div>

              <div className="timeline-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="udid-bottom">

        <div className="bottom-content">

          <h3>
            Want to Apply for a UDID Card?
          </h3>

          <p>
            Learn eligibility, required documents,
            application process and complete guide.
          </p>

        </div>

        <Link
          to="/udid-card"
          className="guide-btn"
        >
          Explore Complete Guide →
        </Link>

      </div>

    </section>

  );
};

export default UDIDSection;