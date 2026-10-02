import { useEffect, useState } from "react";
import "./Apraxia.css";

const Apraxia = ({ language }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchApraxiaContent = async () => {
      try {
        const response = await fetch(
          "https://saksham-setu-backend.onrender.com/api/speech/apraxia"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch apraxia content");
        }

        const data = await response.json();

        console.log("Apraxia API Data:", data);

        setContent(data);
      } catch (error) {
        console.error("Error fetching apraxia content:", error);
      }
    };

    fetchApraxiaContent();
  }, []);

  const currentLanguage = language === "hi" ? "hi" : "en";

  return (
    <section className="apraxia-section">
      <div className="apraxia-container">

        {/* Questions from Database */}

        <div className="apraxia-questions">
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

        <div className="apraxia-answers">
          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="apraxia-answer-item"
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
                    className="apraxia-content-section"
                  >

                    {section.heading && (
                      <h3>
                        {section.heading?.[currentLanguage]}
                      </h3>
                    )}

                    {section.text && (
                      <div className="apraxia-section-text">
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

export default Apraxia;