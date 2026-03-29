import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FlightStorySection from "@/components/FlightStorySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeatureCards />
        <HowItWorks />
        <ScreenshotGallery />
        <FlightStorySection />
        <PricingSection preview />
        <FAQSection preview />
      </main>
      <Footer />
    </>
  );
}
