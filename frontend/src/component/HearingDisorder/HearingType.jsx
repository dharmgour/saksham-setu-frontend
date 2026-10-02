import "./HearingType.css";

const HearingType = ({
  activeType,
  setActiveType,
  language,
  setLanguage,
}) => {
  const hearingTypes = [
    "Conductive Hearing Loss",
    "Sensorineural Hearing Loss",
    "Mixed Hearing Loss",
  ];

  return (
    <section className="hearing-type-section">

      <div className="hearing-type-list">

        {hearingTypes.map((type) => (
          <button
            key={type}
            className={`hearing-type-btn ${
              activeType === type ? "active" : ""
            }`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}

      </div>

      <div className="hearing-language-switch">

        <button
          className={`hearing-language-btn ${
            language === "en" ? "active" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>

        <button
          className={`hearing-language-btn ${
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

export default HearingType;