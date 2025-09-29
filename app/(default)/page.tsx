export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Contact from "@/components/contact";
import VisionMission from "@/components/mission";
import TechStack from "@/components/techstack";
import Leadership from "@/components/leadership";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
    <Hero />
      <VisionMission />
      <BusinessCategories />
      <TechStack />
      <FeaturesPlanet />
      <Leadership />
      <LargeTestimonial />
      <FAQ />
      <Contact/>

      {/* <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta /> */}
    </>
  );
}
