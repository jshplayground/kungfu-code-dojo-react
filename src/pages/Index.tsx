
import React from "react";
import ParallaxHeader from "@/components/ParallaxHeader";
import KungFuVideoSection from "@/components/KungFuVideoSection";
import FightingSkillsTimeline from "@/components/FightingSkillsTimeline";
import CourseFeaturesSection from "@/components/CourseFeaturesSection";
import AnimatedTestimonialsSection from "@/components/AnimatedTestimonialsSection";
import FaqSection from "@/components/FaqSection";
import DojoGallery from "@/components/DojoGallery";
import EnrollmentSection from "@/components/EnrollmentSection";
import SiteFooter from "@/components/SiteFooter";
import BackgroundPaths from "@/components/ui/background-paths";

const Index = () => {
  return (
    <main className="flex flex-col items-center bg-dark-bg text-light-text overflow-x-hidden relative">
      <BackgroundPaths />
      <ParallaxHeader />
      <KungFuVideoSection />
      <FightingSkillsTimeline />
      <CourseFeaturesSection />
      <AnimatedTestimonialsSection />
      <FaqSection />
      <DojoGallery />
      <EnrollmentSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
