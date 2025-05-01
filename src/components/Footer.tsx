
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark border-t border-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-highlight">{'</'}</span>
                ƧӨMΣƧΉ
              <span className="text-highlight">{'>'}</span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/Someshsw1109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/somesh-raj-267383239" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:workmail.somesh@gmail.com" 
              className="text-gray-400 hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Somesh Raj. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
