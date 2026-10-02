import { useEffect, useState } from "react";
import "./Conductive.css";

const ConductiveHearingLoss = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchConductiveContent = async () => {
      try {
        const response = await fetch(
          "https://saksham-setu-backend.onrender.com/api/hearing/conductive-hearing-loss"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch conductive hearing loss content");
        }

        const data = await response.json();

        console.log("Conductive Hearing Loss API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Conductive Hearing Loss Error:", error);
      }
    };

    fetchConductiveContent();
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
    <section className="conductive-hearing-section">

      <div className="conductive-hearing-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="conductive-hearing-questions">

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

        <div className="conductive-hearing-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="conductive-hearing-answer-item"
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
                  className="conductive-hearing-content-image"
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

export default ConductiveHearingLoss;