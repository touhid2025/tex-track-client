import React from "react";
import AboutHero from "../component/about/AbouteHero";
import FeaturesSection from "../component/about/FeaturesSection";
import WorkflowSection from "../component/about/WorkflowSection";
import TeamSection from "../component/about/TeamSection";
import CallToActionSection from "../component/about/CallToActionSection";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <FeaturesSection />
      <WorkflowSection />
      <TeamSection />
      <CallToActionSection />
    </div>
  );
};

export default AboutPage;
