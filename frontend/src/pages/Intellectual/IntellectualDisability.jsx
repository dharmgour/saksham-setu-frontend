import { useState } from "react";
import IntellectualType from "../../component/IntellectualDisorder/IntellectualType";
import DownSyndrome from "../../component/IntellectualDisorder/DownSyndrome";
import FragileXSyndrome from "../../component/IntellectualDisorder/FragileXSyndrome";


const IntellectualDisability = () => {
  const [activeType, setActiveType] = useState(
    "Mild Intellectual Disability"
  );

  const [language, setLanguage] = useState("en");

  return (
    <main>

      <IntellectualType
        activeType={activeType}
        setActiveType={setActiveType}
        language={language}
        setLanguage={setLanguage}
      />
{activeType === "Down Syndrome" && (
        <DownSyndrome language={language} />
      )}
      {activeType === "Fragile X Syndrome" && (
        <FragileXSyndrome language={language} />
      )}
    </main>
  );
};

export default IntellectualDisability;