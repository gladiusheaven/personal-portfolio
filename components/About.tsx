
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-light-navy relative -mt-24 z-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-light-slate space-y-4">
          <p>
            Hello! I'm Putranto, a software engineer and automation architect with a passion for unifying fragmented workflows into seamless digital systems. My journey in tech is driven by a focus on delivering scalable, innovative solutions tailored to complex business needs.
          </p>
          <p>
           My expertise is in full-stack development using technologies like PHP, Python, and Node.js, alongside modern low-code platforms like Microsoft Power Platform. I have led initiatives that leverage cloud-native architecture, process orchestration, and conversational AI to drive hyperautomation.
          </p>
          <p>
            Whether I'm building custom HR applications from scratch, integrating enterprise systems like SAP, or developing AI-powered chatbots, my goal is always to create robust, secure, and user-centric solutions that make a tangible impact.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-start">
          <div className="relative w-64 h-64 group">
            <div className="absolute inset-0 bg-green rounded-lg transform transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <img 
              src="https://picsum.photos/seed/profile/400/400" 
              alt="Putranto Pratama" 
              className="absolute inset-0 w-full h-full object-cover rounded-lg filter grayscale hover:filter-none transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;