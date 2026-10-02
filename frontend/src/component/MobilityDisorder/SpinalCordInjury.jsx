import { useEffect, useState } from "react";
import "./SpinalCord.css";

const SpinalCordInjury = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchSpinalCordInjuryContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/mobility/spinal-cord-injury"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch spinal cord injury content"
          );
        }

        const data = await response.json();

        console.log("Spinal Cord Injury API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Spinal Cord Injury Error:", error);
      }
    };

    fetchSpinalCordInjuryContent();
  }, []);

  // ==========================================
  // CONTENT RENDERER
  // ==========================================

  const renderParagraph = (paragraph, index) => {

    // ==========================================
    // SUB HEADING
    // ### Heading
    // ==========================================

    if (paragraph.startsWith("### ")) {
      const heading = paragraph
        .replace("### ", "")
        .trim();

      return (
        <h3 key={index}>
          {heading}
        </h3>
      );
    }

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
    // Example:
    // Symptoms: कुछ symptoms...
    // ==========================================

    const colonIndex = paragraph.indexOf(":");

    if (colonIndex !== -1) {
      const heading = paragraph.slice(0, colonIndex + 1);
      const text = paragraph.slice(colonIndex + 1);

      return (
        <p key={index}>
          <strong>{heading}</strong>{" "}
          {text.trim()}
        </p>
      );
    }

    // ==========================================
    // NORMAL PARAGRAPH
    // ==========================================

    return (
      <p key={index}>
        {paragraph}
      </p>
    );
  };

  return (
    <section className="spinal-cord-injury-section">

      <div className="spinal-cord-injury-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="spinal-cord-injury-questions">

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

        <div className="spinal-cord-injury-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="spinal-cord-injury-answer-item"
            >

              {/* ==========================================
                  MAIN HEADING
              ========================================== */}

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
                  className="spinal-cord-injury-content-image"
                />
              )}


              {/* ==========================================
                  CONTENT
              ========================================== */}

              {item.content?.[language]
                ?.split("\n\n")
                .map((paragraph, index) =>
                  renderParagraph(
                    paragraph.trim(),
                    index
                  )
                )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SpinalCordInjury;