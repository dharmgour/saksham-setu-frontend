import "./MobilityType.css";

const MobilityType = ({
  activeType,
  setActiveType,
  language,
  setLanguage,
}) => {
  const mobilityTypes = [
    "cerebral-palsy",
    "spinal-cord-injury",
    "multiple-sclerosis",
  ];

  return (
    <section className="mobility-type-section">

      <div className="mobility-type-list">

        {mobilityTypes.map((type) => (
          <button
            key={type}
            className={`mobility-type-btn ${
              activeType === type ? "active" : ""
            }`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}

      </div>

      <div className="mobility-language-switch">

        <button
          className={`mobility-language-btn ${
            language === "en" ? "active" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>

        <button
          className={`mobility-language-btn ${
            language === "hi" ? "active" : ""
          }`}
          onClick={() => setLanguage("hi")}
        >
          हिन्दी
        </button>

      </div>

    </section>
  );
};

export default MobilityType;