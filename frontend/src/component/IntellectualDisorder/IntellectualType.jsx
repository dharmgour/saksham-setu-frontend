import "./IntellectualType.css";

const IntellectualType = ({
  activeType,
  setActiveType,
  language,
  setLanguage,
}) => {
  const intellectualTypes = [
    "Down Syndrome",
    "Fragile X Syndrome",
    
  ];

  return (
    <section className="intellectual-type-section">

      <div className="intellectual-type-list">

        {intellectualTypes.map((type) => (
          <button
            key={type}
            className={`intellectual-type-btn ${
              activeType === type ? "active" : ""
            }`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}

      </div>

      <div className="intellectual-language-switch">

        <button
          className={`intellectual-language-btn ${
            language === "en" ? "active" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>

        <button
          className={`intellectual-language-btn ${
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

export default IntellectualType;