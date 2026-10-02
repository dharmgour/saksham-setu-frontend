import { useEffect, useState } from "react";
import "./FragileXSyndrome.css";

const FragileXSyndrome = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchFragileXSyndromeContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/intellectual/fragile-x-syndrome"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch Fragile X syndrome content"
          );
        }

        const data = await response.json();

        console.log("Fragile X Syndrome API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Fragile X Syndrome Error:", error);
      }
    };

    fetchFragileXSyndromeContent();
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
    <section className="fragile-x-syndrome-section">

      <div className="fragile-x-syndrome-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="fragile-x-syndrome-questions">

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

        <div className="fragile-x-syndrome-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="fragile-x-syndrome-answer-item"
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
                  className="fragile-x-syndrome-content-image"
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

export default FragileXSyndrome;