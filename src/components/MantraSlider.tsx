import React, { useState, useEffect } from 'react';

const MantraSlider = () => {
  const [currentMantra, setCurrentMantra] = useState(0);

  const mantras = [
    {
      sanskrit: "ॐ नमः शिवाय",
      transliteration: "Om Namah Shivaya",
      meaning: "I bow to Lord Shiva, the auspicious one",
      description: "The most sacred mantra dedicated to Lord Shiva"
    },
    {
      sanskrit: "हर हर महादेव",
      transliteration: "Har Har Mahadev",
      meaning: "Hail to the great god Shiva",
      description: "The divine chant that resonates with Shiva's energy"
    },
    {
      sanskrit: "ॐ त्र्यम्बकं यजामहे",
      transliteration: "Om Tryambakam Yajamahe",
      meaning: "We meditate on the three-eyed one",
      description: "The Maha Mrityunjaya mantra for protection and healing"
    },
    {
      sanskrit: "शिवो हम्",
      transliteration: "Shivo Ham",
      meaning: "I am Shiva (divine consciousness)",
      description: "Mantra for self-realization and unity with divine"
    },
    {
      sanskrit: "ॐ शिवशक्त्यैकरूपिणी",
      transliteration: "Om Shivashaktyaikarupini",
      meaning: "Shiva and Shakti are one form",
      description: "Celebrating the unity of consciousness and energy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMantra((prev) => (prev + 1) % mantras.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [mantras.length]);

  return (
    <section className="py-20 bg-temple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sacred text-4xl md:text-5xl mb-4">
            पवित्र मंत्र
          </h2>
          <h3 className="text-divine text-2xl md:text-3xl mb-6">
            Sacred Mantras
          </h3>
          <p className="text-divine text-lg max-w-2xl mx-auto">
            Chant these divine mantras to connect with Lord Shiva's cosmic energy 
            and experience inner peace and spiritual transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-sacred overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="text-9xl text-accent font-['Shrikhand'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                ॐ
              </div>
            </div>

            {/* Mantra Content */}
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <h3 className="text-sacred text-5xl md:text-6xl mb-4 fade-in">
                  {mantras[currentMantra].sanskrit}
                </h3>
                <h4 className="text-divine text-2xl md:text-3xl mb-6 font-semibold">
                  {mantras[currentMantra].transliteration}
                </h4>
                <p className="text-accent text-xl md:text-2xl mb-4 italic">
                  "{mantras[currentMantra].meaning}"
                </p>
                <p className="text-muted-foreground text-lg">
                  {mantras[currentMantra].description}
                </p>
              </div>

              {/* Mantra Navigation Dots */}
              <div className="flex justify-center space-x-3">
                {mantras.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMantra(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMantra 
                        ? 'bg-accent shadow-golden' 
                        : 'bg-muted hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 border-2 border-accent/20 rounded-full float"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-primary/20 rounded-full float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Chanting Instructions */}
          <div className="mt-8 text-center">
            <p className="text-divine text-lg mb-4">
              🧘‍♂️ Close your eyes, take deep breaths, and chant with devotion
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>• Repeat 108 times for maximum benefit</span>
              <span>• Best chanted during sunrise or sunset</span>
              <span>• Focus on the sound vibrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MantraSlider;