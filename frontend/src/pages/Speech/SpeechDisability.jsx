import { useState } from "react";
import SpeechType from "../../component/speechDisorder/SpeechType";
import Stammering from "../../component/speechDisorder/Stammering";
import Lipsing from "../../component/speechDisorder/Lipsing";
import Apraxia from "../../component/speechDisorder/Apraxia";
import Dysarthria from "../../component/speechDisorder/Dysarthria";
import VoiceDisorders from "../../component/speechDisorder/VoiceDisorders";
import "./SpeechDisability.css";

const SpeechDisability = () => {
  const [activeType, setActiveType] = useState("Stammering");
  const [language, setLanguage] = useState("en");

  return (
    <main>

      <SpeechType
        activeType={activeType}
        setActiveType={setActiveType}
        language={language}
        setLanguage={setLanguage}
      />

      {activeType === "Stammering" && (
        <Stammering language={language} />
      )}

      {activeType === "Lipsing" && (
        <Lipsing language={language} />
      )}

      {activeType === "Apraxia" && (
        <Apraxia language={language} />
      )}
      {activeType === "Dysarthria" && (
  <Dysarthria language={language} />
)}

{activeType === "Voice Disorders" && (
  <VoiceDisorders language={language} />
)}
    </main>
  );
};

export default SpeechDisability;