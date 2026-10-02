import { useState } from "react";
import VisualType from "../../component/VisualDisorder/VisualType";
import Blindness from "../../component/VisualDisorder/Blindness";
import LowVision from "../../component/VisualDisorder/LowVision";
import Cataract from "../../component/VisualDisorder/Cataract";
import Glaucoma from "../../component/VisualDisorder/Glaucoma";
import DiabeticRetinopathy from "../../component/VisualDisorder/DiabeticRetinopathy";
import MacularDegeneration from "../../component/VisualDisorder/MacularDegeneration";
import "./VisualDisability.css";

const VisualDisability = () => {
  const [activeType, setActiveType] = useState("Blindness");
  const [language, setLanguage] = useState("en");

  return (
    <main>

      <VisualType
        activeType={activeType}
        setActiveType={setActiveType}
        language={language}
        setLanguage={setLanguage}
      />

{activeType === "Blindness" && (
  <Blindness language={language} />
)} 

{activeType === "Low Vision" && (
  <LowVision language={language} />
)}

{activeType === "Cataract" && (
  <Cataract language={language} />
)}

{activeType === "Glaucoma" && (
  <Glaucoma language={language} />
)}  
{activeType === "Diabetic Retinopathy" && (
  <DiabeticRetinopathy language={language} />
)}  
{activeType === "Macular Degeneration" && (
  <MacularDegeneration language={language} />
)}
     </main>
  );
};

export default VisualDisability;