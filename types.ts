// FIX: Import React to provide types for JSX.
import type React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  // FIX: Use React.ReactNode to correctly type JSX elements and resolve missing JSX namespace error.
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface NavLink {
    name: string;
    href: string;
}
