import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
    {/* Image */}
    <div className="md:col-span-7 relative z-10">
      <a href={project.liveUrl || project.repoUrl || '#'} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden bg-green">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-x-1 group-hover:-translate-y-1 filter grayscale group-hover:filter-none"
        />
        <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/20 transition-colors duration-300"></div>
      </a>
    </div>

    {/* Content */}
    <div className="md:col-span-5 md:text-right relative z-20">
      <p className="text-green font-mono text-sm mb-2">Featured Project</p>
      <h3 className="text-2xl font-bold text-lightest-slate hover:text-green mb-4">
        <a href={project.liveUrl || project.repoUrl || '#'} target="_blank" rel="noopener noreferrer">{project.title}</a>
      </h3>
      <div className="bg-light-navy p-6 rounded-md shadow-lg mb-4">
        <p className="text-light-slate">{project.description}</p>
      </div>
      <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-sm text-slate">
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="flex justify-end mt-4 space-x-4">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-lightest-slate hover:text-green transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-lightest-slate hover:text-green transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? PROJECTS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === PROJECTS.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Section id="projects" title="Things I've Built">
      <div className="relative">
        {/* Carousel Container */}
        <div className="relative min-h-[450px] md:min-h-[350px]">
           {/* We map all projects but only show the active one via opacity for a smooth fade transition */}
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
               aria-hidden={index !== currentIndex}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious} 
          className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 z-20 text-slate hover:text-green p-2 rounded-full transition-colors duration-300"
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={goToNext} 
          className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 z-20 text-slate hover:text-green p-2 rounded-full transition-colors duration-300"
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots Navigator */}
        <div className="flex justify-center items-center space-x-3 mt-10">
          {PROJECTS.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === slideIndex ? 'bg-green' : 'bg-lightest-navy hover:bg-slate'
              }`}
              aria-label={`Go to project ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;