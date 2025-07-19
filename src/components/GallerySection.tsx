import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import templeSawan from '@/assets/temple-sawan.jpg';
import shivlingWorship from '@/assets/shivling-worship.jpg';
import sawanFestival from '@/assets/sawan-festival.jpg';
import heroShiva from '@/assets/hero-shiva.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: templeSawan,
      title: "Sacred Temple during Sawan",
      description: "Beautiful Shiva temple decorated for the holy month"
    },
    {
      src: shivlingWorship,
      title: "Shivling Worship",
      description: "Sacred offerings to Lord Shiva"
    },
    {
      src: sawanFestival,
      title: "Sawan Festival Celebration",
      description: "Devotees celebrating the holy month with devotion"
    },
    {
      src: heroShiva,
      title: "Lord Shiva in Meditation",
      description: "The divine form of Mahadev in cosmic meditation"
    },
    {
      src: templeSawan,
      title: "Temple Architecture",
      description: "Intricate stone carvings and sacred geometry"
    },
    {
      src: shivlingWorship,
      title: "Divine Abhishek",
      description: "Sacred water ceremony for Lord Shiva"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section className="py-20 bg-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sacred text-4xl md:text-5xl mb-4">
              दिव्य गैलरी
            </h2>
            <h3 className="text-divine text-2xl md:text-3xl mb-6">
              Sacred Gallery
            </h3>
            <p className="text-divine text-lg max-w-2xl mx-auto">
              Witness the divine beauty of Lord Shiva's temples, festivals, and the 
              spiritual devotion of Sawan through these sacred images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sacred hover:shadow-divine transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold mb-1">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <h4 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h4>
              <p className="text-sm opacity-90">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;