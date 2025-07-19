import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroShiva from '@/assets/hero-shiva.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroShiva})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-sacred text-5xl md:text-7xl lg:text-8xl mb-6 float">
            हर हर महादेव
          </h1>
          <h2 className="text-divine text-xl md:text-2xl lg:text-3xl mb-4 font-light">
            Har Har Mahadev
          </h2>
          <p className="text-divine text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Welcome to the sacred realm of Lord Shiva. Immerse yourself in devotion, 
            peace, and the divine blessings of Baba Bholenath during the holy month of Sawan.
          </p>
          <button 
            onClick={scrollToAbout}
            className="btn-divine group"
          >
            Explore Devotion
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;