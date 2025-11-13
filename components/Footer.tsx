
import React from 'react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/putranto-pratama', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/putrapratama-fku', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
  { name: 'Instagram', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4 md:hidden">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
              {link.icon}
            </a>
          ))}
        </div>
        <p className="font-mono text-sm text-center text-slate">
          Designed & Built by Putranto Pratama
          <br />
          &copy; {new Date().getFullYear()}
        </p>
      </div>

      {/* Fixed Social Links for Desktop */}
      <div className="hidden md:block fixed bottom-0 left-12">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mx-auto after:mt-6">
          {socialLinks.map(link => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-transform transform hover:-translate-y-1 block">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

       {/* Fixed Email Link for Desktop */}
      <div className="hidden md:block fixed bottom-0 right-12">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mx-auto after:mt-6">
            <a href="mailto:putranto.pratama.ptr@gmail.com" className="font-mono text-sm text-slate hover:text-green [writing-mode:vertical-rl] tracking-widest transition-transform transform hover:-translate-y-1">
                putranto.pratama.ptr@gmail.com
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;