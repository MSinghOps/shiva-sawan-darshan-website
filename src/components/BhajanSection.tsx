import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

const BhajanSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBhajan, setCurrentBhajan] = useState(0);

  const bhajans = [
    {
      title: "Om Namah Shivaya",
      artist: "Sacred Chants",
      duration: "5:20",
      url: "https://www.soundjay.com/misc/sounds-of-nature/meditation-01.mp3" // Demo URL
    },
    {
      title: "Har Har Mahadev",
      artist: "Divine Vocals",
      duration: "6:15",
      url: "https://www.soundjay.com/misc/sounds-of-nature/meditation-02.mp3" // Demo URL
    }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-temple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sacred text-4xl md:text-5xl mb-4">
            दिव्य भजन
          </h2>
          <h3 className="text-divine text-2xl md:text-3xl mb-6">
            Sacred Bhajans
          </h3>
          <p className="text-divine text-lg max-w-2xl mx-auto">
            Immerse yourself in the divine vibrations of Lord Shiva's bhajans. 
            Let the sacred sounds purify your soul and connect you with the divine.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {bhajans.map((bhajan, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-sacred hover:shadow-divine transition-all duration-300">
              <div className="flex items-center space-x-4">
                {/* Play Button */}
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-primary hover:bg-accent transition-colors duration-300 flex items-center justify-center group"
                >
                  {isPlaying && currentBhajan === index ? (
                    <Pause className="h-6 w-6 text-primary-foreground" />
                  ) : (
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  )}
                </button>

                {/* Bhajan Info */}
                <div className="flex-1">
                  <h4 className="text-foreground text-xl font-semibold mb-1">{bhajan.title}</h4>
                  <p className="text-muted-foreground">{bhajan.artist}</p>
                </div>

                {/* Duration */}
                <div className="text-muted-foreground text-sm">
                  {bhajan.duration}
                </div>

                {/* Volume Icon */}
                <Volume2 className="h-5 w-5 text-accent" />
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: isPlaying && currentBhajan === index ? '45%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about audio */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            🎵 For demo purposes, these are placeholder audio files. In a real implementation, 
            you would integrate with your preferred audio streaming service or host bhajan files.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BhajanSection;