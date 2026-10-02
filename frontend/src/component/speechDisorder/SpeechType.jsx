const SpeechType = ({ activeType, setActiveType, language, setLanguage }) => {

    const speechTypes = [
        "Stammering",
        "Lipsing",
        "Apraxia",
        "Dysarthria",
        "Voice Disorders",
    ];

    return (

        <section className="speech-type-section">

            <div className="speech-type-list">

                {speechTypes.map((type) => (

                    <button
                        key={type}
                        className={`speech-type-btn ${
                            activeType === type ? "active" : ""
                        }`}
                        onClick={() => setActiveType(type)}
                    >
                        {type}
                    </button>

                ))}

            </div>


            <div className="language-switch">

                <button
                    className={`language-btn ${
                        language === "en" ? "active" : ""
                    }`}
                    onClick={() => setLanguage("en")}
                >
                    English
                </button>

                <button
                    className={`language-btn ${
                        language === "hi" ? "active" : ""
                    }`}
                    onClick={() => setLanguage("hi")}
                >
                    हिन्दी
                </button>

            </div>

        </section>

    );
};

export default SpeechType;