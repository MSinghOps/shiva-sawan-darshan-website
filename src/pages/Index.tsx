import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BhajanSection from '@/components/BhajanSection';
import GallerySection from '@/components/GallerySection';
import MantraSlider from '@/components/MantraSlider';
import DevoteeSection from '@/components/DevoteeSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BhajanSection />
      <GallerySection />
      <MantraSlider />
      <DevoteeSection />
      <Footer />
    </div>
  );
};

export default Index;
