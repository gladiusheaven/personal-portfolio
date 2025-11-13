
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-light-slate mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
        </p>
        <a 
          href="mailto:putranto.pratama.ptr@gmail.com"
          className="inline-block text-green font-mono border border-green rounded-md px-8 py-4 text-lg hover:bg-green/10 transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
