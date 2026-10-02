import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import DisabilitySection from "../component/DisabilitySection";
import NGOSection from "../component/NGOSection";
import UDIDSection from "../component/UDIDSection";
import GovernmentInitiatives from "../component/GovernmentInitiatives";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <>
      <Header />

      <main className="landing-page">
        <HeroSection />
        <DisabilitySection />
        <NGOSection />
        <UDIDSection />
        <GovernmentInitiatives />
         <Footer />
      </main>
    </>
  );
}

export default LandingPage;