import React, { useState, useEffect } from 'react';

const ROLES = [
  "I am, software architect",
  "I am, hris talent solutions architect",
  "I am, system integrator",
  "I am, AI Solution Engineer"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const fullText = ROLES[roleIndex];
      
      if (isDeleting) {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
        }
      } else {
        // Typing
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <section id="hero" className="min-h-screen flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="max-w-4xl">
          <p className="text-accent font-mono mb-4 text-md">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightest-slate">
            Putranto Pratama.
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate mt-2 min-h-[5rem] sm:min-h-[8rem] md:min-h-[10rem]">
            <span>{currentText}</span>
            <span className="animate-pulse">|</span>
          </h2>
           <p className="mt-8 max-w-2xl text-lg text-slate">
            An enterprise app and automation architect with deep expertise in full-stack development, platform integration, and intelligent automation. I design and build scalable solutions that bridge business needs with robust, user-centric technology.
          </p>
          <div className="mt-12">
            <a
              href="#projects"
              className="text-accent font-mono border border-accent rounded-md px-8 py-4 text-lg hover:bg-accent/10 transition-colors duration-300"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;