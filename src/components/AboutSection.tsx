import React from 'react';
import shivlingWorship from '@/assets/shivling-worship.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-sacred">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-sacred text-4xl md:text-5xl mb-6">
              सावन और भोलेनाथ
            </h2>
            <h3 className="text-divine text-2xl md:text-3xl mb-4 font-semibold">
              The Sacred Month of Sawan
            </h3>
            <div className="text-divine text-lg leading-relaxed space-y-4">
              <p>
                Sawan, the fifth month of the Hindu calendar, is considered the most auspicious 
                time to worship Lord Shiva. During this sacred period, devotees observe fasts, 
                offer prayers, and seek the divine blessings of Baba Bholenath.
              </p>
              <p>
                Lord Shiva, known as the destroyer of evil and the transformer, represents 
                the divine consciousness that transcends time and space. His benevolent nature 
                makes him beloved as Bholenath - the innocent and simple-hearted lord who 
                easily blesses his devotees.
              </p>
              <p>
                The tradition of Kanwar Yatra, where devotees carry holy water from the 
                Ganges to offer at Shiva temples, epitomizes the devotion and surrender 
                that characterizes this holy month.
              </p>
            </div>
            <div className="pt-4">
              <div className="text-accent text-2xl font-semibold mb-2">
                🕉️ Om Namah Shivaya 🕉️
              </div>
              <p className="text-muted-foreground italic">
                "Surrender to the divine will of Lord Shiva and find peace within"
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-sacred">
              <img 
                src={shivlingWorship} 
                alt="Sacred Shivling with offerings"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;