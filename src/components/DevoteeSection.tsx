import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DevoteeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    prayer: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "🙏 Prayer Received",
        description: "Your devotional message has been offered to Baba Bholenath. May Lord Shiva bless you with peace and prosperity.",
      });
      
      setFormData({ name: '', message: '', prayer: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-sacred">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sacred text-4xl md:text-5xl mb-4">
            भक्त संदेश
          </h2>
          <h3 className="text-divine text-2xl md:text-3xl mb-6">
            Devotee Messages
          </h3>
          <p className="text-divine text-lg max-w-2xl mx-auto">
            Share your prayers, gratitude, and devotional thoughts with Baba Bholenath. 
            Your sincere devotion reaches the divine heart of Lord Shiva.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-sacred">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-foreground text-lg font-medium mb-2">
                  Your Name (Devotee)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl 
                           text-foreground placeholder-muted-foreground
                           focus:ring-2 focus:ring-primary focus:border-transparent
                           transition-all duration-300"
                  placeholder="Enter your name..."
                />
              </div>

              {/* Prayer/Wish Field */}
              <div>
                <label htmlFor="prayer" className="block text-foreground text-lg font-medium mb-2">
                  Your Prayer / Wish
                </label>
                <textarea
                  id="prayer"
                  name="prayer"
                  value={formData.prayer}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl 
                           text-foreground placeholder-muted-foreground
                           focus:ring-2 focus:ring-primary focus:border-transparent
                           transition-all duration-300 resize-none"
                  placeholder="Share your prayers, wishes, or what you seek from Lord Shiva..."
                />
              </div>

              {/* Devotional Message Field */}
              <div>
                <label htmlFor="message" className="block text-foreground text-lg font-medium mb-2">
                  Devotional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl 
                           text-foreground placeholder-muted-foreground
                           focus:ring-2 focus:ring-primary focus:border-transparent
                           transition-all duration-300 resize-none"
                  placeholder="Express your gratitude, share your spiritual experience, or write a message of devotion to Baba Bholenath..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-divine group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                    Offering to Lord Shiva...
                  </span>
                ) : (
                  <>
                    <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Offer Prayer to Baba Bholenath
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Blessing Message */}
          <div className="mt-8 text-center bg-temple rounded-2xl p-6">
            <div className="text-accent text-3xl mb-3">🙏</div>
            <h4 className="text-divine text-xl font-semibold mb-2">
              Divine Blessing
            </h4>
            <p className="text-divine italic">
              "May Lord Shiva shower his divine blessings upon all devotees. 
              Every prayer offered with sincere devotion reaches the cosmic consciousness of Mahadev."
            </p>
            <div className="mt-4 text-accent text-lg font-['Shrikhand']">
              ॐ नमः शिवाय
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevoteeSection;