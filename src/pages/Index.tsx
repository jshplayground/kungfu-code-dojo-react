
import React from "react";
import ParallaxHeader from "@/components/ParallaxHeader";
import FightingSkillsTimeline from "@/components/FightingSkillsTimeline";
import CourseFeaturesSection from "@/components/CourseFeaturesSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FaqSection from "@/components/FaqSection";
import DojoGallery from "@/components/DojoGallery";
import EnrollmentSection from "@/components/EnrollmentSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <main className="flex flex-col items-center bg-dark-bg text-light-text overflow-x-hidden">
      <ParallaxHeader />
      <FightingSkillsTimeline />
      <CourseFeaturesSection />
      <TestimonialsMarquee />
      <FaqSection />
      <DojoGallery />
      <EnrollmentSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
