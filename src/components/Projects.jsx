import React from 'react';
import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="bg-primary px-16 min-h-screen py-10 max-sm:px-4">
      <h1 className="text-6xl font-bold text-pale-blue max-md:text-3xl">
        PROJECTS
      </h1>
      {projects.map(project=>(<ProjectCard {...project} />))}
    </section>
  );
};

export default Projects;