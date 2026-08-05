import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import HowItWorks from "@/components/HowItWorks";
import ForWhomSection from "@/components/ForWhomSection";
import IntegrationsBar from "@/components/IntegrationsBar";
import SecuritySection from "@/components/SecuritySection";
import MobileShowcase from "@/components/MobileShowcase";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <LiveDemoSection />
        <HowItWorks />
        <ForWhomSection />
        <Testimonials />
        <SecuritySection />
        <MobileShowcase />
        <IntegrationsBar />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
