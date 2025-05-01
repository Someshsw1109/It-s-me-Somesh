
import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-highlight relative">
              {/* Replace with your profile image */}
              <div className="w-full h-full bg-gradient-to-br from-darker to-dark flex items-center justify-center text-6xl font-bold text-highlight">
                S͓̽R͓̽
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-highlight"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-highlight"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Hello! I'm <span className="text-highlight">Somesh Raj</span>
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm a passionate full-stack developer with a focus on frontend development. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>            
            
            <p className="text-gray-300 mb-8">
              When I'm not coding, you'll find me hiking, reading, playing cricket or exploring new coffee shops in the city.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/Someshsw1109" icon={<Github />} label="GitHub" />
              <SocialLink href="mailto:workmail.somesh@gmail.com" icon={<Mail />} label="Email" />
              <SocialLink href="https://linkedin.com/in/somesh-raj-267383239" icon={<Linkedin />} label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string, 
  icon: React.ReactNode, 
  label: string 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-darker hover:bg-highlight/10 text-gray-300 hover:text-highlight border border-highlight/30 px-4 py-2 rounded-md transition-all duration-300"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default AboutSection;
