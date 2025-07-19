import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Main Title */}
          <div>
            <h3 className="text-sacred text-3xl md:text-4xl mb-2">
              हर हर महादेव
            </h3>
            <p className="text-divine text-lg">
              Har Har Mahadev
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-border flex-1 max-w-20"></div>
            <Star className="h-5 w-5 text-accent" />
            <div className="h-px bg-border flex-1 max-w-20"></div>
          </div>

          {/* Sacred Mantras */}
          <div className="space-y-2">
            <p className="text-accent text-lg font-medium">
              ॐ नमः शिवाय • ॐ त्र्यम्बकं यजामहे • शिवो हम्
            </p>
            <p className="text-muted-foreground">
              Om Namah Shivaya • Om Tryambakam Yajamahe • Shivo Ham
            </p>
          </div>

          {/* Blessing */}
          <div className="bg-temple rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-divine text-lg italic">
              "May Lord Shiva's divine blessings be with you always. 
              May peace, prosperity, and spiritual wisdom guide your path."
            </p>
            <div className="mt-3 text-accent text-2xl">🕉️</div>
          </div>

          {/* Credit */}
          <div className="pt-6">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and devotion for Lord Shiva
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              This website is created for spiritual purposes and devotional practice
            </p>
          </div>

          {/* Final Mantra */}
          <div className="text-accent text-xl font-['Shrikhand']">
            ॐ शान्ति शान्ति शान्तिः
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;