import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import LandingPage from "./pages/Landing";

import SpeechDisability from "./pages/Speech/SpeechDisability";
import VisualDisability from "./pages/Visual/VisualDisability";
import HearingDisability from "./pages/Hearing/HearingDisability";
import MobilityDisability from "./pages/Mobility/MobilityDisability";
import IntellectualDisability from "./pages/Intellectual/IntellectualDisability";
import UDIDCard from "./Component/UDIDCard";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
function App() {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith("/disability/");

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/disability/speech"
          element={<SpeechDisability />}
        />

        <Route
          path="/disability/visual"
          element={<VisualDisability />}
        />

        <Route
          path="/disability/hearing"
          element={<HearingDisability />}
        />

        <Route
          path="/disability/mobility"
          element={<MobilityDisability />}
        />

        <Route
          path="/disability/intellectual"
          element={<IntellectualDisability />}
        />

        <Route
          path="/udid-card"
          element={<UDIDCard />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;