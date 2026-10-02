import { useEffect, useState } from "react";
import "./Lipsing.css";

const Lipsing = ({ language }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchLipsingContent = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/speech/lisping"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch lisping content");
        }

        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching lisping content:", error);
      }
    };

    fetchLipsingContent();
  }, []);

  return (
    <section className="lisping-section">

      <div className="lisping-container">

        {/* Questions from Database */}

        <div className="lisping-questions">

          {content.map((item) => (
            <a
              key={item._id}
              href={`#${item.section}`}
            >
              {item.title?.[language]}
            </a>
          ))}

        </div>

        {/* Answers */}

        <div className="lisping-answers">

          {content.map((item) => (
            <div
              key={item._id}
              id={item.section}
              className="lisping-answer-item"
            >

              {/* Main Question Heading */}

              <h2>
                {item.title?.[language]}
              </h2>

              {/* Content */}

              {Array.isArray(item.content) ? (

                item.content.map((section, index) => (
                  <div
                    key={index}
                    className="lisping-content-section"
                  >

                    {/* Sub Heading */}

                    {section.heading && (
                      <h3>
                        {section.heading?.[language]}
                      </h3>
                    )}

                    {/* Paragraph */}

                    {section.text && (
                      <div className="lisping-section-text">

                        {section.text?.[language]
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

                item.content?.[language]
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

export default Lipsing;