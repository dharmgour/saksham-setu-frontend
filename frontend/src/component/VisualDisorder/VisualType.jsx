import "./VisualType.css";

const VisualType = ({
  activeType,
  setActiveType,
  language,
  setLanguage,
}) => {
  const visualTypes = [
    "Blindness",
    "Low Vision",
    "Cataract",
    "Glaucoma",
    "Diabetic Retinopathy",
    "Macular Degeneration",
  ];

  return (
    <section className="visual-type-section">

      <div className="visual-type-list">
        {visualTypes.map((type) => (
          <button
            key={type}
            className={`visual-type-btn ${
              activeType === type ? "active" : ""
            }`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="language-switch">

        <button
          className={`language-btn ${
            language === "en" ? "active" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>

        <button
          className={`language-btn ${
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

export default VisualType;