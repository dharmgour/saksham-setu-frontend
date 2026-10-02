import { useEffect, useState } from "react";
import "./MultipleSclerosis.css";

const MultipleSclerosis = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchMultipleSclerosisContent = async () => {
      try {
        const response = await fetch(
          "https://saksham-setu-backend.onrender.com/api/mobility/multiple-sclerosis"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch multiple sclerosis content"
          );
        }

        const data = await response.json();

        console.log(
          "Multiple Sclerosis API Data:",
          data
        );

        setContent(data);
      } catch (error) {
        console.error(
          "Multiple Sclerosis Error:",
          error
        );
      }
    };

    fetchMultipleSclerosisContent();
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
      const heading = paragraph.slice(
        0,
        colonIndex + 1
      );

      const text = paragraph.slice(
        colonIndex + 1
      );

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

    return <p key={index}>{paragraph}</p>;
  };

  return (
    <section className="multiple-sclerosis-section">

      <div className="multiple-sclerosis-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="multiple-sclerosis-questions">

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

        <div className="multiple-sclerosis-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="multiple-sclerosis-answer-item"
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
                  className="multiple-sclerosis-content-image"
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

export default MultipleSclerosis;