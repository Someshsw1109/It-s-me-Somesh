
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Programmer', 'Developer', 'Cricketer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (isTyping) {
        setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      } else {
        const nextIndex = (roleIndex + 1) % roles.length;
        setRoleIndex(nextIndex);
        setDisplayRole(roles[nextIndex]);
        setIsTyping(true);
      }
    }, isTyping ? 2000 : 500);

    return () => clearTimeout(typingTimer);
  }, [roleIndex, isTyping]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 w-full h-full">
          {Array(100).fill(0).map((_, index) => (
            <div key={index} className="border border-gray-700" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div 
          className={cn(
            "w-full md:w-2/3 transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="text-highlight font-mono mb-2">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="text-white">Somesh Raj</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6">
            I'm a <span className="text-highlight inline-block w-48">{displayRole}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mb-8">
            I build exceptional digital products for the web, focused on creating meaningful and valuable user interactions through my personal projects.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="bg-highlight hover:bg-highlight/90 text-dark px-6 py-3 rounded-md font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-highlight text-highlight hover:bg-highlight/10 px-6 py-3 rounded-md font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div 
          className={cn(
            "w-full md:w-1/3 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 bg-highlight/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 rounded-full bg-darker border-4 border-highlight/30 overflow-hidden">
                {/* Replace with your profile image */}
                <div className="w-full h-full bg-gradient-to-br from-dark to-darker flex items-center justify-center text-highlight text-9xl font-bold">
                  S͓̽R͓̽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
