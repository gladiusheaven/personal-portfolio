import React from 'react';
import type { Project, SkillCategory, NavLink } from './types';

// Icons for skills
const PHPIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
      <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM9.623 14.33V9.67h1.27c1.392 0 2.29.754 2.29 2.33 0 1.576-.898 2.33-2.29 2.33H9.623zm1.27 1.428h-1.27V17h3.41c1.764 0 2.97-1.005 2.97-3.112 0-1.45-.913-2.442-2.342-2.81.692-.375 1.15-1.15 1.15-2.172C15.801 6.786 14.898 6 13.313 6H8.215v11h1.408v-2.67zM18.423 14.33V9.67h1.27c1.392 0 2.29.754 2.29 2.33 0 1.576-.898 2.33-2.29 2.33h-1.27zm1.27 1.428h-1.27V17h3.41c1.764 0 2.97-1.005 2.97-3.112 0-1.99-1.205-3.113-2.97-3.113h-3.41v7.553h1.27v-2.67z"/>
    </svg>
);

const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M12.001 2.003c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5h6v-4.5c0-2.485-2.016-4.5-4.5-4.5zm0 1.503a3 3 0 013 3v3h-6a3 3 0 013-3zm-6 3.002v4.5c0 2.485 2.016 4.5 4.5 4.5s4.5-2.015 4.5-4.5v-6h-4.5a4.5 4.5 0 00-4.5 6zm1.5 0a3 3 0 013-3h3v6a3 3 0 01-3 3 3 3 0 01-3-6z"/>
    </svg>
);


const PowerPlatformIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M12.35 2H3v9.35L12.35 2zM12.35 12.65H3V22h9.35L12.35 12.65zM22 2h-9.35l9.35 9.35V2zM12.65 12.65L22 22V12.65h-9.35z"/>
    </svg>
);

const SAPIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2ZM11 11H4.5L11 7V11ZM13 11V7L19.5 11H13ZM11 13V17L4.5 13H11ZM13 13H19.5L13 17V13Z" />
    </svg>
);

const RPAIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z" />
        <path d="M10 16h4" />
        <circle cx="8.5" cy="11.5" r=".5" fill="currentColor" />
        <circle cx="15.5" cy="11.5" r=".5" fill="currentColor" />
    </svg>
);

const AIIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path d="M9.5 13a1.5 1.5 0 0 1-3 0V9.5A1.5 1.5 0 0 1 8 8a1.5 1.5 0 0 1 1.5 1.5v3.5" />
        <path d="M14.5 13a1.5 1.5 0 0 1-3 0V9.5A1.5 1.5 0 0 1 13 8a1.5 1.5 0 0 1 1.5 1.5v3.5" />
        <path d="M19 12.5a2.5 2.5 0 0 1-2.5 2.5h-1.5A2.5 2.5 0 0 1 12.5 15V10" />
        <path d="M5 12.5A2.5 2.5 0 0 0 7.5 15h1.5A2.5 2.5 0 0 0 11.5 12.5V10" />
        <path d="M12 15a4 4 0 0 0-4-4h-.5" />
        <path d="M12 15a4 4 0 0 1 4-4h.5" />
    </svg>
);

const NodeJSIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
      <path d="M11.998 24l-1.895-1.07-.36-19.863 1.894-1.094 2.256 1.284 8.106 4.704v9.408l-8.105 4.704-1.895-1.07zm-9.998-6.195V6.195l8.103-4.704 1.895-1.094v2.164l.36 19.863-1.895 1.07-8.103-4.704zM12 11.025l-2.072-1.214-2.072-1.214-.252 4.148 2.072 1.214 2.324 1.35v-4.284zm2.324-2.564l2.072-1.214v4.854l-2.072 1.214v-4.854z"/>
    </svg>
);

const GitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path d="M18 18h-6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h6"></path><path d="m14 22-4-4 4-4"></path><path d="M10 2l4 4-4 4"></path>
    </svg>
);

const SystemIntegrationIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
  <path d="M12 2c-3.33 0-6 2.67-6 6s2.67 6 6 6 6-2.67 6-6-2.67-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
  <path d="M22 12c0-3.33-2.67-6-6-6v4c2.21 0 4 1.79 4 4h2z"/>
  <path d="M2 12c0-3.33 2.67-6-6-6v4c-2.21 0-4 1.79-4 4H2z"/>
  <path d="M12 22c3.33 0 6-2.67 6-6h-4c0 2.21-1.79 4-4 4v2z"/>
  <path d="M12 2c3.33 0 6 2.67 6 6h-4c0-2.21-1.79-4-4-4V2z"/>
 </svg>
);

const StakeholderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
);

const ProjectManagementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M12.01 16.51c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 8.5 12 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
        <path d="M12 11.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
);

const TechLeadershipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
);


// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

// Project Data
export const PROJECTS: Project[] = [
  {
    title: 'ASTRIDAI: HR AI Assistant',
    description: 'Led the design and deployment of an internal AI assistant for HR services using Azure OpenAI. The platform enables proactive, on-demand services like MCU scheduling, onboarding support, and integrates with Hirohub and SAP SuccessFactors.',
    tags: ['AI Assistant', 'Azure OpenAI', 'Power Platform', 'MS Teams', 'SAP SuccessFactors', 'HR Tech'],
    imageUrl: 'https://picsum.photos/seed/astridai/800/600',
    repoUrl: '#',
  },
  {
    title: 'AI-Powered Helpdesk Ticket Automation',
    description: 'Developed a Copilot-integrated helpdesk system using Microsoft Power Automate, reducing manual handling time from over 15 minutes per case to just 2-3 minutes. The system frees up staff for higher-value tasks by automating daily tickets.',
    tags: ['AI', 'Copilot', 'Power Automate', 'Helpdesk Automation', 'SAP C4C', 'OpenAI'],
    imageUrl: 'https://picsum.photos/seed/ai-helpdesk/800/600',
    repoUrl: '#',
  },
  {
    title: 'Revamp Hirohub using SAP Workzone',
    description: 'Spearheaded the revamp of the Hirohub internal portal with SAP Workzone to enhance the user journey and end-to-end integration. This initiative improved user engagement, adoption rates, and the efficiency of business processes for the CHRO organization.',
    tags: ['SAP Workzone', 'User Experience', 'UI/UX', 'Portal Revamp', 'HR Portal', 'Integration'],
    imageUrl: 'https://picsum.photos/seed/hirohub-revamp/800/600',
    repoUrl: '#',
  },
];

// Skills Data
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Backend',
    skills: [
      { name: 'PHP', icon: <PHPIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'Node.js', icon: <NodeJSIcon /> },
    ],
  },
  {
    title: 'Platforms & Automation',
    skills: [
      { name: 'Power Platform', icon: <PowerPlatformIcon /> },
      { name: 'SAP SuccessFactors', icon: <SAPIcon /> },
      { name: 'RPA', icon: <RPAIcon /> },
    ],
  },
   {
    title: 'AI & Development Tools',
    skills: [
      { name: 'AI & Machine Learning', icon: <AIIcon /> },
      { name: 'Git & CI/CD', icon: <GitIcon /> },
      { name: 'System Integration', icon: <SystemIntegrationIcon /> },
    ],
  },
  {
    title: 'Leadership',
    skills: [
        { name: 'Stakeholder Mgmt', icon: <StakeholderIcon /> },
        { name: 'Project Mgmt', icon: <ProjectManagementIcon /> },
        { name: 'Technical Leadership', icon: <TechLeadershipIcon /> },
    ],
  }
];