import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory, Skill } from '../types';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate mb-12">
          I'm always learning and exploring new technologies, but these are some of the tools and frameworks I'm most experienced with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category: SkillCategory) => (
            <div key={category.title} className="bg-light-navy p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-xl font-bold text-lightest-slate text-center mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 gap-6 mt-auto">
                {category.skills.map((skill: Skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-2 text-center bg-navy rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-sm hover:shadow-lg">
                    {skill.icon}
                    <span className="mt-2 text-xs font-mono text-slate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;