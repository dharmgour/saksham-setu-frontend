import { useEffect, useState } from "react";
import "./Stammering.css";
const Stammering = ({ language }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://saksham-setu-backend.onrender.com/api/speech/stammering")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch content");
        }

        return response.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load content");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="stammering-section">

      <div className="stammering-container">

        {/* Questions */}

        <div className="stammering-questions">

          {content.map((item, index) => (
            <a
              key={item._id}
              href={`#${item.section}`}
            >
              {index + 1}. {item.title[language === "hi" ? "hi" : "en"]}
            </a>
          ))}

        </div>


        {/* Answers */}

        <div className="stammering-answers">

 {content.map((item) => (
  <div key={item._id} id={item.section} className="stammering-answer-item">

    <h2>
      {item.title[language === "hi" ? "hi" : "en"]}
    </h2>

    {item.section === "tisa" && item.logo && (
  <img
    src={item.logo}
    alt="TISA Logo"
    className="tisa-logo"
  />
)}

  {Array.isArray(item.content) ? (
  item.content.map((section, index) => (
    <div key={index} className="meditation-content-section">

      {section.heading && (
        <h3>
          {section.heading[language === "hi" ? "hi" : "en"]}
        </h3>
      )}

      {section.text[language === "hi" ? "hi" : "en"]
        .split("\n\n")
        .map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>
            {paragraph}
          </p>
        ))}
    </div>
  ))
) : (
  item.content[language === "hi" ? "hi" : "en"]
    .split("\n\n")
    .map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
)}

    {item.section === "tisa" && item.selfHelpGroups && (
      <div className="self-help-groups">
        <h3>
          {language === "hi"
            ? "Self-Help Groups"
            : "Self-Help Groups"}
        </h3>

       <div className="city-list">
  {item.selfHelpGroups.map((group) => (
    <a
      key={group.city}
      href={group.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {group.city}
    </a>
  ))}
</div>
      </div>
    )}

  </div>
))}
        </div>

      </div>

    </section>
  );
};

export default Stammering;