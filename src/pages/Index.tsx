import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { PlansSection } from "@/components/PlansSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        <div id="beneficios">
          <BenefitsGrid />
          <HowItWorks />
        </div>
        <div id="planos">
          <PlansSection />
        </div>
        <TestimonialsSection />
        <div id="faq">
          <FAQSection />
        </div>
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
