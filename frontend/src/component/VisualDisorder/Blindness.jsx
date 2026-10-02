import { useEffect, useState } from "react";
import "./Blindness.css";

const Blindness = ({ language = "en" }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchBlindnessContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/visual/blindness"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blindness content");
        }

        const data = await response.json();

        console.log("Blindness API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Blindness Error:", error);
      }
    };

    fetchBlindnessContent();
  }, []);

  // ==========================================
  // CONTENT RENDERER
  // ==========================================

  const renderParagraph = (paragraph, index) => {
    // NGO LINK FORMAT:
    // [[NGO Name|https://website.com/]]

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
    // NORMAL HEADING + CONTENT
    // ==========================================

    const colonIndex = paragraph.indexOf(":");

    if (colonIndex !== -1) {
      const heading = paragraph.slice(0, colonIndex + 1);
      const text = paragraph.slice(colonIndex + 1);

      return (
        <p key={index}>
          <strong>{heading}</strong>
          {text}
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
    <section className="blindness-section">

      <div className="blindness-container">

        {/* ==========================================
            QUESTIONS
        ========================================== */}

        <div className="blindness-questions">

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

        <div className="blindness-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="blindness-answer-item"
            >

              <h2>
                {item.title?.[language]}
              </h2>

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

export default Blindness;