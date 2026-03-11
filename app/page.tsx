import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { ServicesSection } from "@/components/layout/sections/services";
import { BeforeAfterSection } from "@/components/layout/sections/before-after";
import { TestimonialSection } from "@/components/layout/sections/testimonials";
import { PricingSection } from "@/components/layout/sections/pricing";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export default function FitForgeLanding() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <div className="gradient-divider mx-auto w-[80%] max-w-4xl" />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <div className="gradient-divider mx-auto w-[80%] max-w-4xl" />
      <BeforeAfterSection />
      <TestimonialSection />
      <PricingSection />
      <div className="gradient-divider mx-auto w-[80%] max-w-4xl" />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
