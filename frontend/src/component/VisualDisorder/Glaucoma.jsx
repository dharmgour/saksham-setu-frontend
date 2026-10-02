import { useEffect, useState } from "react";
import "./Glaucoma.css";

const Glaucoma = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchGlaucomaContent = async () => {
      try {
        const response = await fetch(
          "https://saksham-setu-backend.onrender.com/api/visual/glaucoma"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch glaucoma content");
        }

        const data = await response.json();

        console.log("Glaucoma API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Glaucoma Error:", error);
      }
    };

    fetchGlaucomaContent();
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
    // Example:
    // Age: Aging is a major risk factor.
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
    <section className="glaucoma-section">
      <div className="glaucoma-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="glaucoma-questions">

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

        <div className="glaucoma-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="glaucoma-answer-item"
            >

              <h2>
                {item.title?.[language]}
              </h2>

              {/* ==========================================
                  IMAGE
              ========================================== */}

              <div className="glaucoma-content-layout">

  <div className="glaucoma-content-text">
    {item.content?.[language]
      ?.split("\n\n")
      .map((paragraph, index) =>
        renderParagraph(paragraph.trim(), index)
      )}
  </div>

  {item.image && (
    <div className="glaucoma-content-image-wrapper">
      <img
        src={item.image}
        alt={item.title?.[language]}
        className="glaucoma-content-image"
      />
    </div>
  )}

</div>
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

export default Glaucoma;