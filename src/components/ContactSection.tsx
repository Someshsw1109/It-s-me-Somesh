
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-darker py-20">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-highlight hover:bg-highlight/90 text-dark font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-dark p-3 rounded-full mr-4">
                    <Mail className="text-highlight" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:your.email@example.com" className="hover:text-highlight transition-colors">
                      𝔀𝓸𝓻𝓴𝓶𝓪𝓲𝓵.𝓼𝓸𝓶𝓮𝓼𝓱@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark p-3 rounded-full mr-4">
                    <Phone className="text-highlight" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+15555555555" className="hover:text-highlight transition-colors">
                      +𝟡𝟙𝟠𝟚𝟟𝟙𝟞𝟟𝟟𝟡𝟙𝟝
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-dark p-6 rounded-lg mt-auto">
              <h4 className="font-bold mb-2">Current Availability</h4>
              <p className="text-gray-300 mb-2">I'm currently available for freelance projects or full-time positions.</p>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-green-500 text-sm">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
