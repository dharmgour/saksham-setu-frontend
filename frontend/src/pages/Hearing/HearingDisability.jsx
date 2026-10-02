import { useState } from "react";
import HearingType from "../../component/HearingDisorder/HearingType";
import Conductive from "../../component/HearingDisorder/Conductive";
import SensorineuralHearingLoss from "../../component/HearingDisorder/SensorineuralHearingLoss";
import MixedHearingLoss from "../../component/HearingDisorder/MixedHearingLoss";
const HearingDisability = () => {
  const [activeType, setActiveType] = useState(
    "Conductive Hearing Loss"
  );

  const [language, setLanguage] = useState("en");

  return (
    <main>

      <HearingType
        activeType={activeType}
        setActiveType={setActiveType}
        language={language}
        setLanguage={setLanguage}
      />

      {activeType === "Conductive Hearing Loss" && (
        <Conductive language={language} />
      )}
      {activeType === "Sensorineural Hearing Loss" && (
        <SensorineuralHearingLoss language={language} />
      )}
      {activeType === "Mixed Hearing Loss" && (
        <MixedHearingLoss language={language} />
      )}
  
    </main>
  );
};

export default HearingDisability;