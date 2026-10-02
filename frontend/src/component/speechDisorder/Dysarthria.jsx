import { useEffect, useState } from "react";
import "./Dysarthria.css";

const Dysarthria = ({ language }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchDysarthriaContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/speech/dysarthria"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch dysarthria content");
        }

        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching dysarthria content:", error);
      }
    };

    fetchDysarthriaContent();
  }, []);

  const currentLanguage = language === "hi" ? "hi" : "en";

  return (
    <section className="dysarthria-section">
      <div className="dysarthria-container">

        {/* Questions from Database */}

        <div className="dysarthria-questions">
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

        <div className="dysarthria-answers">
          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="dysarthria-answer-item"
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
                    className="dysarthria-content-section"
                  >

                    {/* Sub Heading */}

                    {section.heading && (
                      <h3>
                        {section.heading?.[currentLanguage]}
                      </h3>
                    )}

                    {/* Paragraph */}

                    {section.text && (
                      <div className="dysarthria-section-text">
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

export default Dysarthria;