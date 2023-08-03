'use client';

import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allProjects, Project } from 'contentlayer/generated';
import { ReactElement } from 'react';


const ProjectCard = (project: Project) => {
  // Define return type
  return (
    <div className="mb-8 ">
      <div>
        <h2 className="inline-block mb-1 text-lg font-semibold">
          <Link href={project.url} className="cursor-pointer" legacyBehavior>
            <a className="link-with-animation">
              <span className="cursor-pointer">{project.title}</span>
            </a>
          </Link>
        </h2>

        <div className="mb-4 text-sm">
          <span className="cursor-pointer">{project.description}</span>
        </div>
      </div>
    </div>
  );
};

// shows the list of projects in projectcards
export default function Home(): ReactElement {
  // Define return type

  // sort projects by count in order count descending
  const projects = allProjects.sort((a, b) => (b.count || 0) - (a.count || 0));

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-start">
        <p className="text-xs text-gray-600 ">Highlighting some cool builds:</p>
        <h1 className="mt-2 mb-1 text-xl font-semibold">Projects</h1>
        <p className="">
          Spending the moments I can building what I find useful
        </p>
      </div>
      <hr />
      <br />
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </article>
  );
}
