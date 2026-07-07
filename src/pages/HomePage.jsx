// src/pages/HomePage.jsx
import HeroBanner        from "../components/home/HeroBanner";
import TeaCategories     from "../components/home/TeaCategories";
import BrandLogos        from "../components/home/BrandLogos";
import SustainabilityInterventions from "../components/home/SustainabilityInterventions";
import InnovationSection from "../components/home/InnovationSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TeaCategories />
      <BrandLogos />
      <SustainabilityInterventions />
      <InnovationSection />
    </>
  );
}
