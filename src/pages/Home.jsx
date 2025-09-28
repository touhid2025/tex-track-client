import React from 'react';
import HeroSection from '../component/HeroSection';
import IndustryCarousel from '../component/home/IndustryCarousel';
import FAQSection from '../component/home/FAQSection';
import PartnersSection from '../component/home/PartnersSection';
import ReviewsSection from '../component/home/ReviewsSection';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <IndustryCarousel></IndustryCarousel>
      <FAQSection></FAQSection>
      <PartnersSection></PartnersSection>
      <ReviewsSection></ReviewsSection>
    </div>
  );
};

export default Home;