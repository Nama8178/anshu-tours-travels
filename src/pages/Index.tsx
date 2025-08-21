import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import TaxiBookingSection from "@/components/TaxiBookingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <TaxiBookingSection />
    </div>
  );
};

export default Index;
