import { useState } from "react";

import MobilityType from "../../component/MobilityDisorder/MobilityType";
import CerebralPalsy from "../../component/MobilityDisorder/CerebralPalsy";
import SpinalCordInjury from "../../component/MobilityDisorder/SpinalCordInjury";
import MultipleSclerosis from "../../component/MobilityDisorder/MultipleSclerosis";

const MobilityDisability = () => {
  const [activeType, setActiveType] = useState("cerebral-palsy");

  const [language, setLanguage] = useState("en");

  return (
    <main>

      <MobilityType
        activeType={activeType}
        setActiveType={setActiveType}
        language={language}
        setLanguage={setLanguage}
      />

      {activeType === "cerebral-palsy" && (
        <CerebralPalsy language={language} />
      )}

      {activeType === "spinal-cord-injury" && (
        <SpinalCordInjury language={language} />
      )}

      {activeType === "multiple-sclerosis" && (
        <MultipleSclerosis language={language} />
      )}

    </main>
  );
};

export default MobilityDisability;