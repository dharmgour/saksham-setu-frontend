import { useEffect, useState } from "react";
import "./DiabeticRetinopathy.css";

const DiabeticRetinopathy = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchDiabeticRetinopathyContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/visual/diabetic-retinopathy"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch diabetic retinopathy content");
        }

        const data = await response.json();

        console.log("Diabetic Retinopathy API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Diabetic Retinopathy Error:", error);
      }
    };

    fetchDiabeticRetinopathyContent();
  }, []);

  // ==========================================
  // CONTENT RENDERER
  // ==========================================

  const renderParagraph = (paragraph, index) => {
    // ==========================================
    // LINK FORMAT
    // [[Name|URL]]
    // ==========================================

    const linkMatch = paragraph.match(
      /^\[\[(.*?)\|(https?:\/\/.*?)\]\](.*)$/s
    );

    if (linkMatch) {
      const name = linkMatch[1];
      const url = linkMatch[2];
      const description = linkMatch[3];

      return (
        <p key={index}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="content-link"
          >
            <strong>{name}</strong>
          </a>

          {description}
        </p>
      );
    }

    // ==========================================
    // HEADING + CONTENT
    // ==========================================

    const colonIndex = paragraph.indexOf(":");

    if (colonIndex !== -1) {
      const heading = paragraph.slice(0, colonIndex + 1);
      const text = paragraph.slice(colonIndex + 1);

      return (
        <p key={index}>
          <strong>{heading}</strong> {text.trim()}
        </p>
      );
    }

    // ==========================================
    // NORMAL PARAGRAPH
    // ==========================================

    return <p key={index}>{paragraph}</p>;
  };

  return (
    <section className="diabetic-retinopathy-section">

      <div className="diabetic-retinopathy-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="diabetic-retinopathy-questions">

          {content.map((item) => (
            <a
              key={item._id}
              href={`#${item.section}`}
            >
              {item.title?.[language]}
            </a>
          ))}

        </div>


        {/* ==========================================
            ANSWERS
        ========================================== */}

        <div className="diabetic-retinopathy-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="diabetic-retinopathy-answer-item"
            >

              <h2>
                {item.title?.[language]}
              </h2>


              {/* ==========================================
                  IMAGE
              ========================================== */}

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title?.[language]}
                  className="diabetic-retinopathy-content-image"
                />
              )}


              {/* ==========================================
                  CONTENT
              ========================================== */}

              {item.content?.[language]
                ?.split("\n\n")
                .map((paragraph, index) =>
                  renderParagraph(paragraph.trim(), index)
                )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DiabeticRetinopathy;