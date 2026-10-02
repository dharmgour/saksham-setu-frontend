import { useEffect, useState } from "react";
import "./VoiceDisorders.css";

const VoiceDisorders = ({ language }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchVoiceDisordersContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/speech/voice-disorders"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch voice disorders content");
        }

        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error(
          "Error fetching voice disorders content:",
          error
        );
      }
    };

    fetchVoiceDisordersContent();
  }, []);

  const currentLanguage = language === "hi" ? "hi" : "en";

  return (
    <section className="voice-disorders-section">
      <div className="voice-disorders-container">

        {/* Questions from Database */}

        <div className="voice-disorders-questions">
          {content.map((item) => (
            <a
              key={item._id}
              href={`#${item.section}`}
            >
              {item.title?.[currentLanguage]}
            </a>
          ))}
        </div>

        {/* Answers */}

        <div className="voice-disorders-answers">
          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="voice-disorders-answer-item"
            >

              {/* Main Question Heading */}

              <h2>
                {item.title?.[currentLanguage]}
              </h2>

              {/* Content */}

              {Array.isArray(item.content) ? (
                item.content.map((section, index) => (
                  <div
                    key={index}
                    className="voice-disorders-content-section"
                  >

                    {/* Sub Heading */}

                    {section.heading && (
                      <h3>
                        {section.heading?.[currentLanguage]}
                      </h3>
                    )}

                    {/* Paragraph */}

                    {section.text && (
                      <div className="voice-disorders-section-text">
                        {section.text?.[currentLanguage]
                          ?.split("\n\n")
                          .map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    )}

                  </div>
                ))
              ) : (
                item.content?.[currentLanguage]
                  ?.split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VoiceDisorders;